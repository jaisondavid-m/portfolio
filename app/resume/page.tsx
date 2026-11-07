import type { Metadata } from "next";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View the professional resume of Jaison David online. Specialized in Go (Gin), Apache Kafka, Redis, Docker, and scalable distributed architectures.",
  alternates: {
    canonical: "https://jaisondavid.in/resume",
  },
  openGraph: {
    title: "Resume | Jaison David — Backend & Distributed Systems Engineer",
    description:
      "Interactive online resume of Jaison David. View projects, skills, education, and achievements.",
    url: "https://jaisondavid.in/resume",
    type: "profile",
  },
};

export default function ResumePage() {
  const resumeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://jaisondavid.in/resume#webpage",
    "url": "https://jaisondavid.in/resume",
    "name": "Resume | Jaison David",
    "description": metadata.description,
    "isPartOf": { "@id": "https://jaisondavid.in/#website" },
    "about": { "@id": "https://jaisondavid.in/#person" },
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "Jaison David Resume",
      "author": { "@id": "https://jaisondavid.in/#person" },
      "encoding": {
        "@type": "MediaObject",
        "contentUrl": "https://jaisondavid.in/resume.pdf",
        "encodingFormat": "application/pdf",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      <ResumeViewer />
    </>
  );
}
