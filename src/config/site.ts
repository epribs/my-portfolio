export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Eric P. Quinn Portfolio",
  description: "Eric P. Quinn, full stack dev.",
  navItems: [
    {
      label: "Home",
      href: "/",
      content: {
        headline: "Eric P. Quinn, full stack dev.",
        description:
          "I'm a full stack developer with a passion for creating beautiful, functional, and user-friendly websites and applications. I'm a self-taught developer with a background in graphic design and a love for learning new things. I'm always looking for new opportunities to grow and expand my skills.",
      },
    },
    {
      label: "Blog",
      href: "/blog",
      content: {
        headline: "My Blog",
        description:
          "Some of my thoughts on web development, design, and other topics.",
      },
    },
    {
      label: "About",
      href: "/about",
      content: {
        headline: "About Me",
        description: `I'm Eric Quinn, a dynamic Full Stack Developer and aspiring technology leader passionate 
      about building and scaling innovative web solutions. With a rich background in developing robust applications and 
      driving platform strategy, I am skilled in a range of modern programming languages and frameworks, including JavaScript, 
      SQL, React.js, and Node.js.`,
      },
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
    title: "Eric P. Quinn Portfolio",
    description: "Eric P. Quinn, full stack dev.",
    url: "epribs.com",
    siteName: "ericpquinn.com",
    locale: "en_US",
    languague: "en",
    typeName: "website",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};
