"use client";

import { useState, useEffect } from "react";
import { BiCopyright } from "react-icons/bi";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 md:py-12 border-t-2 border-(--border-color) relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="w-full text-base sm:text-lg font-semibold opacity-70 tracking-wide text-center md:text-left flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center">
          <span className="inline-flex items-center gap-1 sm:gap-2">
            <BiCopyright size={20} className="sm:w-6 sm:h-6" />
            {currentYear} Jaison David.
          </span>
          <span className="hidden sm:inline"> </span>
          <span>All rights reserved.</span>
        </p>

        {showScrollTop && (
          <button
            className="fixed scrolltotop-shadow bottom-4 sm:bottom-6 md:bottom-8 right-2 sm:right-3 md:right-5 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-(--text-color) flex items-center justify-center cursor-pointer rounded-sm border-2 border-(--border-color) hover:text-(--alter-color) z-80"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <HiArrowUp size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        )}
      </div>
    </footer>
  );
}
