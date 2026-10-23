import { FaGraduationCap, FaSchool, FaAward, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="bg-[--bg-color] scroll-mt-20">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          EDUCATION.
        </h2>
        <hr className="w-full border-color border-2" />

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* College Card */}
          <div className="education-card-shadow border-color border-3 rounded-lg p-6 sm:p-8 flex flex-col justify-between bg-(--bg-color)">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="logo-shadow rounded-md border-color border-2 px-3 py-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--text-color) bg-(--bg-color)">
                  <FaGraduationCap size={16} className="text-(--primary-color) dark:text-pink-400" />
                  Undergraduate
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-(--text-color)/80">
                  <FaCalendarAlt size={13} className="text-(--primary-color) dark:text-pink-400" />
                  2025 &ndash; 2029
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-(--text-color)">
                Bannari Amman Institute of Technology
              </h3>
              <p className="text-sm sm:text-base font-semibold text-(--primary-color) dark:text-pink-400 mt-1">
                Erode, Tamil Nadu
              </p>

              <div className="mt-4 pt-4 border-t-2 border-(--border-color)/30">
                <p className="tagline-font text-base sm:text-lg uppercase tracking-wider text-(--text-color)">
                  B.E. in Computer Science &amp; Engineering
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-(--border-color)/30 flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-(--text-color)">
                Academic Standing
              </span>
              <div className="logo-shadow rounded-md border-color border-2 px-3 sm:px-4 py-1.5 inline-flex items-center gap-2 font-mono font-bold text-sm sm:text-base text-(--primary-color) dark:text-pink-400 bg-(--bg-color)">
                <FaAward size={16} />
                CGPA: 9.28 / 10
              </div>
            </div>
          </div>

          {/* School Card */}
          <div className="education-card-shadow border-color border-3 rounded-lg p-6 sm:p-8 flex flex-col justify-between bg-(--bg-color)">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="logo-shadow rounded-md border-color border-2 px-3 py-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--text-color) bg-(--bg-color)">
                  <FaSchool size={16} className="text-(--primary-color) dark:text-pink-400" />
                  Higher Secondary &amp; SSLC
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-(--text-color)/80">
                  <FaCalendarAlt size={13} className="text-(--primary-color) dark:text-pink-400" />
                  Passed Out &bull; 2025
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-(--text-color)">
                Holy Children Matriculation Higher Secondary School
              </h3>
              <p className="text-sm sm:text-base font-semibold text-(--primary-color) dark:text-pink-400 mt-1">
                Salem, Tamil Nadu
              </p>

              <div className="mt-4 pt-4 border-t-2 border-(--border-color)/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="tagline-font text-sm sm:text-base uppercase tracking-wider text-(--text-color)">
                    Higher Secondary (12th)
                  </span>
                  <span className="font-mono font-bold text-sm sm:text-base text-(--primary-color) dark:text-pink-400">
                    569 / 600
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="tagline-font text-sm sm:text-base uppercase tracking-wider text-(--text-color)">
                    Secondary School (10th / SSLC)
                  </span>
                  <span className="font-mono font-bold text-sm sm:text-base text-(--primary-color) dark:text-pink-400">
                    451 / 500
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-(--border-color)/30 flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-(--text-color)">
                Academic Background
              </span>
              <div className="logo-shadow rounded-md border-color border-2 px-3 sm:px-4 py-1.5 inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 bg-(--bg-color)">
                <FaAward size={16} />
                Distinction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
