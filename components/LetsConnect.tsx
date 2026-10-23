"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  copyValue?: string;
  copyLabel?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GITHUB",
    description: "CHECK MY REPOS",
    url: "https://github.com/jaisondavid-m",
    icon: <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
  },
  {
    name: "LINKEDIN",
    description: "LET'S CONNECT",
    url: "https://www.linkedin.com/in/jaison-david-m-a14072360",
    icon: <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
  },
  {
    name: "WHATSAPP",
    description: "+91 98437 77817",
    url: "https://wa.me/919843777817",
    icon: <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    copyValue: "+91 98437 77817",
    copyLabel: "COPY NUMBER",
  },
  {
    name: "EMAIL",
    description: "jaison7373@gmail.com",
    url: "mailto:jaison7373@gmail.com",
    icon: <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    copyValue: "jaison7373@gmail.com",
    copyLabel: "COPY EMAIL",
  },
];

export default function LetsConnect() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<{ label: string; value: string } | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async (
    e: React.MouseEvent,
    item: { name: string; copyValue: string }
  ) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(item.copyValue);
      } else {
        // Fallback for non-https / older environments
        const textArea = document.createElement("textarea");
        textArea.value = item.copyValue;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setCopiedKey(item.name);
      setToastMessage({ label: item.name, value: item.copyValue });

      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }

      toastTimeoutRef.current = setTimeout(() => {
        setCopiedKey(null);
        setToastMessage(null);
      }, 3000);
    } catch {
      // Ignore copy error
    }
  };

  return (
    <section id="connect" className="bg-[--bg-color] scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 flex flex-col items-center">
        <h2 className="w-full title-font text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          LET'S CONNECT
        </h2>
        <hr className="w-full border-color border-2" />

        {/* Live Status indicator */}
        <div className="logo-shadow rounded-md border-color border-4 mt-6 sm:mt-8 inline-flex items-center gap-2.5 px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10 md:mb-12">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-black/20"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
            STATUS:
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            ACTIVE
          </span>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {socialLinks.map((social) => {
            const isCopied = copiedKey === social.name;

            return (
              <div
                key={social.name}
                className="group education-card-shadow rounded-lg transition-all duration-200 border-color border-4 p-6 sm:p-7 md:p-8 flex flex-col items-center justify-between gap-4 text-center bg-(--bg-color) text-(--text-color)"
              >
                {/* Main Link Area */}
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center gap-3 sm:gap-4 text-(--text-color)"
                  title={`Open ${social.name}`}
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-110 text-(--text-color)">
                    {social.icon}
                  </div>
                  <div className="flex flex-col gap-1 w-full text-(--text-color)">
                    <span className="tagline-font text-lg sm:text-xl font-semibold uppercase tracking-wider text-(--text-color)">
                      {social.name}
                    </span>
                    <span className="text-xs sm:text-sm font-light tracking-wide break-all opacity-85 text-(--text-color)">
                      {social.description}
                    </span>
                  </div>
                </Link>

                {/* Bottom Action: Copy button for WhatsApp & Email, Visit button for GitHub & LinkedIn */}
                <div className="w-full pt-2">
                  {social.copyValue ? (
                    <button
                      type="button"
                      onClick={(e) =>
                        handleCopy(e, {
                          name: social.name,
                          copyValue: social.copyValue!,
                        })
                      }
                      className="w-full card-shadow rounded-md border-2 border-color py-1.5 px-3 inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:bg-(--base-color) hover:text-(--alter-color) cursor-pointer transition-all duration-200 bg-(--bg-color) text-(--text-color)"
                      title={`Copy ${social.name} to clipboard`}
                      aria-label={`Copy ${social.name} to clipboard`}
                    >
                      {isCopied ? (
                        <>
                          <FaCheck size={12} className="text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">COPIED!</span>
                        </>
                      ) : (
                        <>
                          <FaCopy size={11} className="opacity-80" />
                          <span>{social.copyLabel || "COPY"}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full card-shadow rounded-md border-2 border-color py-1.5 px-3 inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:bg-(--base-color) hover:text-(--alter-color) cursor-pointer transition-all duration-200 bg-(--bg-color) text-(--text-color)"
                      title={`Open ${social.name}`}
                    >
                      <span>VISIT</span>
                      <FaExternalLinkAlt size={10} className="opacity-75" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clean Neo-Brutalist Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 animate-slideIn flex items-center gap-3 bg-(--bg-color) text-(--text-color) border-3 border-color rounded-lg p-3.5 sm:p-4 button-shadow max-w-[90vw] sm:max-w-sm"
        >
          <div className="logo-shadow rounded-md border-2 border-color p-2 text-emerald-600 dark:text-emerald-400 bg-(--bg-color) shrink-0">
            <FaCheckCircle size={18} />
          </div>
          <div className="flex-1 min-w-0 pr-1">
            <p className="tagline-font text-xs font-bold uppercase tracking-wider text-(--text-color)">
              COPIED TO CLIPBOARD!
            </p>
            <p className="font-mono text-xs opacity-85 truncate mt-0.5 text-(--text-color)">
              {toastMessage.value}
            </p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 opacity-60 hover:opacity-100 cursor-pointer text-(--text-color)"
            aria-label="Close notification"
            title="Dismiss notification"
          >
            <FaTimes size={13} />
          </button>
        </aside>
      )}
    </section>
  );
}
