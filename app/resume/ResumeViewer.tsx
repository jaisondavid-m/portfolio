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
            className="button-shadow px-3 sm:px-4 py-2 border-2 border-(--border-color) rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-(--alter-color)"
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
                    href="mailto:connect@jaisondavid.in"
                    className="hover:underline text-(--primary-color)"
                  >
                    connect@jaisondavid.in
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
                  Full-Stack Developer specializing in high-throughput distributed systems, event-driven architectures, and production platforms currently serving 5,700+ students. Experienced in Go (Gin), React 19, MySQL HA Clustering, Redis, Docker, and Apache Kafka, with a strong focus on concurrency control, low-latency API design, zero-downtime deployments, and containerized microservices. Pursuing a B.E. in Computer Science and Engineering; seeking a Software Engineering / Full-Stack Developer internship.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="tagline-font text-lg font-bold uppercase tracking-wider text-(--primary-color) mb-2">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-mono">
                  <div><strong>Languages:</strong> Go (Golang), Java, JavaScript / TypeScript, C, SQL, Bash</div>
                  <div><strong>Frontend:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS</div>
                  <div><strong>Backend:</strong> Go (Gin), REST APIs, Apache Kafka, Redis, WebRTC, WebSockets</div>
                  <div><strong>Databases:</strong> MySQL (HA Cluster, GTID Failover), PostgreSQL, Redis</div>
                  <div><strong>Cloud &amp; DevOps:</strong> Docker, Docker Compose, Nginx, Blue-Green Deploy, Linux, Git, Jenkins CI/CD</div>
                  <div><strong>Tools:</strong> Postman, Firebase Authentication, CodeMirror</div>
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
                      <h3 className="font-bold text-base">Interview Portal — Distributed Peer-to-Peer Technical Interview &amp; Lab Engineering Platform</h3>
                      <a href="https://github.com/jaisondavid-m/Interview-Portal" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">Go 1.23 (Gin), React 19, MySQL 8.0 HA Cluster, Redis 7, Docker Compose, Nginx, WebRTC, Jenkins CI/CD</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1.5">
                      <li><strong>Automated Peer Role-Reversal &amp; Double-Blind Audio:</strong> Built an enterprise technical interview engine where sessions split into two balanced rounds with automated mid-interview role swap (interviewer ↔ candidate) and anonymous WebRTC audio signaling to eliminate unconscious cognitive bias while simulating realistic phone screenings.</li>
                      <li><strong>4 Domain-Specific Interactive Workspaces:</strong> Developed real-time collaborative environments with live canvas and state synchronization: <em>System Design Studio</em> (drag-and-drop cloud nodes with protocol links), <em>Algorithm Code Lab</em> (live multi-language editor for C++, Java, Python, JS with test validation), <em>MCQ Speed Arena</em>, and an isolated SQL sandbox.</li>
                      <li><strong>Isolated Database Sandbox Engine:</strong> Provisioned a dedicated, containerized MySQL sandbox instance (port 3309) with dynamic ephemeral schema namespaces, enabling candidates to execute arbitrary live DDL/DML queries and indexing tests safely outside production database boundaries.</li>
                      <li><strong>Zero-Downtime Blue-Green Deployment:</strong> Engineered containerized Blue-Green deployment architecture with dual Go instances (<code className="text-xs">app-blue:8081</code>, <code className="text-xs">app-green:8082</code>), automated pre-flight <code className="text-xs">/health</code> probing, atomic Nginx upstream switching (<code className="text-xs">nginx -s reload</code>) with zero dropped in-flight connections, sub-second instant rollback (&lt; 1s), and declarative Jenkins CI/CD automation.</li>
                      <li><strong>High-Availability MySQL Cluster &amp; GTID Auto-Failover:</strong> Designed database architecture using <code className="text-xs">GORM DBResolver</code> for read/write splitting (Primary :3306 for writes; 2 Read Replicas :3307 &amp; :3308 with RandomPolicy load balancing and 500-conn pool) and built a standalone Python supervisor daemon (<code className="text-xs">failover_manager.py</code>) running 3s heartbeat probes with automated highest-GTID replica election for zero data loss.</li>
                    </ul>
                  </div>

                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">BitCentral — Institutional Data Platform</h3>
                      <div className="flex items-center gap-2">
                        <a href="https://github.com/jaisondavid-m/bitcentral-v2" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                        <span className="text-xs text-(--text-color)/50">&bull;</span>
                        <a href="https://bitcentral.bitsathy.in" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline font-bold">Live Demo</a>
                      </div>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">React, Go (Gin), MySQL, Docker, Linux, Firebase Auth</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                      <li>Currently serving 5,700+ students and faculty across 20+ academic departments via secure, high-throughput REST APIs.</li>
                      <li>Designed a thread-safe in-memory caching layer using <code className="text-xs">sync.RWMutex</code> and deep-copy buffers, reducing external Google Sheets API calls and drastically cutting endpoint response latency.</li>
                      <li>Implemented fine-grained RBAC authorization middleware, SQL-backed role validation, and Firebase JWT authentication for secure institutional access control.</li>
                      <li>Optimized MySQL query performance using atomic database transactions, indexing strategies, and high-concurrency connection pooling.</li>
                    </ul>
                  </div>

                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">ZeroProxyAttendance — QR Attendance &amp; Anti-Proxy System</h3>
                      <a href="https://github.com/jaisondavid-m/ZeroProxyAttendance" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">React, Go (Gin), MySQL, Docker, REST APIs</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                      <li>Built an anti-proxy attendance platform eliminating check-in manipulation and student fraud through time-sensitive dynamic QR code cryptographic handshakes.</li>
                      <li>Integrated dual-factor physical presence verification combining GPS geofencing radius checks with campus local network / Wi-Fi IP validation to guarantee in-class presence.</li>
                      <li>Developed responsive instructor dashboards featuring live validation feeds, real-time proxy anomaly detection, and automated attendance record export pipelines.</li>
                    </ul>
                  </div>

                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-base">Ticket Booking System — Distributed High-Throughput Architecture</h3>
                      <a href="https://github.com/jaisondavid-m/Ticket-Booking-System" target="_blank" rel="noopener noreferrer" className="text-xs text-(--primary-color) font-mono underline">GitHub</a>
                    </div>
                    <p className="text-xs font-mono text-(--primary-color) mt-0.5">Go (Gin), Apache Kafka, Redis, MySQL, Docker, Nginx</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                      <li>Engineered a distributed ticket booking backend designed to handle 100,000+ requests per second with strict ACID and linearizable consistency guarantees.</li>
                      <li>Implemented atomic Redis Lua script availability gates to prevent seat overselling and completely eliminate race conditions under intense concurrency.</li>
                      <li>Designed an asynchronous event-driven booking pipeline using Apache Kafka (12 partitions, 32 worker consumers) with resilient MySQL inventory persistence.</li>
                      <li>Configured Nginx least-connections load balancing, idempotency keys with 24-hour TTL, and dead-letter queues (DLQ) for fault tolerance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mt-6 pt-4 border-t-2 border-(--border-color)">
                <h2 className="tagline-font text-lg font-bold uppercase tracking-wider text-(--primary-color) mb-3">
                  Education
                </h2>
                <div className="space-y-4">
                  {/* College */}
                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-bold text-base">
                        Bannari Amman Institute of Technology
                      </h3>
                      <span className="font-mono text-xs sm:text-sm font-bold text-(--text-color)/80 shrink-0 whitespace-nowrap">
                        2025 &ndash; 2029
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                      <p className="text-(--primary-color) font-mono font-bold">
                        B.E. in Computer Science and Engineering <span className="text-(--text-color)/50 font-normal">&bull;</span> <span className="font-normal text-(--text-color)/80">Erode, Tamil Nadu</span>
                      </p>
                      <span className="font-mono font-bold text-(--primary-color) shrink-0 whitespace-nowrap">
                        CGPA: 9.28 / 10
                      </span>
                    </div>
                  </div>

                  {/* School */}
                  <div className="p-4 border-2 border-(--border-color) rounded-md logo-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-bold text-base">
                        Holy Children Matriculation Higher Secondary School
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-(--text-color)/70 shrink-0 whitespace-nowrap">
                        Salem, Tamil Nadu
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm pt-1">
                      <span className="text-(--text-color)/80">
                        Higher Secondary (12th) &amp; SSLC (10th)
                      </span>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm shrink-0">
                        <span className="border border-(--border-color) px-2 py-0.5 rounded font-bold text-(--primary-color)">
                          12th: 569 / 600
                        </span>
                        <span className="border border-(--border-color) px-2 py-0.5 rounded font-bold text-(--primary-color)">
                          10th: 451 / 500
                        </span>
                      </div>
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
