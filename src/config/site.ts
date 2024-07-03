export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "My Portfolio",
  description: "I'm Eric Quinn, a full-stack dev.",
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
    github: "https://github.com/epribs",
    linkedin: "https://www.linkedin.com/in/epribs/",
  },
  openGraph: {
    title: "My Portfolio",
    description: "I'm Eric Quinn, a full-stack dev. This is my portfolio.",
    url: "epribs.com",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
