import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { useDarkMode } from "./hooks/useDarkMode";
import { useLanguage } from "./hooks/useLanguage";
import GiayPhep from "./pages/GiayPhep";
import Home from "./pages/Home";
import KhongTimThay from "./pages/KhongTimThay";
import LienHe from "./pages/LienHe";

function App() {
  const { t } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-mxp-ink flex flex-col transition-colors duration-200">
      <ScrollToTop />

      <a
        href="#noi-dung-chinh"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-xl focus:bg-white focus:dark:bg-slate-900 focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-mxp-pink focus:shadow-xl"
      >
        {t.skipToContent}
      </a>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giayphep" element={<GiayPhep />} />
        <Route path="/lienhe" element={<LienHe />} />
        <Route path="*" element={<KhongTimThay />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
