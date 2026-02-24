export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "TRACIN", href: "/tracin" },
      { label: "Studio", href: "/studio" },
      { label: "Shop", href: "/purchase" },
      { label: "Online Demo", href: "/online-demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      {
        label: "Discover",
        href: "https://discover.movin3d.com/",
        external: true,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Documentation",
        href: "https://help.movin3d.com/",
        external: true,
      },
      { label: "Software & Plugin", href: "/downloads" },
      { label: "Sample Data", href: "/downloads" },
      { label: "FAQs", href: "https://help.movin3d.com/faq", external: true },
    ],
  },
  {
    title: "About",
    links: [
      {
        label: "EULA",
        href: "https://dashboard.movin3d.com/eula",
        external: true,
      },
      {
        label: "Warranty",
        href: "https://dashboard.movin3d.com/warranty",
        external: true,
      },
      {
        label: "Privacy policy",
        href: "https://dashboard.movin3d.com/privacy",
        external: true,
      },
      {
        label: "Terms & Conditions",
        href: "https://dashboard.movin3d.com/terms-and-conditions",
        external: true,
      },
    ],
  },
];
