import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "iTrigger — Continuous Deployment & Webhook Automation Server",
    description:
      "A lightweight continuous deployment platform built in Go (Gin) that automates deployments by mapping GitHub repositories and branches to server-side deployment workflows. Features HMAC-SHA256 webhook signature verification to authenticate GitHub events and prevent unauthorized triggers, containerized microservices using Docker and Docker Compose with Caddy as an HTTPS reverse proxy, and a role-based deployment dashboard with manual triggers, real-time execution logs, and deployment analytics.",
    icons: [
      "@icons/react.svg",
      "@icons/golang.svg",
      "@icons/docker.svg",
      "@icons/caddy.svg",
      "@icons/github.svg",
      "@icons/mysql.svg",
    ],
    github: "https://github.com/jaisondavid-m/iTrigger",
  },
  {
    name: "BitCentral — Full-Stack Institutional Data Platform",
    description:
      "A full-stack institutional data platform serving 3,500+ students across 20+ academic departments through secure REST APIs. Engineered with a thread-safe in-memory caching layer using sync.RWMutex and deep-copy buffers, reducing Google Sheets API calls and improving response latency. Implements RBAC authorization middleware, SQL-backed role validation, domain-based access control, and optimized MySQL performance using transactions, indexing strategies, and connection pooling.",
    icons: [
      "@icons/react.svg",
      "@icons/golang.svg",
      "@icons/mysql.svg",
      "@icons/docker.svg",
      "@icons/linux.svg",
    ],
    github: "https://github.com/jaisondavid-m/bitcentral-v2",
  },
  {
    name: "ZeroProxyAttendance — QR Attendance & Anti-Proxy System",
    description:
      "An intelligent, high-trust classroom attendance monitoring system engineered to eliminate proxy attendance and check-in manipulation. Combines dynamic QR code cryptographic handshakes, GPS geofencing / location verification, and local campus network validation to guarantee that attendance can only be marked by students physically present in the classroom, backed by secure REST APIs and real-time validation dashboards.",
    icons: [
      "@icons/react.svg",
      "@icons/javascript.svg",
      "@icons/mysql.svg",
      "@icons/docker.svg",
    ],
    github: "https://github.com/jaisondavid-m/ZeroProxyAttendance",
  },
  {
    name: "Ticket Booking System — Distributed High-Throughput Architecture",
    description:
      "A high-throughput, distributed ticket booking backend engineered to handle 100,000+ requests per second with strong consistency guarantees. Implements atomic Redis Lua script availability gates to prevent overselling, Kafka event-driven booking pipelines (12 partitions, 32 worker consumers), Nginx least-connections load balancing, idempotency keys with 24-hour TTL, and asynchronous MySQL inventory updates.",
    icons: [
      "@icons/golang.svg",
      "@icons/kafka.svg",
      "@icons/redis.svg",
      "@icons/mysql.svg",
      "@icons/docker.svg",
      "@icons/nginx.svg",
    ],
    github: "https://github.com/jaisondavid-m/Ticket-Booking-System",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          PROJECTS.
        </h2>
        <hr className="w-full border-color border-2" />

        {/* Responsive grid: 1 col on small, 2 cols on large */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group project-card-shadow border-color border-3 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between"
            >
              {/* Project Info */}
              <div>
                <h3 className="tagline-font font-light text-xl sm:text-2xl mb-2 sm:mb-3">
                  {project.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  <span className="font-bold underline">OVERVIEW:</span>{" "}
                  {project.description}
                </p>

                {/* Icons row */}
                <h3 className="font-bold mb-2 sm:mb-3 underline text-sm sm:text-base">
                  TOOLS:{" "}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.icons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon.replace("@icons", "/icons")}
                      alt="tech icon"
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                    />
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-6 inline-flex group-hover:text-(--alter-color) dark:group-hover:text-white group-hover:bg-gray-700 transition-all duration-300 items-center justify-center gap-2 px-3 sm:px-4 py-2 border-2 rounded-md text-sm sm:text-md font-semibold"
              >
                <span>View on GitHub</span>
                <FaGithub size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
