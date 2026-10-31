import { ReactNode } from "react";
import { Map, Search, Store, Check, Vote, Scale, Scroll } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export const mainNavItems: NavItem[] = [
  { name: "Explore", href: "/explore", icon: <Search className="size-4" /> },
  { name: "Market", href: "/market", icon: <Store className="size-4" /> },
  { name: "Map", href: "/map", icon: <Map className="size-4" /> },
];

export const secondaryNavItems: NavItem[] = [
  { name: "Contact", href: "mailto:contact@promptsolutions.com.au" },
];

export const docsItems: NavItem[] = [
  { name: "Server status", href: "/docs/ip", icon: <Check className="size-4" /> },
  { name: "Vote", href: "/docs/vote", icon: <Vote className="size-4" /> },
  { name: "Rules", href: "/docs/rules", icon: <Scale className="size-4" /> },
  { name: "Custom Recipes", href: "/docs/recipes", icon: <Scroll className="size-4" /> },
];

export const footerSections: FooterSection[] = [
  {
    title: "WorldMC",
    links: [
      { name: "Home", href: "/" },
      { name: "Contact", href: "mailto:contact@promptsolutions.com.au" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Eve's Games", href: "https://eves.gg", external: true },
      { name: "Careers and Commissions", href: "https://eves.gg", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export const footerInfo = {
  logo: "/worldmc.png",
  companyName: "Eve's Games SP.",
  slogan: "Illustrating the Corruption of the Natural World.",
};
