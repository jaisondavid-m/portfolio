import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://jaisondavid.in/about/jaison-david";
const personId = "https://jaisondavid.in/#person";

export const metadata: Metadata = {
  title: "About Jaison David",
  description:
    "Learn about Jaison David, a Backend & Distributed Systems Engineer focused on Go, event-driven systems, databases, DevOps, and full-stack applications.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "About Jaison David | Backend & Distributed Systems Engineer",
    description:
      "Professional profile, technical focus, projects, education, and contact details for Jaison David.",
    url: pageUrl,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About Jaison David",
    description:
      "Professional profile, technical focus, projects, education, and contact details for Jaison David.",
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "About Jaison David",
      isPartOf: { "@id": "https://jaisondavid.in/#website" },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Jaison David?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jaison David is a Backend & Distributed Systems Engineer and Full-Stack Developer.",
          },
        },
        {
          "@type": "Question",
          name: "What does Jaison David specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "His technical focus includes Go with Gin, Apache Kafka, Redis, MySQL, Docker, REST APIs, distributed systems, and React-based interfaces.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Jaison David study?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jaison David is pursuing a B.E. in Computer Science & Engineering at Bannari Amman Institute of Technology in Erode, Tamil Nadu, from 2025 to 2029.",
          },
        },
        {
          "@type": "Question",
          name: "How can someone contact Jaison David?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional inquiries can be sent to connect@jaisondavid.in.",
          },
        },
      ],
    },
  ],
};

export default function AboutJaisonDavidPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <main className="app-container min-h-screen">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <p className="tagline-font text-sm uppercase tracking-wider text-(--primary-color)">
            Professional profile
          </p>
          <h1 className="title-font text-4xl sm:text-6xl text-(--primary-color) font-bold mt-3">
            About Jaison David
          </h1>
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed mt-6">
            Jaison David is a Backend &amp; Distributed Systems Engineer and
            Full-Stack Developer focused on scalable, high-throughput software.
          </p>

          <div className="mt-12 space-y-10 text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="title-font text-2xl sm:text-3xl font-bold text-(--primary-color)">
                Professional identity
              </h2>
              <p className="mt-3">
                Jaison builds backend services, distributed architectures,
                event-driven workflows, and responsive web interfaces. His
                public portfolio documents work with Go (Gin), Apache Kafka,
                Redis, MySQL, Docker, Nginx, React, and Next.js.
              </p>
            </section>

            <section>
              <h2 className="title-font text-2xl sm:text-3xl font-bold text-(--primary-color)">
                Technical expertise
              </h2>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Backend APIs and services with Go and Gin.</li>
                <li>Distributed and event-driven systems with Kafka and Redis.</li>
                <li>Relational data storage and optimization with MySQL.</li>
                <li>Containerized deployment and reverse proxying with Docker and Nginx.</li>
                <li>Web interfaces with React and Next.js.</li>
              </ul>
            </section>

            <section>
              <h2 className="title-font text-2xl sm:text-3xl font-bold text-(--primary-color)">
                Selected projects
              </h2>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong>Interview Portal:</strong> a technical interview and
                  lab engineering platform using Go, React, MySQL, Redis,
                  Docker, Nginx, and WebRTC.
                </li>
                <li>
                  <strong>BitCentral:</strong> an institutional data platform
                  with secure REST APIs and a live demo.
                </li>
                <li>
                  <strong>ZeroProxyAttendance:</strong> a QR attendance and
                  anti-proxy system using cryptographic handshakes, GPS
                  geofencing, and campus network validation.
                </li>
                <li>
                  <strong>Ticket Booking System:</strong> a distributed
                  booking backend using Redis, Kafka, MySQL, and Go.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="title-font text-2xl sm:text-3xl font-bold text-(--primary-color)">
                Education
              </h2>
              <p className="mt-3">
                Jaison is pursuing a B.E. in Computer Science &amp; Engineering
                at Bannari Amman Institute of Technology in Erode, Tamil Nadu
                (2025–2029).
              </p>
            </section>

            <section>
              <h2 className="title-font text-2xl sm:text-3xl font-bold text-(--primary-color)">
                Frequently asked questions
              </h2>
              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="font-bold">Does Jaison specialize in backend development?</h3>
                  <p>Yes. His portfolio focuses on backend engineering, distributed systems, and full-stack applications.</p>
                </div>
                <div>
                  <h3 className="font-bold">What programming languages does he use?</h3>
                  <p>His documented projects use Go, JavaScript, and SQL, alongside React and Next.js applications.</p>
                </div>
                <div>
                  <h3 className="font-bold">Where can his projects be found?</h3>
                  <p>
                    The <Link className="underline" href="https://github.com/jaisondavid-m">Jaison David GitHub profile</Link>{" "}
                    contains his public repositories and project source code.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="title-font text-2xl sm:text-3xl font-bold text-(--primary-color)">
                Contact
              </h2>
              <p className="mt-3">
                For professional inquiries, email{" "}
                <a className="underline" href="mailto:connect@jaisondavid.in">
                  connect@jaisondavid.in
                </a>
                .
              </p>
            </section>
          </div>

          <nav className="mt-12 flex flex-wrap gap-4" aria-label="Related pages">
            <Link className="underline" href="/">
              Portfolio
            </Link>
            <Link className="underline" href="/resume">
              Resume
            </Link>
          </nav>
        </article>
      </main>
    </>
  );
}
