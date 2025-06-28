export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Resume Template",
  description: "Minimalist Online Resume.",
  navItems: [
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    
  ],
  footer: {
    phone: "478-280-8388",
    email: "admin@bivensblueprint.com",

    },
  links: {
    facebook: "https://facebook.com/bivensblueprint",
    instagram: "https://instagram.com/bivensjeremy",
    website: "https://blueprintwebdev.com",
    business: "https://bivensblueprint.com",
  },
};