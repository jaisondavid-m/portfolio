"use client";

import { HiArrowDown } from "react-icons/hi";
import Image from "next/image";
import { FaFileDownload, FaRegFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="portfolio" className="flex items-center justify-center">
      <div className="px-4 sm:px-6 md:px-8 pt-12 md:pt-16 pb-20 md:pb-24 w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="title-font text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-wider">
              HI! I'M <span className="whitespace-nowrap">JAISON DAVID</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl default-font font-bold -mt-2">
              <span className="text-(--primary-color)">|</span>Backend & Distributed Systems Eng.
            </h2>

            <div className="mt-2 md:mt-4">
              <p className="text-lg sm:text-xl md:text-2xl text-(--primary-color) tagline-font uppercase tracking-widest">
                SPECIALIZED IN
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                High-throughput distributed systems, event-driven architectures with Kafka & Redis, resilient Go backends, and full-stack platforms.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/docs/jaisondavid-resume.pdf"
                download="Jaison-David-M-Resume.pdf"
                className="button-shadow rounded-md px-5 sm:px-6 py-3 sm:py-3.5 border-color border-2 text-sm sm:text-md font-semibold uppercase tracking-wider flex items-center gap-2 w-fit hover:text-(--alter-color)"
              >
                <FaFileDownload size={18} />
                DOWNLOAD CV
              </a>
              <a
                href="/docs/jaisondavid-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button-shadow rounded-md px-5 sm:px-6 py-3 sm:py-3.5 border-color border-2 text-sm sm:text-md font-semibold uppercase tracking-wider flex items-center gap-2 w-fit hover:text-(--alter-color)"
              >
                <FaRegFilePdf size={18} />
                VIEW RESUME
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center order-first md:order-last">
            <div className="w-64 sm:w-72 md:w-80 lg:w-[24rem] h-64 sm:h-72 md:h-80 lg:h-96 portfolio-shadow rounded-lg border-color border-4 overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={"/images/jaisondavidm.png"}
                alt={"Profile Image"}
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("about");
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
              });
              window.history.pushState(null, "", "#about");
            }
          }}
          aria-label="Scroll to About section"
          className="absolute card-shadow rounded-md border-color border-2 p-2 right-1/2 -bottom-4 animate-bounce cursor-pointer hidden md:block hover:text-(--alter-color)"
        >
          <HiArrowDown size={32} />
        </a>
      </div>
    </section>
  );
}
