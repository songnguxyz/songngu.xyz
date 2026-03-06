import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { translations, socialLinks } from "./i18n/data";
import Home from "./pages/Home";
import GiayPhep from "./pages/GiayPhep";
import LienHe from "./pages/LienHe";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    const userLang =
      typeof window !== "undefined" &&
      (navigator.language || navigator.userLanguage);
    return userLang && userLang.toLowerCase().startsWith("vi") ? "vi" : "en";
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#120a23] flex flex-col transition-colors duration-500">
      {/* NAVBAR */}
      <header className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-white/80 dark:bg-[#120a23]/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500 font-inter">
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center gap-3">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="-m-1.5 p-1.5 flex items-center gap-2">
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
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://meta.songngu.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors"
              >
                {t.navProjects}
              </a>
              <Link to="/giayphep" className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors">
                {t.navLicenses}
              </Link>
              <Link to="/lienhe" className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors">
                {t.navContact}
              </Link>
            </div>

            <div className="flex items-center gap-3 md:border-l md:border-slate-300 dark:md:border-slate-700 md:pl-6 transition-colors duration-500">
              <button
                onClick={() => setLang(lang === "vi" ? "en" : "vi")}
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors block shrink-0"
                aria-label="Toggle Language"
              >
                {lang === "vi" ? "EN" : "VI"}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-1"
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
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1 text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint"
                aria-label="Toggle Menu"
              >
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   {isMobileMenuOpen ? (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                   )}
                 </svg>
              </button>
            </div>
          </div>
        </nav>
        
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white/95 dark:bg-[#120a23]/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50">
              Trang Chủ
            </Link>
            <a
              href="https://meta.songngu.xyz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              {t.navProjects}
            </a>
            <Link to="/giayphep" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50">
              {t.navLicenses}
            </Link>
            <Link to="/lienhe" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50">
              {t.navContact}
            </Link>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/giayphep" element={<GiayPhep t={t} />} />
        <Route path="/lienhe" element={<LienHe t={t} />} />
      </Routes>

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
