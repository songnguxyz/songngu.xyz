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
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-mxp-pink via-mxp-blue to-mxp-mint opacity-40 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75 transition-opacity duration-200"></div>
      </div>

      <p className="text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-mxp-pink via-mxp-purple to-mxp-blue dark:from-mxp-mint dark:via-mxp-blue dark:to-mxp-pink pb-2">
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
        className="mt-8 rounded-full bg-linear-to-r from-mxp-pink to-mxp-purple px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:from-mxp-purple hover:to-mxp-blue transition-all duration-300 ring-1 ring-white/20 focus-ring-offset"
      >
        {t.notFoundBtn}
      </Link>
    </main>
  );
}

export default KhongTimThay;
