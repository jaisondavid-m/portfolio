import type { Metadata } from "next";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Jaison David — Backend & Distributed Systems Engineer",
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
  return <ResumeViewer />;
}
