import React from "react";
import { contactChannels, wikiContacts } from "../i18n/data";

const VARIANT_CLASSES = {
  email: "hover:border-mxp-pink dark:hover:border-mxp-mint focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint",
  twitter: "hover:border-[#0084b4] dark:hover:border-[#1DA1F2] focus-visible:ring-[#0084b4] dark:focus-visible:ring-[#1DA1F2]",
  discord: "hover:border-[#5865F2] focus-visible:ring-[#5865F2]",
  facebook: "hover:border-[#1877F2] focus-visible:ring-[#1877F2]",
  wikipedia: "hover:border-slate-500 dark:hover:border-slate-300 focus-visible:ring-slate-500 dark:focus-visible:ring-slate-300",
  miraheze: "hover:border-[#ffc200] focus-visible:ring-[#ffc200]",
};

const ICON_COLOR_CLASSES = {
  email: "text-mxp-pink dark:text-mxp-mint",
  twitter: "text-[#0084b4] dark:text-[#1DA1F2]",
  discord: "text-[#5865F2]",
  facebook: "text-[#1877F2]",
};

function LienHe({ t, lang }) {
  return (
    <main
      id="noi-dung-chinh"
      className="grow flex flex-col items-center justify-start relative isolate px-6 pt-32 pb-16"
    >
      <div className="mx-auto max-w-4xl w-full flex flex-col text-left relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl drop-shadow-sm transition-colors duration-200 mb-6">
          {t.contactTitle}
        </h1>
        <div className="max-w-none text-slate-600 dark:text-slate-300 transition-colors duration-200 font-medium pb-10">
          <p className="text-xl mb-6">{t.contactDesc}</p>
          <div className="grid gap-5 justify-start grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))]">
            {contactChannels.map((item) => {
              const isMailto = item.href.startsWith("mailto:");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isMailto ? undefined : "_blank"}
                  rel={isMailto ? undefined : "noopener noreferrer"}
                  className={`p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#120a23] transition-all duration-200 flex flex-col items-center text-center group ${VARIANT_CLASSES[item.variant]}`}
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className={ICON_COLOR_CLASSES[item.variant]}>{item.icon}</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">{item.label}</span>
                  <span className="mt-2 text-base text-slate-600 dark:text-slate-400 break-all">{item.handle}</span>
                </a>
              );
            })}
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center mb-2">
              {t.wikiContactTitle}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 text-center mb-4">
              {t.wikiContactDesc}
            </p>
            <div className="border-t border-slate-200 dark:border-slate-800">
              {wikiContacts.map((w) => (
                <div
                  key={w.name}
                  className="flex flex-wrap items-center gap-5 py-5 border-b border-slate-200 dark:border-slate-800"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-64">
                    <span className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                      {w.logoUrl ? (
                        <img src={w.logoUrl} alt="" className="w-full h-full object-contain p-1.5" />
                      ) : (
                        <span className="text-sm font-extrabold text-mxp-pink dark:text-mxp-mint">{w.initials}</span>
                      )}
                    </span>
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint"
                    >
                      {w.name}
                    </a>
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    {w.emails.map((e) => (
                      <span key={e.addr} className="flex flex-col gap-0.5">
                        {e.note && (
                          <span className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-500">
                            {e.note[lang]}
                          </span>
                        )}
                        <a
                          href={`mailto:${e.addr}`}
                          className="text-sm text-slate-600 dark:text-slate-300 break-all hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint"
                        >
                          {e.addr}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default LienHe;
