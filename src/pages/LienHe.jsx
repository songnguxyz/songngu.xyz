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
             <a href="mailto:admin@songngu.xyz" className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-mxp-pink dark:hover:border-mxp-mint hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint focus-visible:ring-offset-2 transition-all duration-500 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg className="w-8 h-8 text-mxp-pink dark:text-mxp-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Email</span>
                 <span className="mt-2 text-base text-slate-600 dark:text-slate-400">admin@songngu.xyz</span>
             </a>
             <a href="https://twitter.com/songnguxyz" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-[#0084b4] dark:hover:border-[#1DA1F2] hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084b4] dark:focus-visible:ring-[#1DA1F2] focus-visible:ring-offset-2 transition-all duration-500 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg className="w-8 h-8 text-[#0084b4] dark:text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                   </svg>
                 </div>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Twitter</span>
                 <span className="mt-2 text-base text-slate-600 dark:text-slate-400">@songnguxyz</span>
             </a>
             <a href="https://discord.com/users/663741516971507772" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-[#5865F2] hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5865F2] focus-visible:ring-offset-2 transition-all duration-500 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg className="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                   </svg>
                 </div>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Discord</span>
                 <span className="mt-2 text-base text-slate-600 dark:text-slate-400">@songnguxyz</span>
             </a>
             <a href="https://facebook.com/songnguchamxyz" target="_blank" rel="noopener noreferrer" className="p-8 bg-white/60 dark:bg-[#1a0f2e]/60 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-[#1877F2] hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2 transition-all duration-500 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg className="w-8 h-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                   </svg>
                 </div>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Facebook</span>
                 <span className="mt-2 text-base text-slate-600 dark:text-slate-400">@songnguchamxyz</span>
             </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LienHe;
