import type { Metadata } from "next";
import { Archivo_Black, EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Add favicon to metadata
export const metadata: Metadata = {
  title: "Portfolio | Jaison David",
  description: "Backend & Distributed Systems Engineer | Full-Stack Developer",
  icons: {
    icon: "/icons/jaisondavid.svg",
    shortcut: "/icons/jaisondavid.svg",
    apple: "/images/jaisondavidm.png",
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
