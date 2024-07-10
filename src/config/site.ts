export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "My Portfolio",
  description: "I'm Eric Quinn, a full-stack dev.",
  navItems: [
    {
      label: "Home",
      href: "/",
      content: {
        headline: "I'm Eric Quinn, a full-stack dev.",
        description:
          "I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly websites and applications. I'm a self-taught developer with a background in graphic design and a love for learning new things. I'm always looking for new opportunities to grow and expand my skills.",
      },
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      content: {
        headline: "My Portfolio",
        description: "Some of the websites and applications I've created.",
      },
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
