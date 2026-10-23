import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
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
  },
  {
    name: "EMAIL",
    description: "SAY HELLO",
    url: "mailto:jaison7373@gmail.com",
    icon: <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
  },
];

export default function LetsConnect() {
  return (
    <section id="connect" className="bg-[--bg-color]">
      <div className="max-w-6xl mx-auto pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 flex flex-col items-center">
        <h2 className="w-full title-font text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          LET'S CONNECT
        </h2>
        <hr className="w-full border-color border-2" />
        <div className="logo-shadow rounded-md border-color border-4 mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10 md:mb-12">
          <span className="w-2 h-2 sm:w-3 sm:h-3 border-2 bg-black"></span>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
            STATUS:
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
            ACTIVE
          </span>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card-shadow rounded-lg hover:text-(--alter-color) transition-all duration-200 border-color border-4 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col items-center gap-3 sm:gap-4 text-center hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center">
                {social.icon}
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <span className="tagline-font text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wider">
                  {social.name}
                </span>
                <span className="text-xs sm:text-sm font-light tracking-wide">
                  {social.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
