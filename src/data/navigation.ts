export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  hasDropdown?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "TRACIN", href: "/tracin", hasDropdown: true },
  { label: "Studio", href: "/studio", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Discover", href: "https://discover.movin3d.com/", external: true },
  { label: "Downloads", href: "/downloads" },
];

export const NAV_CTA = {
  demo: { label: "Online Demo", href: "/online-demo" },
  purchase: {
    label: "Purchase",
    href: "https://shop.movin3d.com/products/movin-tracin",
    external: true,
  },
};
