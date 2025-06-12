// import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  components?: Array;
  link: Boolean;
}
export interface PartnerItem {
  path: any;
  alt: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface Services {
  icon: any;
  headline: string;
  small_description: string;
  description: string;
  button: string;
  image: any;
}
export interface Stats {
  icon: any;
  number: number;
  name: string;
}

export interface Testmonial{
  quote: string;
  name: string;
  icon: any;
}
export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
