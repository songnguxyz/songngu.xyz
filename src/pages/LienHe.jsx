import React from "react";

function LienHe({ t }) {
  return (
    <main className="grow flex flex-col items-center justify-start relative isolate px-6 pt-32 pb-12 min-h-screen">
      <div className="mx-auto max-w-4xl w-full flex flex-col text-left relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl drop-shadow-sm transition-colors duration-500 mb-8">
          {t.contactTitle}
        </h1>
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 transition-colors duration-500 font-medium pb-12">
          <p className="text-xl mb-8">{t.contactDesc}</p>
          <div className="grid gap-6 sm:grid-cols-2">
             <a href="mailto:admin@songngu.xyz" className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-mxp-pink dark:hover:border-mxp-mint hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg className="w-8 h-8 text-mxp-pink dark:text-mxp-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Email</span>
                 <span className="mt-2 text-base text-slate-500 dark:text-slate-400">admin@songngu.xyz</span>
             </a>
             <a href="https://twitter.com/songnguxyz" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                   </svg>
                 </div>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Twitter</span>
                 <span className="mt-2 text-base text-slate-500 dark:text-slate-400">@songnguxyz</span>
             </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LienHe;
