import React from "react";
import {
  SiBluesky,
  SiDiscord,
  SiFacebook,
  SiKofi,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { BookIcon, TwitterClassic } from "../components/icons";

// Các dự án wiki hiển thị ở trang chủ.
// Khai báo riêng theo từng ngôn ngữ vì không phải bản dịch của nhau: mục Cookie Run
// trỏ tới hai wiki khác nhau (vi.cookierun.wiki và cookierun.wiki) với badge,
// link mạng xã hội riêng.
export const projects = {
  vi: [
    {
      id: 1,
      name: "Wiki Lớp Học Mật Ngữ",
      url: "https://lophocmatngu.wiki",
      description:
        "Bách khoa toàn thư và không gian lưu trữ thông tin chi tiết về vũ trụ truyện tranh Lớp Học Mật Ngữ kể từ năm 2019",
      logoUrl: "/WLHMN.svg",
      badges: [
        {
          iconUrl: "/iwf.svg",
          title: "Thành viên IWF",
          inverted: false,
        },
        {
          iconUrl: "/miraheze.svg",
          title: "Lưu trữ bởi Miraheze",
          inverted: false,
        },
      ],
      links: [
        { icon: <BookIcon />, url: "https://lophocmatngu.wiki" },
        {
          icon: <SiFacebook className="w-5 h-5" />,
          url: "https://facebook.com/wikilophocmatngu",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://go.lophocmatngu.wiki/discord",
        },
      ],
    },
    {
      id: 2,
      name: "Wiki Cookie Run tiếng Việt",
      url: "https://vi.cookierun.wiki",
      description:
        "Nền tảng tri thức độc lập, toàn diện và tối ưu dành cho cộng đồng người chơi Cookie Run",
      logoUrl: "/WCRVN.png",
      badges: [
        {
          iconUrl: "/abxy.svg",
          title: "Lưu trữ bởi ABXY",
          inverted: true,
        },
      ],
      links: [
        { icon: <BookIcon />, url: "https://vi.cookierun.wiki" },
        {
          icon: <SiFacebook className="w-5 h-5" />,
          url: "https://facebook.com/vi.cookierun.wiki",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://discord.gg/HF3yzrj6Kf",
        },
        {
          icon: <SiKofi className="w-5 h-5" />,
          url: "https://ko-fi.com/crwiki",
        },
      ],
    },
    {
      id: 3,
      name: "Custom Gameshows Wiki",
      url: "https://cg.songngu.xyz",
      description:
        "Dự án ghi chép và lưu trữ thông tin về vũ trụ Gameshow và các chương trình truyền hình mô phỏng",
      logoUrl: "/WCG.png",
      badges: [
        {
          iconUrl: "/miraheze.svg",
          title: "Lưu trữ bởi Miraheze",
          inverted: false,
        },
      ],
      links: [
        { icon: <BookIcon />, url: "https://cg.songngu.xyz" },
        {
          icon: <SiYoutube className="w-6 h-5" />,
          url: "https://youtube.com/@CustomGameshows",
        },
        {
          icon: <SiFacebook className="w-5 h-5" />,
          url: "https://facebook.com/customgameshows",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://discord.gg/eqwvCQphhn",
        },
      ],
    },
    {
      id: 4,
      name: "Wiki 100 Bạn Gái tiếng Việt",
      url: "https://100bangai.songngu.xyz",
      description:
        "Dự án bách khoa toàn thư tiếng Việt lưu trữ thông tin về vũ trụ truyện tranh và anime 100 Cô Bạn Gái",
      logoUrl: "/W100.svg",
      badges: [
        {
          iconUrl: "/miraheze.svg",
          title: "Lưu trữ bởi Miraheze",
          inverted: false,
        },
      ],
      links: [
        {
          icon: <BookIcon />,
          url: "https://100bangai.songngu.xyz",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://discord.gg/ykFWjNUgaQ",
        },
      ],
    },
  ],
  en: [
    {
      id: 1,
      name: "Wiki Lớp Học Mật Ngữ",
      url: "https://lophocmatngu.wiki",
      description:
        "The encyclopedia and comprehensive storage space for the Lớp Học Mật Ngữ (Zodiac Classsroom) comic universe since 2019",
      logoUrl: "/WLHMN.svg",
      badges: [
        {
          iconUrl: "/iwf.svg",
          title: "IWF Member",
        },
        {
          iconUrl: "/miraheze.svg",
          title: "Hosted by Miraheze",
        },
      ],
      links: [
        { icon: <BookIcon />, url: "https://lophocmatngu.wiki" },
        {
          icon: <SiFacebook className="w-5 h-5" />,
          url: "https://facebook.com/wikilophocmatngu",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://go.lophocmatngu.wiki/discord",
        },
      ],
    },
    {
      id: 2,
      name: "Cookie Run Wiki",
      url: "https://cookierun.wiki",
      description:
        "An independent, comprehensive knowledge platform optimized for the Cookie Run player community",
      logoUrl: "/CRW.png",
      badges: [
        {
          iconUrl: "/gwn.png",
          title: "Gaming Wiki Network Member",
        },
        {
          iconUrl: "/iwf.svg",
          title: "IWF Member",
        },
        {
          iconUrl: "/abxy.svg",
          title: "Hosted by ABXY",
          inverted: true,
        },
      ],
      links: [
        { icon: <BookIcon />, url: "https://cookierun.wiki" },
        { icon: <TwitterClassic />, url: "https://twitter.com/CRWiki" },
        {
          icon: <SiFacebook className="w-5 h-5" />,
          url: "https://facebook.com/cookierun.wiki",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://discord.gg/D793UdcVCh",
        },
        {
          icon: <SiBluesky className="w-5 h-5" />,
          url: "https://bsky.app/profile/cookierun.wiki",
        },
        {
          icon: <SiKofi className="w-5 h-5" />,
          url: "https://ko-fi.com/crwiki",
        },
      ],
    },
    {
      id: 3,
      name: "Custom Gameshows Wiki",
      url: "https://cg.songngu.xyz",
      description:
        "Document and archiving project about the simulated game show and TV programs universe",
      logoUrl: "/WCG.png",
      badges: [
        {
          iconUrl: "/miraheze.svg",
          title: "Hosted by Miraheze"
        },
      ],
      links: [
        { icon: <BookIcon />, url: "https://cg.songngu.xyz" },
        {
          icon: <SiYoutube className="w-6 h-5" />,
          url: "https://youtube.com/@CustomGameshows",
        },
        {
          icon: <SiFacebook className="w-5 h-5" />,
          url: "https://facebook.com/customgameshows",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://discord.gg/eqwvCQphhn",
        },
      ],
    },
    {
      id: 4,
      name: "Vietnamese Hyakkano Wiki",
      url: "https://100bangai.songngu.xyz",
      description:
        "The Vietnamese encyclopedia project archiving information about the Hyakkano manga and anime series",
      logoUrl: "/W100.svg",
      badges: [
        {
          iconUrl: "/miraheze.svg",
          title: "Hosted by Miraheze",
          inverted: false,
        },
      ],
      links: [
        {
          icon: <BookIcon />,
          url: "https://100bangai.songngu.xyz",
        },
        {
          icon: <SiDiscord className="w-5 h-5" />,
          url: "https://discord.gg/ykFWjNUgaQ",
        },
      ],
    },
  ],
};
