"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaDownload,
  FaExternalLinkAlt,
  FaShareAlt,
  FaCheck,
  FaFileAlt,
  FaFilePdf,
} from "react-icons/fa";

export default function ResumeViewer() {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"pdf" | "web">("pdf");

  const handleShare = async () => {
    const url = "https://jaisondavid.in/resume";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Jaison David — Resume",
          text: "Check out Jaison David's resume online:",
          url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-(--bg-color) text-(--text-color) flex flex-col">
      {/* Top Bar - Drive style viewer header */}
      <header className="sticky top-0 z-50 bg-(--bg-color)/90 backdrop-blur-md border-b-2 border-(--border-color) px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back button & Document title */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="card-shadow p-2 rounded-md border-2 border-(--border-color) hover:text-(--alter-color) flex items-center justify-center transition-all duration-200"
            aria-label="Back to Portfolio"
          >
            <FaArrowLeft size={16} />
          </Link>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg leading-tight tracking-wider uppercase">
              JAISON DAVID
            </span>
            <span className="text-xs text-(--text-color)/70 font-mono">
              Resume &bull; PDF Document
            </span>
          </div>
        </div>

        {/* Center: Toggle PDF / Web View */}
        <div className="hidden sm:flex items-center p-1 rounded-md border-2 border-(--border-color) logo-shadow text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setViewMode("pdf")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-200 ${
              viewMode === "pdf"
                ? "bg-(--primary-color) text-white font-extrabold shadow-sm"
                : "text-(--text-color) hover:text-(--primary-color)"
            }`}
          >
            <FaFilePdf size={14} />
            PDF View
          </button>
          <button
            onClick={() => setViewMode("web")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-200 ${
              viewMode === "web"
                ? "bg-(--primary-color) text-white font-extrabold shadow-sm"
                : "text-(--text-color) hover:text-(--primary-color)"
            }`}
          >
            <FaFileAlt size={14} />
            Web View
          </button>
        </div>

        {/* Right: Actions (Share, Download, Raw) */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="button-shadow px-3 sm:px-4 py-2 border-2 border-(--border-color) rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-(--alter-color)"
            title="Share Resume Link"
          >
            {copied ? (
              <>
                <FaCheck size={14} className="text-emerald-500" />
                <span className="hidden sm:inline">COPIED</span>
              </>
            ) : (
              <>
                <FaShareAlt size={14} />
                <span className="hidden sm:inline">SHARE</span>
              </>
            )}
          </button>

          <a
            href="/resume.pdf"
            download="Jaison-David-M-Resume.pdf"
            className="button-shadow px-3 sm:px-4 py-2 border-2 border-(--border-color) rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-(--alter-color) bg-(--card-background)"
            title="Download PDF"
          >
            <FaDownload size={14} />
            <span className="hidden sm:inline">DOWNLOAD</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="card-shadow p-2 sm:p-2.5 rounded-md border-2 border-(--border-color) hover:text-(--alter-color) flex items-center justify-center"
            title="Open Raw PDF in New Tab"
          >
            <FaExternalLinkAlt size={14} />
          </a>
        </div>
      </header>

      {/* Main Document Body */}
      <main className="flex-1 w-full flex flex-col items-center justify-center bg-(--bg-color)">
        {viewMode === "pdf" ? (
          <div className="w-full h-[calc(100vh-65px)] flex flex-col items-center justify-center p-2 sm:p-4">
            {/* Embedded interactive PDF iframe */}
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
              title="Jaison David Resume PDF"
              className="w-full max-w-5xl h-full rounded-lg border-2 border-(--border-color) portfolio-shadow bg-white"
            />
          </div>
        ) : (
          /* Web View: Clean responsive layout of the resume */
          <div className="w-full max-w-4xl px-4 py-8 sm:py-12 flex flex-col gap-8">
            {/* Header info */}
            <div className="border-4 border-(--border-color) p-6 sm:p-8 rounded-lg portfolio-shadow bg-(--bg-color)">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-(--border-color) pb-4 mb-4 gap-2">
                <div>
                  <h1 className="title-font text-3xl sm:text-4xl font-bold tracking-wider">
                    JAISON DAVID M
                  </h1>
                  <p className="font-mono text-sm sm:text-base text-(--primary-color) font-bold mt-1">
                    Backend &amp; Distributed Systems Engineer
                  </p>
                </div>
                <div className="flex flex-col text-xs sm:text-sm font-mono gap-1">
                  <a
                    href="mailto:jaison7373@gmail.com"
                    className="hover:underline text-(--primary-color)"
                  >
                    jaison7373@gmail.com
                  </a>
                  <a
                    href="tel:+919843777817"
                    className="hover:underline text-(--primary-color)"
                  >
                    +91 98437 77817
                  </a>
                  <a
                    href="https://github.com/jaisondavid-m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-(--primary-color)"
                  >
                    github.com/jaisondavid-m
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h2 className="tagline-font text-lg font-bold uppercase tracking-wider text-(--primary-color) mb-2">
                  Professional Summary
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  Full-Stack Developer who has built and deployed production web applications serving 5,700+ students, with hands-on experience in scalable systems using Go, React, MySQL, Redis, Docker, and Kafka. Skilled in designing secure REST APIs, implementing authentication and role-based access control, optimizing backend performance, and building responsive frontend interfaces. Pursuing a B.E. in Computer Science and Engineering; seeking a Full Stack Developer internship.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="tagline-font text-lg font-bold uppercase tracking-wider text-(--primary-color) mb-2">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-mono">
                  <div><strong>Languages:</strong> Java, Go, JavaScript, C</div>
                  <div><strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS</div>
                  <div><strong>Backend:</strong> Go (Gin), Node.js, Express.js, REST APIs, JWT</div>
                  <div><strong>Databases:</strong> MySQL, PostgreSQL, Redis</div>
                  <div><strong>Cloud &amp; DevOps:</strong> Docker, Nginx, Kafka, Git, GitHub, Linux</div>
                  <div><strong>Tools:</strong> Postman, Firebase Authentication</div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="tagline-font text-lg font-bold uppercase tracking-wider text-(--primary-color) mb-3">
                  Key Projects
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">iTrigger — Continuous Deployment Server</h3>
                      <a href="https://github.com/jaisondavid-m/iTrigger" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">React, Go (Gin), Docker, Caddy, GitHub Webhooks, MySQL</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                      <li>Automates deployments by mapping GitHub repositories and branches to server workflows.</li>
                      <li>HMAC-SHA256 signature verification to authenticate webhook triggers.</li>
                      <li>Containerized with Docker, Caddy HTTPS reverse proxy.</li>
                    </ul>
                  </div>

                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">BitCentral — Institutional Data Platform</h3>
                      <a href="https://github.com/jaisondavid-m/bitcentral-v2" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">React, Go (Gin), MySQL, Firebase Auth</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                      <li>Currently serving 5,700+ students across 20+ academic departments.</li>
                      <li>Thread-safe in-memory caching with sync.RWMutex and deep-copy buffers.</li>
                      <li>RBAC authorization middleware with Firebase JWT verification.</li>
                    </ul>
                  </div>

                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">ZeroProxyAttendance — Anti-Proxy Attendance</h3>
                      <a href="https://github.com/jaisondavid-m/ZeroProxyAttendance" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">React, Go, MySQL, Docker, REST APIs</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                      <li>Multi-factor cryptographic attendance verification to prevent proxy marking.</li>
                      <li>Rotating dynamic QR codes with GPS geofencing and campus Wi-Fi verification.</li>
                    </ul>
                  </div>

                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">Ticket Booking System — Distributed Architecture</h3>
                      <a href="https://github.com/jaisondavid-m/Ticket-Booking-System" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">Go (Gin), Apache Kafka, Redis, MySQL, Docker, Nginx</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                      <li>Designed to handle 100,000+ requests per second with strong consistency guarantees.</li>
                      <li>Atomic Redis Lua scripts to eliminate overselling and race conditions under heavy load.</li>
                      <li>Event-driven booking pipeline using Apache Kafka with MySQL inventory persistence.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mt-6 pt-4 border-t-2 border-(--border-color)">
                <h2 className="tagline-font text-lg font-bold uppercase tracking-wider text-(--primary-color) mb-2">
                  Education
                </h2>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <strong>Bannari Amman Institute of Technology, Erode</strong> &mdash; B.E. Computer Science and Engineering
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-(--text-color)/80 font-bold">
                      2021 &ndash; 2025
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-(--primary-color) font-bold font-mono">
                    CGPA: 9.28 / 10
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-2 border-t border-(--border-color)/30">
                    <div>
                      <strong>Holy Children Matriculation Higher Secondary School, Salem</strong>
                      <span className="text-xs text-(--text-color)/70 block sm:inline sm:ml-2">Salem, Tamil Nadu</span>
                    </div>
                    <div className="font-mono text-xs text-(--text-color)/80">
                      Higher Secondary (12th): <strong>569 / 600</strong> &bull; SSLC (10th): <strong>451 / 500</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
