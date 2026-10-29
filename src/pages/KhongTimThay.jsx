import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";

function KhongTimThay() {
  const { t } = useLanguage();
  usePageMeta({
    title: `${t.seoNotFoundTitle} — ${t.siteName}`,
    description: t.notFoundDesc,
  });

  return (
    <main
      id="noi-dung-chinh"
      className="grow flex flex-col items-center justify-center relative isolate px-6 pt-32 pb-20 text-center"
    >

      <p className="text-7xl md:text-8xl font-extrabold tracking-tight text-mxp-pink dark:text-mxp-mint">
        404
      </p>
      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
        {t.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300 transition-colors duration-200">
        {t.notFoundDesc}
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-mxp-pink px-8 py-4 text-base font-bold text-white shadow-sm hover:brightness-90 transition-[filter] duration-200 focus-ring-offset"
      >
        {t.notFoundBtn}
      </Link>
    </main>
  );
}

export default KhongTimThay;
