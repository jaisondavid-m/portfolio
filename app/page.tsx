import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechnicalSkills from "@/components/Projects";
import Tools from "@/components/Skills";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://jaisondavid.in/#webpage",
      "url": "https://jaisondavid.in",
      "name": "Jaison David | Backend & Distributed Systems Engineer",
      "about": { "@id": "https://jaisondavid.in/#person" },
      "mainEntity": { "@id": "https://jaisondavid.in/#person" },
      "hasPart": { "@id": "https://jaisondavid.in/#projects" },
    },
    {
      "@type": "ItemList",
      "@id": "https://jaisondavid.in/#projects",
      "name": "Projects by Jaison David",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Interview Portal",
          "description":
            "Distributed technical interview and lab engineering platform with WebRTC, collaborative workspaces, SQL sandboxes, automated grading, and blue-green deployment.",
          "applicationCategory": "DeveloperApplication",
          "author": { "@id": "https://jaisondavid.in/#person" },
          "codeRepository": "https://github.com/jaisondavid-m/Interview-Portal",
          "programmingLanguage": ["Go", "JavaScript", "SQL"],
          "url": "https://github.com/jaisondavid-m/Interview-Portal",
        },
        {
          "@type": "SoftwareApplication",
          "name": "BitCentral",
          "description":
            "Full-stack institutional data platform serving students and faculty across academic departments through secure REST APIs.",
          "applicationCategory": "WebApplication",
          "author": { "@id": "https://jaisondavid.in/#person" },
          "codeRepository": "https://github.com/jaisondavid-m/bitcentral-v2",
          "url": "https://bitcentral.bitsathy.in",
          "programmingLanguage": ["Go", "JavaScript", "SQL"],
        },
        {
          "@type": "SoftwareApplication",
          "name": "ZeroProxyAttendance",
          "description":
            "QR attendance and anti-proxy system combining dynamic QR handshakes, GPS geofencing, and campus network validation.",
          "applicationCategory": "WebApplication",
          "author": { "@id": "https://jaisondavid.in/#person" },
          "codeRepository": "https://github.com/jaisondavid-m/ZeroProxyAttendance",
          "programmingLanguage": ["Go", "JavaScript", "SQL"],
          "url": "https://github.com/jaisondavid-m/ZeroProxyAttendance",
        },
        {
          "@type": "SoftwareApplication",
          "name": "Ticket Booking System",
          "description":
            "Distributed high-throughput ticket booking backend using Redis atomic availability gates, Kafka booking pipelines, and asynchronous MySQL inventory updates.",
          "applicationCategory": "DeveloperApplication",
          "author": { "@id": "https://jaisondavid.in/#person" },
          "codeRepository": "https://github.com/jaisondavid-m/Ticket-Booking-System",
          "programmingLanguage": ["Go", "SQL"],
          "url": "https://github.com/jaisondavid-m/Ticket-Booking-System",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <div className="app-container flex flex-col">
      <Header />

      <main className="max-w-6xl mx-auto border-r-2 border-l-2">
        <Hero />
        <About />
        <Education />
        <TechnicalSkills />
        <Tools />
        <LetsConnect />
        <Footer />
      </main>
      </div>
    </>
  );
}
