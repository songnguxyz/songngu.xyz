import React from "react";
import {
  SiFacebook,
  SiDiscord,
  SiGithub,
  SiGmail,
  SiYouTube
} from "@icons-pack/react-simple-icons";
import { TwitterClassic, BookIcon } from "./index";

export const translations = {
  vi: {
    navProjects: "Meta-Wiki",
    heroTag: "Cùng kết nối ước mơ của bạn",
    heroTitle1: "Chia sẻ tri thức",
    heroTitle2: "theo cách thú vị nhất",
    heroDesc:
      "Không gian sáng tạo và kết nối dành cho cộng đồng. Xây dựng các giải pháp, công cụ và thư viện tri thức hiện đại để đồng hành cùng bạn trên chặng đường phát triển.",
    heroBtn: "Khám phá dự án",
    projTitle: "Các dự án Wiki",
    projDesc:
      "Các dự án cộng đồng và không gian lưu trữ tri thức mà tôi đang vận hành hoặc đóng góp phát triển.",
    netSub: "Mạng lưới",
    netTitle: "Nền tảng & Liên minh",
    netDesc:
      "Tôi hoạt động trên nhiều nền tảng lưu trữ mở và tự hào là một phần của phong trào wiki độc lập toàn cầu.",
    learnMore: "Tìm hiểu thêm",

    projectsData: [
      {
        id: 1,
        name: "Wiki Lớp Học Mật Ngữ",
        url: "https://lophocmatngu.wiki",
        description:
          "Bách khoa toàn thư và không gian lưu trữ thông tin chi tiết về vũ trụ truyện tranh Lớp Học Mật Ngữ.",
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
        name: "Cookie Run Wiki",
        url: "https://twitter.com/CRWiki",
        description:
          "Nền tảng tri thức độc lập, toàn diện và tối ưu hóa trải nghiệm dành cho cộng đồng người chơi Cookie Run. Sắp mở cửa.",
        logoUrl: "/CRW.png",
        badges: [
          {
            iconUrl: "/abxy.svg",
            title: "Lưu trữ bởi ABXY",
            inverted: true,
          },
        ],
        links: [
          { icon: <TwitterClassic />, url: "https://twitter.com/CRWiki" },
          {
            icon: <SiDiscord className="w-5 h-5" />,
            url: "https://discord.gg/D793UdcVCh",
          },
        ],
      },
      {
        id: 3,
        name: "Custom Gameshows Wiki",
        url: "https://cg.songngu.xyz",
        description:
          "Dự án ghi chép và lưu trữ thông tin về vũ trụ Gameshow và các chương trình truyền hình mô phỏng.",
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
            icon: <SiYouTube className="w-6 h-5" />,
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
          "Dự án bách khoa toàn thư tiếng Việt lưu trữ thông tin về vũ trụ truyện tranh và anime 100 Cô Bạn Gái.",
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
    affiliationsData: [
      {
        id: "miraheze",
        name: "Miraheze",
        logoUrl: "/miraheze.svg",
        description:
          "Nền tảng wiki mã nguồn mở phi lợi nhuận. Nơi lưu trữ Wiki Lớp Học Mật Ngữ cùng nhiều dự án cộng đồng khác.",
        bgClass:
          "bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-mxp-pink/50 shadow-sm",
      },
      {
        id: "wikioasis",
        name: "WikiOasis",
        logoUrl: "/wikioasis.png",
        description:
          "Hệ sinh thái wiki mở và linh hoạt. Môi trường tuyệt vời để phát triển, quản lý và tùy biến các wiki quy ngắn và nhỏ.",
        bgClass:
          "bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-mxp-pink/50 shadow-sm",
      },
      {
        id: "abxy",
        name: "ABXY (StrategyWiki)",
        logoUrl: "/abxy.svg",
        description:
          "Hạ tầng máy chủ độc lập và phi thương mại. Đối tác cung cấp giải pháp hosting tự do cho Cookie Run Wiki.",
        bgClass:
          "bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-mxp-pink/50 shadow-sm",
      },
      {
        id: "iwf",
        name: "Independent Wiki Federation",
        logoUrl: "/iwf.svg",
        url: "https://indiewikifederation.org",
        description:
          "Liên minh bảo vệ và thúc đẩy các wiki độc lập, thoát khỏi sự kiểm soát của các farm wiki thương mại, mang lại trải nghiệm tốt nhất cho người dùng.",
        bgClass:
          "bg-[#1c355e] dark:bg-[#0f1f38] shadow-lg relative overflow-hidden group",
      },
    ],
  },
  en: {
    navProjects: "Meta-Wiki",
    heroTag: "Connecting your dreams",
    heroTitle1: "Sharing knowledge",
    heroTitle2: "in the most exciting way",
    heroDesc:
      "A creative and connective space for the community. Building modern solutions, tools, and knowledge libraries to accompany you on your development journey.",
    heroBtn: "Explore Projects",
    projTitle: "Wiki Projects",
    projDesc:
      "Community projects and knowledge repositories I operate or contribute to.",
    netSub: "Network",
    netTitle: "Platforms & Alliances",
    netDesc:
      "Operating on multiple open hosting platforms and proud to be part of the global independent wiki movement.",
    learnMore: "Learn more",

    projectsData: [
      {
        id: 1,
        name: "Wiki Lớp Học Mật Ngữ",
        url: "https://lophocmatngu.wiki",
        description:
          "The encyclopedia and comprehensive storage space for the Lớp Học Mật Ngữ (Zodiac Classsroom) comic universe.",
        logoUrl: "/WLHMN.svg",
        badges: [
          {
            iconUrl: "/iwf.svg",
            title: "IWF Member",
            inverted: false,
          },
          {
            iconUrl: "/miraheze.svg",
            title: "Hosted by Miraheze",
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
        name: "Cookie Run Wiki",
        url: "https://twitter.com/CRWiki",
        description:
          "An independent, comprehensive knowledge platform optimized for the Cookie Run player community.",
        logoUrl: "/CRW.png",
        badges: [
          {
            iconUrl: "/abxy.svg",
            title: "Hosted by ABXY",
            inverted: true,
          },
        ],
        links: [
          { icon: <TwitterClassic />, url: "https://twitter.com/CRWiki" },
          {
            icon: <SiDiscord className="w-5 h-5" />,
            url: "https://discord.gg/D793UdcVCh",
          },
        ],
      },
      {
        id: 3,
        name: "Custom Gameshows Wiki",
        url: "https://cg.songngu.xyz",
        description:
          "A project to document and archive information about the simulated Gameshow universe and television programs.",
        logoUrl: "/WCG.png",
        badges: [
          {
            iconUrl: "/miraheze.svg",
            title: "Hosted by Miraheze",
            inverted: false,
          },
        ],
        links: [
          { icon: <BookIcon />, url: "https://cg.songngu.xyz" },
          {
            icon: <SiYouTube className="w-6 h-5" />,
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
        name: "Vietnamese 100 Kanojo Wiki",
        url: "https://100bangai.songngu.xyz",
        description:
          "The Vietnamese encyclopedia project archiving information about the 100 Kanojo manga and anime universe.",
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
    affiliationsData: [
      {
        id: "miraheze",
        name: "Miraheze",
        logoUrl: "/miraheze.svg",
        description:
          "A non-profit open-source wiki hosting platform. Home to Custom Gameshows Wiki and other community projects.",
        bgClass:
          "bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-mxp-pink/50 shadow-sm",
      },
      {
        id: "wikioasis",
        name: "WikiOasis",
        logoUrl: "/wikioasis.png",
        description:
          "An open and flexible wiki ecosystem. A great environment to develop, manage, and customize small to medium wikis.",
        bgClass:
          "bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-mxp-pink/50 shadow-sm",
      },
      {
        id: "abxy",
        name: "ABXY (StrategyWiki)",
        logoUrl: "/abxy.svg",
        description:
          "Independent and non-commercial server infrastructure. Providing free hosting solutions for Cookie Run Wiki.",
        bgClass:
          "bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-mxp-pink/50 shadow-sm",
      },
      {
        id: "iwf",
        name: "Independent Wiki Federation",
        logoUrl: "/iwf.svg",
        url: "https://indiewikifederation.org",
        description:
          "An alliance protecting and promoting independent wikis, free from commercial wiki farm control, delivering the best user experience.",
        bgClass:
          "bg-[#1c355e] dark:bg-[#0f1f38] shadow-lg relative overflow-hidden group",
      },
    ],
  },
};

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
