"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaFolderOpen,
  FaExternalLinkAlt,
  FaSyncAlt,
} from "react-icons/fa";

const tools = [
  { name: "go", icon: "@icons/golang.svg" },
  { name: "react", icon: "@icons/react.svg" },
  { name: "aws", icon: "@icons/aws.svg" },
  { name: "mysql", icon: "@icons/mysql.svg" },
  { name: "bash", icon: "@icons/bash.svg" },
  { name: "docker", icon: "@icons/docker.svg" },
  { name: "github", icon: "@icons/github.svg" },
  { name: "jenkins", icon: "@icons/jenkins.svg" },
  { name: "nginx", icon: "@icons/nginx.svg" },
  { name: "linux", icon: "@icons/linux.svg" },
  { name: "redis", icon: "@icons/redis.svg" },
  { name: "kafka", icon: "@icons/kafka.svg" },
];

interface RecruiterGithubData {
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: Array<{ name: string; percentage: number }>;
  latestActivity: { type: string; repo: string; timeAgo: string } | null;
}

const FALLBACK_STATS: RecruiterGithubData = {
  publicRepos: 69,
  totalStars: 2,
  totalForks: 1,
  topLanguages: [
    { name: "JavaScript", percentage: 67 },
    { name: "HTML", percentage: 18 },
    { name: "Go", percentage: 8 },
    { name: "Python", percentage: 4 },
  ],
  latestActivity: {
    type: "Pushed to",
    repo: "jaisondavid-m/portfolio",
    timeAgo: "Recently active",
  },
};

function formatRelativeTime(dateString: string): string {
  try {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - eventDate.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays}d ago`;
    return eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return "Recently";
  }
}

function formatEventType(type: string): string {
  switch (type) {
    case "PushEvent":
      return "Pushed code to";
    case "PullRequestEvent":
      return "PR opened in";
    case "CreateEvent":
      return "Created repo/branch in";
    case "ForkEvent":
      return "Forked repo";
    default:
      return "Updated";
  }
}

const CACHE_KEY = "github_recruiter_stats_v1";
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export default function Tools() {
  const [stats, setStats] = useState<RecruiterGithubData>(FALLBACK_STATS);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isLive, setIsLive] = useState(false);

  const fetchGithubStats = useCallback(async (isManual = false) => {
    if (isManual) setIsSyncing(true);

    try {
      if (!isManual && typeof window !== "undefined") {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL_MS && data) {
            setStats(data);
            setIsLive(true);
            return;
          }
        }
      }

      const headers: HeadersInit = { Accept: "application/vnd.github.v3+json" };
      const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch("https://api.github.com/users/jaisondavid-m", { headers }),
        fetch("https://api.github.com/users/jaisondavid-m/repos?per_page=100&sort=updated", { headers }),
        fetch("https://api.github.com/users/jaisondavid-m/events/public?per_page=5", { headers }),
      ]);

      if (!userRes.ok) throw new Error("GitHub user request failed");

      const user = await userRes.json();
      const repos = reposRes.ok ? await reposRes.json() : [];
      const events = eventsRes.ok ? await eventsRes.json() : [];

      let totalStars = 0;
      let totalForks = 0;
      const langCounts: Record<string, number> = {};

      if (Array.isArray(repos)) {
        repos.forEach((repo: { stargazers_count?: number; forks_count?: number; language?: string }) => {
          totalStars += repo.stargazers_count || 0;
          totalForks += repo.forks_count || 0;
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });
      }

      const totalLangs = Object.values(langCounts).reduce((a, b) => a + b, 0);
      const topLanguages = Object.entries(langCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([name, count]) => ({
          name,
          percentage: totalLangs > 0 ? Math.round((count / totalLangs) * 100) : 0,
        }));

      let latestActivity = null;
      if (Array.isArray(events) && events.length > 0) {
        latestActivity = {
          type: formatEventType(events[0].type),
          repo: events[0].repo?.name || "jaisondavid-m/portfolio",
          timeAgo: formatRelativeTime(events[0].created_at),
        };
      }

      const freshData: RecruiterGithubData = {
        publicRepos: user.public_repos ?? 69,
        totalStars,
        totalForks,
        topLanguages: topLanguages.length > 0 ? topLanguages : FALLBACK_STATS.topLanguages,
        latestActivity: latestActivity || FALLBACK_STATS.latestActivity,
      };

      setStats(freshData);
      setIsLive(true);

      if (typeof window !== "undefined") {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), data: freshData })
        );
      }
    } catch {
      setIsLive(false);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  useEffect(() => {
    fetchGithubStats();
  }, [fetchGithubStats]);

  return (
    <section id="skills" className="bg-[--bg-color] scroll-mt-20">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold tracking-wider">
            SKILLS.
          </h2>
          <span className="text-xs sm:text-sm font-semibold opacity-75 uppercase tracking-wider">
            STACK &amp; LIVE CODEBASE FOOTPRINT
          </span>
        </div>

        <hr className="w-full border-color border-2" />

        {/* Tools Grid */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 sm:gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="skill-card-shadow rounded-lg border-color border-3 w-full aspect-square flex items-center justify-center p-4 bg-(--bg-color)"
            >
              <Image
                src={tool.icon.replace("@icons", "/icons")}
                alt={tool.name}
                width={80}
                height={80}
                className="object-contain max-h-[70%] max-w-[70%]"
              />
            </div>
          ))}
        </div>

        {/* Live GitHub Proof & Activity (Merged clean for recruiters) */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t-2 border-color">
          {/* Subsection header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <FaGithub size={22} className="text-(--primary-color) dark:text-pink-400" />
              <h3 className="tagline-font text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider">
                GITHUB LIVE ACTIVITY &amp; STATS
              </h3>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-auto flex-wrap">
              <span className="logo-shadow rounded-md border-color border-2 px-2.5 py-1 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-(--bg-color)">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  {isLive ? "LIVE API" : "CACHED"}
                </span>
              </span>

              <button
                onClick={() => fetchGithubStats(true)}
                disabled={isSyncing}
                className="card-shadow rounded-md border-color border-2 px-2.5 py-1 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider hover:bg-(--base-color) hover:text-(--alter-color) cursor-pointer transition-all duration-200 disabled:opacity-50"
                title="Sync live GitHub data"
                aria-label="Sync GitHub data"
              >
                <FaSyncAlt size={10} className={isSyncing ? "animate-spin" : ""} />
                <span>{isSyncing ? "SYNCING..." : "SYNC"}</span>
              </button>
            </div>
          </div>

          {/* 3 Recruiter-Focused Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Public Codebase & Recognition */}
            <div className="education-card-shadow border-color border-3 rounded-lg p-5 bg-(--bg-color) flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                    Repositories &amp; Impact
                  </span>
                  <div className="logo-shadow rounded-md border-2 border-color p-1.5 text-(--primary-color) dark:text-pink-400">
                    <FaFolderOpen size={16} />
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="tagline-font text-3xl sm:text-4xl font-black">
                    {stats.publicRepos}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                    Public Repos
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-color/40 flex items-center justify-between text-xs font-mono font-bold">
                <span className="inline-flex items-center gap-1 text-(--primary-color) dark:text-pink-400">
                  <FaStar size={12} /> {stats.totalStars} Stars
                </span>
                <span className="inline-flex items-center gap-1 opacity-75">
                  <FaCodeBranch size={12} /> {stats.totalForks} Forks
                </span>
              </div>
            </div>

            {/* Card 2: Codebase Language Distribution */}
            <div className="education-card-shadow border-color border-3 rounded-lg p-5 bg-(--bg-color) flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                    Codebase Distribution
                  </span>
                  <span className="text-[11px] font-mono opacity-70">
                    From repos
                  </span>
                </div>

                <div className="space-y-2">
                  {stats.topLanguages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                        <span>{lang.name}</span>
                        <span className="font-mono text-[11px] opacity-75">
                          {lang.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 border border-color rounded-sm bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                        <div
                          className="h-full bg-(--primary-color) dark:bg-pink-400 transition-all duration-300"
                          style={{ width: `${Math.max(lang.percentage, 6)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Recent Activity & GitHub Profile Link */}
            <div className="education-card-shadow border-color border-3 rounded-lg p-5 bg-(--bg-color) flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                    Latest Activity
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>

                {stats.latestActivity && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                        {stats.latestActivity.type}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {stats.latestActivity.timeAgo}
                      </span>
                    </div>
                    <p className="font-mono font-bold text-sm sm:text-base text-(--primary-color) dark:text-pink-400 break-all leading-snug">
                      {stats.latestActivity.repo}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t-2 border-color/40">
                <Link
                  href="https://github.com/jaisondavid-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full button-shadow rounded-md hover:text-(--alter-color) border-color border-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider inline-flex gap-2 items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <FaGithub size={15} />
                  <span>jaisondavid-m</span>
                  <FaExternalLinkAlt size={11} className="opacity-75" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
