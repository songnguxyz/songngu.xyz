import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "./useLanguage";

export const SITE_URL = "https://songngu.xyz";

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Cập nhật title + mô tả + canonical theo trang đang mở và ngôn ngữ đang chọn.
//
// LƯU Ý: đây là SPA render phía trình duyệt. Google chạy JS nên đọc được các thẻ
// này, nhưng trình thu thập của Facebook/Twitter/Zalo thì KHÔNG — chúng chỉ đọc
// HTML tĩnh trong index.html. Muốn mỗi trang có thẻ chia sẻ riêng thì phải
// prerender hoặc SSR.
export function usePageMeta({ title, description }) {
  const { lang } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    const url = SITE_URL + pathname;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:locale"]', "content", lang === "vi" ? "vi_VN" : "en_US");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
  }, [title, description, lang, pathname]);
}
