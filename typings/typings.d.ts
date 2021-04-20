import { LinkProps } from "next/link";

export interface UserProps {
  firstname: string;
  lastname: string;
  email: string;
  avatarUrl: string;
}

export interface NavItem extends LinkProps {
  name: string;
}

export interface SocialLinks {
  facebook: string;
  linkedin: string;
  twitter: string;
}

export interface HeaderProps {
  user?: UserProps;
  navigation: NavItem[];
  userNavigation: NavItem[];
}

export interface NavigationList {
  title: string;
  navigationItems: navItems[];
}

export interface ShortSection {
  title: string;
  description: string;
  button: string;
}

export interface FooterProps {
  navigationLists: NavigationList[];
  newsLetter: ShortSection;
  blog: ShortSection;
  socials: SocialLinks;
}
