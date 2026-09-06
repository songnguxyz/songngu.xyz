import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { MenuIcon, MoonIcon, SunIcon } from "./icons";

const DESKTOP_LINK =
  "text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors rounded-sm focus-ring-offset";

const MOBILE_LINK =
  "text-base font-semibold text-slate-900 dark:text-white hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 focus-ring";

const MOBILE_BUTTON =
  "flex-1 flex justify-center text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 focus-ring";

function Navbar({ darkMode, toggleDarkMode }) {
  const { lang, t, toggleLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Đóng menu di động bằng phím Esc.
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const navItems = [
    { to: "/giayphep", label: t.navLicenses },
    { to: "/lienhe", label: t.navContact },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-white/80 dark:bg-mxp-ink/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 transition-colors duration-200 font-inter">
      <nav
        className="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center gap-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="-m-1.5 p-1.5 flex items-center gap-2 rounded-lg focus-ring"
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
              className={DESKTOP_LINK}
            >
              {t.navProjects}
            </a>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className={DESKTOP_LINK}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:border-l md:border-slate-300 dark:md:border-slate-700 md:pl-6 transition-colors duration-200">
            <button
              type="button"
              onClick={toggleLang}
              className="hidden md:block text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors shrink-0 rounded-sm focus-ring-offset"
              aria-label={t.langToggleLabel}
            >
              {lang === "vi" ? "EN" : "VI"}
            </button>

            <button
              type="button"
              onClick={toggleDarkMode}
              className="hidden md:block text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint transition-colors p-1 rounded-md focus-ring"
              aria-label={darkMode ? t.themeToLight : t.themeToDark}
              aria-pressed={darkMode}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-slate-600 dark:text-slate-300 hover:text-mxp-pink dark:hover:text-mxp-mint rounded-md focus-ring"
              aria-label={t.menuToggleLabel}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <MenuIcon open={isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white/95 dark:bg-mxp-ink/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl flex flex-col gap-4"
        >
          <Link to="/" onClick={closeMenu} className={MOBILE_LINK}>
            {t.navHome}
          </Link>
          <a
            href="https://meta.songngu.xyz"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={MOBILE_LINK}
          >
            {t.navProjects}
          </a>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={MOBILE_LINK}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-700/50 pt-4 mt-2">
            <button
              type="button"
              onClick={() => {
                toggleLang();
                closeMenu();
              }}
              className={`${MOBILE_BUTTON} text-sm font-bold`}
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
              className={MOBILE_BUTTON}
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
  );
}

export default Navbar;
