import React from "react";
import {
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiGmail,
} from "@icons-pack/react-simple-icons";
import { MailIcon, TwitterClassic } from "../components/icons";

// Icon mạng xã hội ở footer.
export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/songnguxyz", icon: SiFacebook },
  {
    name: "Twitter",
    href: "https://twitter.com/songnguxyz",
    icon: TwitterClassic,
  },
  { name: "GitHub", href: "https://github.com/songnguxyz", icon: SiGithub },
  { name: "Email", href: "mailto:admin@songngu.xyz", icon: SiGmail },
];

// Kênh liên hệ chung, hiển thị trên trang Liên hệ.
export const contactChannels = [
  { label: "Email", handle: "xinchao@songngu.xyz", href: "mailto:xinchao@songngu.xyz", icon: <MailIcon />, variant: "email" },
  { label: "Twitter", handle: "@songnguxyz", href: "https://twitter.com/songnguxyz", icon: <TwitterClassic className="w-8 h-8" />, variant: "twitter" },
  { label: "Discord", handle: "@songngu.xyz", href: "https://discord.com/users/663741516971507772", icon: <SiDiscord className="w-8 h-8" />, variant: "discord" },
  { label: "Facebook", handle: "@songnguchamxyz", href: "https://facebook.com/songnguchamxyz", icon: <SiFacebook className="w-8 h-8" />, variant: "facebook" },
  { label: "Wikipedia", handle: "Song Ngư", href: "https://meta.wikimedia.org/wiki/User:Song_Ng%C6%B0", icon: <img src="/wikipedia.svg" alt="" className="w-8 h-8 object-contain dark:invert" />, variant: "wikipedia" },
  { label: "Miraheze", handle: "Pisces", href: "https://meta.miraheze.org/wiki/User:Pisces", icon: <img src="/miraheze.svg" alt="" className="w-8 h-8 object-contain" />, variant: "miraheze" },
];

// Địa chỉ liên hệ riêng của từng dự án wiki, ngoài các kênh chung ở trên.
export const wikiContacts = [
  { name: "Cookie Run Wiki", url: "https://cookierun.wiki", logoUrl: "/CRW.png",
    emails: [{ addr: "pisces@cookierun.wiki" }] },
  { name: "Wiki Lớp Học Mật Ngữ", url: "https://lophocmatngu.wiki", logoUrl: "/WLHMN.svg",
    emails: [{ addr: "hotro@lophocmatngu.wiki", note: { vi: "Hỗ trợ dự án", en: "Project support" } },
             { addr: "banquyen@lophocmatngu.wiki", note: { vi: "Bản quyền & sở hữu trí tuệ", en: "Copyright & intellectual property" } }] },
  { name: "WikiOasis Foundation", url: "https://wikioasis.org", logoUrl: "/wikioasis.png",
    emails: [{ addr: "pisces@wikioasis.org", note: { vi: "Liên hệ cá nhân tại nền tảng", en: "Platform personal contact" } }] },
];
