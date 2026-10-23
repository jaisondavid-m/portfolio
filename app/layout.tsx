import type { Metadata } from "next";
import { Archivo_Black, EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaisondavid.in"),
  title: {
    default: "Jaison David | Backend & Distributed Systems Engineer",
    template: "%s | Jaison David",
  },
  description:
    "Official portfolio of Jaison David, a Backend & Distributed Systems Engineer specializing in Go (Gin), Apache Kafka, Redis, Docker, and high-throughput architectures.",
  applicationName: "Jaison David Portfolio",
  authors: [{ name: "Jaison David", url: "https://jaisondavid.in" }],
  generator: "Next.js",
  keywords: [
    "Jaison David",
    "Jaison David M",
    "jaisondavid-m",
    "Backend Engineer",
    "Distributed Systems Engineer",
    "Golang Developer",
    "Go Gin",
    "Apache Kafka",
    "Redis",
    "Docker",
    "MySQL",
    "Next.js",
    "React",
    "iTrigger",
    "Ticket Booking System",
    "ZeroProxyAttendance",
    "BitCentral",
    "Software Engineer Portfolio",
    "Bannari Amman Institute of Technology",
  ],
  creator: "Jaison David",
  publisher: "Jaison David",
  alternates: {
    canonical: "https://jaisondavid.in",
  },
  icons: {
    icon: "/icons/jaisondavid.svg",
    shortcut: "/icons/jaisondavid.svg",
    apple: "/images/jaisondavidm.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaisondavid.in",
    siteName: "Jaison David Portfolio",
    title: "Jaison David | Backend & Distributed Systems Engineer",
    description:
      "Explore the software engineering portfolio, distributed systems projects (Ticket Booking System, iTrigger, BitCentral, ZeroProxyAttendance), and technical skills of Jaison David.",
    images: [
      {
        url: "/images/jaisondavidm.png",
        width: 800,
        height: 800,
        alt: "Jaison David - Backend & Distributed Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaison David | Backend & Distributed Systems Engineer",
    description:
      "Explore the software engineering portfolio and high-throughput distributed systems projects of Jaison David.",
    images: ["/images/jaisondavidm.png"],
    creator: "@jaisondavid_m",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ebgaramond",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jaisondavid.in/#person",
      "name": "Jaison David",
      "alternateName": ["Jaison David M", "jaisondavid-m", "Jaison"],
      "url": "https://jaisondavid.in",
      "image": "https://jaisondavid.in/images/jaisondavidm.png",
      "jobTitle": "Backend & Distributed Systems Engineer",
      "description":
        "Backend & Distributed Systems Engineer specializing in Go (Gin), Apache Kafka, Redis, Docker, and high-throughput web applications.",
      "email": "mailto:jaison7373@gmail.com",
      "telephone": "+919843777817",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Bannari Amman Institute of Technology",
      },
      "sameAs": [
        "https://github.com/jaisondavid-m",
        "https://www.linkedin.com/in/jaison-david-m-a14072360",
        "https://wa.me/919843777817",
      ],
      "knowsAbout": [
        "Go (Golang)",
        "Gin Web Framework",
        "Apache Kafka",
        "Redis",
        "Distributed Systems",
        "Microservices Architecture",
        "Docker & Docker Compose",
        "MySQL",
        "Next.js",
        "React",
        "Caddy Server",
        "Nginx",
        "Continuous Deployment",
        "REST APIs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jaisondavid.in/#website",
      "url": "https://jaisondavid.in",
      "name": "Jaison David Portfolio",
      "description":
        "Official portfolio of Jaison David - Backend & Distributed Systems Engineer.",
      "publisher": {
        "@id": "https://jaisondavid.in/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://jaisondavid.in/#webpage",
      "url": "https://jaisondavid.in",
      "name": "Jaison David | Backend & Distributed Systems Engineer",
      "about": {
        "@id": "https://jaisondavid.in/#person",
      },
      "mainEntity": {
        "@id": "https://jaisondavid.in/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${spaceMono.variable} ${archivoBlack.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
