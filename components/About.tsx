"use client";

import { FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function About() {
  const handleScrollToConnect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("connect");
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#connect");
    }
  };

  return (
    <section id="about" className="flex items-center scroll-mt-20">
      <div className="max-w-6xl w-full mx-4 sm:mx-6 md:mx-8 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-3 sm:mb-4 tracking-wider">
          ABOUT.
        </h2>
        <hr className="w-full border-color border-2" />
        <div className="max-w-4xl mt-8 sm:mt-12 md:mt-16">
          <div className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed sm:leading-relaxed mb-6 sm:mb-8 tracking-wide space-y-4 sm:space-y-6">
            <p>
              Full-Stack &amp; Backend Engineer specializing in building scalable,
              high-throughput systems and distributed architectures with Go (Gin),
              Apache Kafka, Redis, and MySQL.
            </p>

            <p>
              I design resilient software from the ground up&mdash;from atomic in-memory
              caching layers and event-driven booking pipelines capable of 100K+ req/s,
              to automated webhook deployment engines and institutional platforms serving
              thousands of students.
            </p>

            <p>
              I thrive on concurrency, performance optimization, and containerized
              workflows with Docker&mdash;bridging low-latency backend engineering with
              clean, reactive web interfaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#connect"
              onClick={handleScrollToConnect}
              className="button-shadow rounded-md hover:text-(--alter-color) border-color border-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold uppercase tracking-wider inline-flex gap-2 items-center justify-center w-full sm:w-auto cursor-pointer"
            >
              <span>LET'S CONNECT</span>
              <FaEnvelope size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="/docs/jaisondavid-resume.pdf"
              download="Jaison-David-M-Resume.pdf"
              className="button-shadow rounded-md hover:text-(--alter-color) border-color border-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold uppercase tracking-wider inline-flex gap-2 items-center justify-center w-full sm:w-auto cursor-pointer"
            >
              <span>DOWNLOAD CV</span>
              <FaFileDownload size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
