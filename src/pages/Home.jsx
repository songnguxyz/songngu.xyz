import React from "react";
import { affiliations } from "../content/affiliations";
import { projects } from "../content/projects";
import { useLanguage } from "../hooks/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";

function Home() {
  const { lang, t } = useLanguage();
  usePageMeta({ title: t.seoHomeTitle, description: t.seoHomeDesc });

  return (
    <>
      <main
        id="noi-dung-chinh"
        className="grow flex items-center justify-center relative isolate px-6 pt-32 pb-16"
      >

        <div className="mx-auto max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8 relative z-10">
          <div className="flex flex-col justify-center items-start text-left w-full lg:w-1/2">

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.heroTag}
            </h1>
            <p className="mt-2 text-lg md:text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-2xl transition-colors duration-200 font-normal">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex items-center justify-start gap-x-6">
              <a
                href="#projects"
                className="rounded-full bg-mxp-pink px-8 py-4 text-base font-bold text-white shadow-sm hover:brightness-90 transition-[filter] duration-200 focus-ring-offset"
              >
                {t.heroBtn}
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src="/hero.webp"
              fetchPriority="high"
              alt=""
              width="1400"
              height="1400"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl select-none"
            />
          </div>
        </div>
      </main>

      <section
        className="py-14 scroll-mt-28 relative isolate border-t border-slate-200/60 dark:border-slate-800/60"
        id="projects"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
              {t.projTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 transition-colors duration-200">
              {t.projDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-colors duration-200">
            {projects[lang].map((project) => (
              <div
                key={project.id}
                className="relative flex flex-col gap-4 p-6 rounded-3xl bg-white dark:bg-mxp-surface border border-slate-200 dark:border-slate-800 shadow-sm hover:border-mxp-pink/50 dark:hover:border-mxp-mint/50 group transition-colors duration-200 overflow-hidden"
              >
                <div className="w-20 h-20 p-3 shrink-0 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-inner border border-slate-100 dark:border-slate-700 z-10">
                  <img
                    src={project.logoUrl}
                    alt={project.name}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>

                <div className="flex flex-col grow z-10">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-mxp-pink dark:group-hover:text-mxp-mint transition-colors duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline decoration-2 underline-offset-4 rounded-sm focus-ring"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed transition-colors duration-200">
                    {project.description}
                  </p>
                  {project.badges && project.badges.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="h-8 px-3 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-2"
                        >
                          <img
                            src={badge.iconUrl}
                            alt=""
                            className={`w-4 h-4 object-contain shrink-0 ${badge.inverted ? "invert dark:invert-0 opacity-80 dark:opacity-100" : ""}`}
                          />
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                            {badge.title}
                          </span>
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 transition-colors duration-200 mt-auto">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        title={link.title}
                        className="hover:text-mxp-pink dark:hover:text-mxp-mint hover:bg-slate-200 dark:hover:bg-slate-700 p-1.5 rounded-md transition-colors flex items-center focus-ring"
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

      <section
        className="py-14 scroll-mt-28 relative isolate border-t border-slate-200/60 dark:border-slate-800/60"
        id="affiliations"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.netTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {t.netDesc}
            </p>
          </div>

          <ul className="border-t border-slate-200 dark:border-slate-800">
            {affiliations[lang]
              .filter((partner) => partner.id !== "iwf")
              .map((partner) => (
                <li
                  key={partner.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 border-b border-slate-200 dark:border-slate-800"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                    <img
                      src={partner.logoUrl}
                      alt=""
                      className="max-h-full max-w-full w-auto object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {partner.description}
                    </p>
                  </div>
                </li>
              ))}
          </ul>

          {affiliations[lang]
            .filter((partner) => partner.id === "iwf")
            .map((partner) => (
              <div
                key={partner.id}
                className="mt-10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left bg-linear-to-br from-iwf-navy to-iwf-deep border border-blue-800/50"
              >
                <img
                  src={partner.logoUrl}
                  alt=""
                  className="h-24 sm:h-32 w-auto shrink-0 object-contain drop-shadow-2xl"
                />
                <div className="max-w-2xl">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-blue-100">{partner.description}</p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full bg-blue-600/20 border border-blue-400/30 px-6 py-2.5 text-sm font-bold text-blue-100 hover:bg-blue-600/40 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                  >
                    {t.learnMore}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;
