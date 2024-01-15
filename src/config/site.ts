export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  footerLinks: [
    {
      label: "产品中心",
      items: [
        {
          label: "智能安检机系列",
          href: "/",
        },
        {
          label: "智能升降柱系列",
          href: "/",
        },
      ],
    },
    {
      label: "解决方案",
      items: [
        {
          label: "智慧安检租赁解决方案",
          href: "/",
        },
        {
          label: "智慧物流安检解决方案",
          href: "/",
        },
      ],
    },
    {
      label: "服务支持",
      items: [
        {
          label: "服务政策",
          href: "/",
        },
        {
          label: "常见问题",
          href: "/",
        },
      ],
    },
    {
      label: "联系我们",
      items: [
        {
          label: "关于我们",
          href: "/about",
        },
        {
          label: "商务合作",
          href: "/about",
        },
      ],
    },
    {
      label: "更多",
      items: [
        {
          label: "新闻资讯",
          href: "/",
        },
      ],
    },
  ],
};
