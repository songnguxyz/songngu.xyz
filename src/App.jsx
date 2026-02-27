import React, { useState, useEffect } from "react";
import { translations, socialLinks } from "./i18n/data";

function App() {
  const [lang, setLang] = useState("vi");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#120a23] flex flex-col transition-colors duration-500">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-slate-50/70 dark:bg-[#120a23]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500 font-inter">
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center gap-3">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">SongNgư.xyz</span>
              <img
                src="/logo.svg"
                alt="SongNgư.xyz Logo"
                className="h-8 w-auto transition-all"
              />
              <img
                src="/wordmark.svg"
                alt="SongNgư.xyz Wordmark"
                className="h-5 w-auto block dark:invert transition-all"
              />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://meta.songngu.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-slate-900 dark:text-white group-hover:text-mxp-pink dark:group-hover:text-mxp-mint transition-colors"
            >
              {t.navProjects}
            </a>

            <div className="flex items-center gap-3 border-l border-slate-300 dark:border-slate-700 pl-6 transition-colors duration-500">
              <button
                onClick={() => setLang(lang === "vi" ? "en" : "vi")}
                className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-mxp-pink dark:group-hover:text-mxp-mint transition-colors"
                aria-label="Toggle Language"
              >
                {lang === "vi" ? "EN" : "VI"}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-slate-600 dark:text-slate-300 group-hover:text-mxp-pink dark:group-hover:text-mxp-mint transition-colors p-1"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="grow flex items-center justify-center relative isolate px-6 pt-24 pb-12 min-h-screen">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-mxp-pink via-mxp-blue to-mxp-mint opacity-40 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75 transition-opacity duration-500"></div>
        </div>

        <div className="mx-auto max-w-5xl w-full flex flex-col justify-center items-start text-left relative z-10">
          <div className="mb-6 sm:mb-8 flex justify-start">
            <div className="relative rounded-full px-5 py-2 text-sm leading-6 text-slate-700 dark:text-slate-200 ring-1 ring-slate-900/10 dark:ring-white/20 hover:ring-slate-900/20 dark:hover:ring-white/30 hover:scale-105 shadow-sm bg-white/50 dark:bg-[#1a0f2e]/50 backdrop-blur-md transition-all duration-300 inline-block font-inter">
              <span className="font-semibold text-mxp-pink dark:text-mxp-mint tracking-wider text-xs uppercase">
                {t.heroTag}
              </span>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl drop-shadow-sm transition-colors duration-500">
            {t.heroTitle1} <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-mxp-pink via-mxp-purple to-mxp-blue dark:from-mxp-mint dark:via-mxp-blue dark:to-mxp-pink drop-shadow-sm">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-2xl transition-colors duration-500 font-medium">
            {t.heroDesc}
          </p>
          <div className="mt-12 flex items-center justify-start gap-x-6">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-linear-to-r from-mxp-pink to-mxp-purple px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:from-mxp-purple hover:to-mxp-blue transition-all duration-300 ring-1 ring-white/20"
            >
              {t.heroBtn}
            </a>
          </div>
        </div>
      </main>

      {/* DANH SÁCH DỰ ÁN */}
      <section
        className="py-20 relative isolate border-t border-slate-200/60 dark:border-slate-800/60"
        id="projects"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">
              {t.projTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 transition-colors duration-500">
              {t.projDesc}
            </p>
          </div>

          <div className="flex flex-col gap-8 transition-colors duration-500">
            {t.projectsData.map((project) => (
              // Bổ sung thuộc tính relative cho từng thẻ dự án để chứa Badges góc trên bên phải
              <div
                key={project.id}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#1a0f2e]/80 backdrop-blur-xl border border-white dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 group transition-all duration-500 overflow-hidden"
              >
                {/* Highlight gradient background on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-mxp-pink/5 to-mxp-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Khu vực Badges nổi bật góc trên cùng bên phải */}
                {project.badges && project.badges.length > 0 && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
                    {project.badges.map((badge, index) => (
                      <button
                        key={index}
                        className="group/badge relative h-8 px-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-105 focus:scale-105 transition-all cursor-help before:absolute before:-inset-2 before:content-['']"
                        aria-label={badge.title}
                      >
                        <img
                          src={badge.iconUrl}
                          alt=""
                          className={`w-4 h-4 object-contain shrink-0 ${badge.inverted ? "invert dark:invert-0 opacity-80 dark:opacity-100" : ""}`}
                        />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover/badge:max-w-xs group-hover/badge:ml-2 group-hover/badge:opacity-100 group-focus/badge:max-w-xs group-focus/badge:ml-2 group-focus/badge:opacity-100">
                          {badge.title}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Khung Logo Dự án */}
                <div className="w-32 h-32 p-4 shrink-0 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-inner border border-slate-100 dark:border-slate-700 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 z-10">
                  <img
                    src={project.logoUrl}
                    alt={project.name}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>

                {/* Thông tin chữ */}
                <div className="flex flex-col justify-center grow sm:pr-24 z-10">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-mxp-pink dark:group-hover:text-mxp-mint transition-colors duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline decoration-2 underline-offset-4"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 mb-4 max-w-2xl leading-relaxed transition-colors duration-500">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 transition-colors duration-500">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        title={link.title}
                        className="group-hover:text-mxp-pink dark:group-hover:text-mxp-mint dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 p-1.5 rounded-md transition-colors flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIÊN MINH */}
      <section
        className="py-20 relative isolate border-t border-slate-200/60 dark:border-slate-800/60"
        id="affiliations"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-bold tracking-widest uppercase text-mxp-pink dark:text-mxp-mint">
              {t.netSub}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">
              {t.netTitle}
            </p>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 transition-colors duration-500">
              {t.netDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.affiliationsData.map((partner) => (
              <div
                key={partner.id}
                className={`rounded-3xl p-8 backdrop-blur-md border shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group ${
                  partner.id === "iwf"
                    ? "md:col-span-3 flex flex-col md:flex-row items-center justify-center gap-8 md:text-left text-center bg-linear-to-br from-[#1c355e] to-[#0f1f38] border-blue-800/50"
                    : "text-center bg-white/70 dark:bg-slate-800/70 border-white dark:border-slate-700/50"
                }`}
              >
                {partner.id === "iwf" && (
                  <div className="absolute inset-0 bg-linear-to-br from-mxp-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                )}

                <div
                  className={`flex items-center justify-center relative z-10 ${partner.id === "iwf" ? "h-24 sm:h-32 w-auto shrink-0" : "h-20 mb-8"}`}
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className={`h-full w-auto object-contain drop-shadow-md transition-all duration-500 ${partner.id === "iwf" ? "drop-shadow-2xl" : partner.id === "abxy" ? "invert dark:invert-0 dark:opacity-90 opacity-80" : "dark:opacity-90"}`}
                  />
                </div>

                <div className={partner.id === "iwf" ? "max-w-2xl" : ""}>
                  <h4
                    className={
                      partner.id === "iwf"
                        ? "text-white text-xl font-semibold mb-2 relative z-10"
                        : "text-slate-800 dark:text-white text-lg font-bold mb-3 relative z-10"
                    }
                  >
                    {partner.name}
                  </h4>
                  <p
                    className={`text-sm transition-colors duration-500 ${partner.id === "iwf" ? "text-blue-100 relative z-10" : "text-slate-600 dark:text-slate-300"}`}
                  >
                    {partner.description}
                  </p>

                  {partner.id === "iwf" && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-400/30 px-6 py-2.5 text-sm font-bold text-blue-100 hover:bg-blue-600/40 hover:text-white hover:scale-105 hover:shadow-lg transition-all relative z-10"
                    >
                      {t.learnMore}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative isolate border-t border-slate-200/60 dark:border-slate-800/60 font-inter">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-400 dark:text-slate-500 group-hover:text-mxp-pink dark:group-hover:text-mxp-mint dark:hover:text-blue-400 transition-colors duration-300"
                target={item.name !== "Email" ? "_blank" : undefined}
                rel={item.name !== "Email" ? "noopener noreferrer" : undefined}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-slate-500 dark:text-slate-400 transition-colors duration-500">
              &copy; {new Date().getFullYear()} SongNgư.xyz.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
