import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { translations, socialLinks } from "./i18n/data";
import Home from "./pages/Home";
import GiayPhep from "./pages/GiayPhep";
import LienHe from "./pages/LienHe";
import KhongTimThay from "./pages/KhongTimThay";

// localStorage có thể ném lỗi ở chế độ riêng tư hoặc khi bị chặn cookie.
const readStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* bỏ qua: không lưu được thì vẫn chạy bình thường */
  }
};

const NAV_LINK_CLASSES =
  "text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint focus-visible:ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#120a23]";

const MOBILE_LINK_CLASSES =
  "text-base font-semibold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint";

function SunIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function MoonIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}

// React Router giữ nguyên vị trí cuộn khi đổi trang, nên phải tự đưa về đầu trang.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    const saved = readStorage("lang");
    if (saved === "vi" || saved === "en") return saved;
    const userLang = typeof navigator !== "undefined" && navigator.language;
    return userLang && userLang.toLowerCase().startsWith("vi") ? "vi" : "en";
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = readStorage("darkMode");
    if (saved === "true") return true;
    if (saved === "false") return false;
    return (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    writeStorage("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = lang;
    writeStorage("lang", lang);
  }, [lang]);

  // Đóng menu di động bằng phím Esc.
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const t = translations[lang];
  const closeMenu = () => setIsMobileMenuOpen(false);
  const toggleLang = () => setLang(lang === "vi" ? "en" : "vi");
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#120a23] flex flex-col transition-colors duration-200">
      <ScrollToTop />

      <a
        href="#noi-dung-chinh"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-xl focus:bg-white focus:dark:bg-slate-900 focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-mxp-pink focus:shadow-xl"
      >
        {t.skipToContent}
      </a>

      {/* NAVBAR */}
      <header className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-white/80 dark:bg-[#120a23]/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 transition-colors duration-200 font-inter">
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center gap-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="-m-1.5 p-1.5 flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint"
            >
              <span className="sr-only">SongNgư.xyz</span>
              <img
                src="/logo.svg"
                alt=""
                width="116"
                height="116"
                className="h-8 w-auto transition-all"
              />
              <img
                src="/wordmark.svg"
                alt="SongNgư.xyz"
                width="135"
                height="19"
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
                className={NAV_LINK_CLASSES}
              >
                {t.navProjects}
              </a>
              <Link to="/giayphep" className={NAV_LINK_CLASSES}>
                {t.navLicenses}
              </Link>
              <Link to="/lienhe" className={NAV_LINK_CLASSES}>
                {t.navContact}
              </Link>
            </div>

            <div className="flex items-center gap-3 md:border-l md:border-slate-300 dark:md:border-slate-700 md:pl-6 transition-colors duration-200">
              <button
                type="button"
                onClick={toggleLang}
                className="hidden md:block text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors shrink-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint focus-visible:ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#120a23]"
                aria-label={t.langToggleLabel}
              >
                {lang === "vi" ? "EN" : "VI"}
              </button>

              <button
                type="button"
                onClick={toggleDarkMode}
                className="hidden md:block text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint"
                aria-label={darkMode ? t.themeToLight : t.themeToDark}
                aria-pressed={darkMode}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1 text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint"
                aria-label={t.menuToggleLabel}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white/95 dark:bg-[#120a23]/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl flex flex-col gap-4"
          >
            <Link to="/" onClick={closeMenu} className={MOBILE_LINK_CLASSES}>
              {t.navHome}
            </Link>
            <a
              href="https://meta.songngu.xyz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={MOBILE_LINK_CLASSES}
            >
              {t.navProjects}
            </a>
            <Link
              to="/giayphep"
              onClick={closeMenu}
              className={MOBILE_LINK_CLASSES}
            >
              {t.navLicenses}
            </Link>
            <Link
              to="/lienhe"
              onClick={closeMenu}
              className={MOBILE_LINK_CLASSES}
            >
              {t.navContact}
            </Link>

            <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-700/50 pt-4 mt-2">
              <button
                type="button"
                onClick={() => {
                  toggleLang();
                  closeMenu();
                }}
                className="flex-1 flex justify-center text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint"
                aria-label={t.langToggleLabel}
              >
                {lang === "vi" ? "Ngôn ngữ (EN)" : "Language (VI)"}
              </button>

              <button
                type="button"
                onClick={() => {
                  toggleDarkMode();
                  closeMenu();
                }}
                className="flex-1 flex justify-center text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint"
                aria-label={darkMode ? t.themeToLight : t.themeToDark}
                aria-pressed={darkMode}
              >
                {darkMode ? (
                  <SunIcon className="w-5 h-5 inline-block" />
                ) : (
                  <MoonIcon className="w-5 h-5 inline-block" />
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/giayphep" element={<GiayPhep t={t} lang={lang} />} />
        <Route path="/lienhe" element={<LienHe t={t} lang={lang} />} />
        <Route path="*" element={<KhongTimThay t={t} />} />
      </Routes>

      {/* FOOTER */}
      <footer className="relative isolate border-t border-slate-200/60 dark:border-slate-800/60 font-inter">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-400 dark:text-slate-500 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors duration-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mxp-pink dark:focus-visible:ring-mxp-mint focus-visible:ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#120a23]"
                target={item.name !== "Email" ? "_blank" : undefined}
                rel={item.name !== "Email" ? "noopener noreferrer" : undefined}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-slate-500 dark:text-slate-400 transition-colors duration-200">
              &copy; {new Date().getFullYear()} SongNgư.xyz.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
