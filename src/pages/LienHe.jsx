import React from "react";
import { contactChannels, wikiContacts } from "../content/contacts";
import { useLanguage } from "../hooks/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";

// Màu thương hiệu của từng kênh: [sáng, tối]. Bỏ phần tử thứ hai nếu hai chế độ
// dùng chung một màu. Đưa vào CSS variable nên mỗi mã màu chỉ xuất hiện một lần.
const CHANNEL_BRAND = {
  email: ["var(--color-mxp-pink)", "var(--color-mxp-mint)"],
  twitter: ["#0084b4", "#1DA1F2"],
  discord: ["#5865F2"],
  facebook: ["#1877F2"],
  wikipedia: ["var(--color-slate-500)", "var(--color-slate-300)"],
  miraheze: ["#ffc200"],
};

function brandStyle(variant) {
  const [light, dark = light] = CHANNEL_BRAND[variant] ?? [];
  return { "--brand": light, "--brand-dark": dark };
}

function LienHe() {
  const { lang, t } = useLanguage();
  usePageMeta({
    title: `${t.seoContactTitle} — ${t.siteName}`,
    description: t.seoContactDesc,
  });

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
                  style={brandStyle(item.variant)}
                  className="p-8 bg-white/60 dark:bg-mxp-surface/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-[var(--brand)] dark:hover:border-[var(--brand-dark)] hover:shadow-2xl hover:-translate-y-1 focus-outline focus-visible:ring-[var(--brand)] dark:focus-visible:ring-[var(--brand-dark)] transition-all duration-200 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-[var(--brand)] dark:text-[var(--brand-dark)]">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.label}
                  </span>
                  <span className="mt-2 text-base text-slate-600 dark:text-slate-400 break-all">
                    {item.handle}
                  </span>
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
              {wikiContacts.map((wiki) => (
                <div
                  key={wiki.name}
                  className="flex flex-wrap items-center gap-5 py-5 border-b border-slate-200 dark:border-slate-800"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-64">
                    <span className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                      {wiki.logoUrl ? (
                        <img
                          src={wiki.logoUrl}
                          alt=""
                          className="w-full h-full object-contain p-1.5"
                        />
                      ) : (
                        <span className="text-sm font-extrabold text-mxp-pink dark:text-mxp-mint">
                          {wiki.initials}
                        </span>
                      )}
                    </span>
                    <a
                      href={wiki.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors rounded-sm focus-ring"
                    >
                      {wiki.name}
                    </a>
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    {wiki.emails.map((email) => (
                      <span key={email.addr} className="flex flex-col gap-0.5">
                        {email.note && (
                          <span className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-500">
                            {email.note[lang]}
                          </span>
                        )}
                        <a
                          href={`mailto:${email.addr}`}
                          className="text-sm text-slate-600 dark:text-slate-300 break-all hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors rounded-sm focus-ring"
                        >
                          {email.addr}
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
