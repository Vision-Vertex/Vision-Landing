'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logos/Vision5 Logo_O1.svg';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';
import { navItems } from '@/constants/data';
import { Menu, MoveLeft } from 'lucide-react';

export default function NavigationMenuDemo() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [drawerNav, setDrawerNav] = React.useState<string | null>(null);

  return (
    <div className={cn(
      "flex justify-between items-center w-full p-4 md:px-14 md:py-7",
       "bg-accent"
    )}>
      <Link href={'/'}>
        <Image src={Logo} width={110} height={110} alt="Logo" />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='flex items-center'>
              {navItems.map((navitem) =>
                navitem.link ? (
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle() + ' bg-transparent'}
                    key={navitem.title}
                    href={navitem.href}
                  >
                    {navitem.title}
                  </NavigationMenuLink>
                ) : (
                  <div key={navitem.title}>
                    <NavigationMenuTrigger className='bg-transparent'>
                      {navitem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[230px] gap-3 p-4 md:grid-cols-1 lg:w-[350px] ">
                        {navitem.components?.map((component: any) => (
                          <ListItem
                            key={component.service_name}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </div>
                )
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant={'default'}>
          <Link href={'/contact-us'}>Contact Us</Link>
        </Button>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Open menu"
          className="p-2"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setDrawerNav(null);
          }}
        >
          <Menu className='text-primary'/>
        </button>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => {
                setMobileMenuOpen(false);
                setDrawerNav(null);
              }}
            />
            {/* Main Drawer */}
            {!drawerNav && (
              <div className="absolute top-12 right-1 md:right-14 bg-white shadow-lg rounded-lg z-50 w-[80vw] max-w-sm transition-transform duration-300 transform animate-mobile-dropdown">
                <ul className="flex flex-col gap-2 p-4">
                  {navItems.map((navitem) =>
                    navitem.link ? (
                      <li key={navitem.title}>
                        <Link
                          href={navitem.href}
                          className="block py-2 px-3 rounded hover:bg-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {navitem.title}
                        </Link>
                      </li>
                    ) : (
                      <li key={navitem.title}>
                        <button
                          className="w-full text-left py-2 px-3 rounded cursor-pointer hover:bg-accent"
                          onClick={() => setDrawerNav(navitem.title)}
                        >
                          {navitem.title}
                        </button>
                      </li>
                    )
                  )}
                  <li>
                    <Link
                      href="/contact-us"
                      className="block py-2 px-3 rounded bg-primary text-white text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {/* Secondary Drawer for Services or other navitem with children */}
            {drawerNav && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-l-lg z-50 w-[80vw] max-w-sm h-fit flex flex-col transition-transform duration-300 transform animate-mobile-drawer">
                <div className="flex items-center p-4 border-b border-gray-200">
                  <button
                    className="mr-2 text-lg"
                    onClick={() => setDrawerNav(null)}
                  >
                    <MoveLeft className="text-primary" />
                  </button>
                  <span className="font-semibold text-primary text-lg">{drawerNav}</span>
                </div>
                <ul className="flex flex-col gap-2 p-4 overflow-y-auto">
                  {navItems
                    .find((item) => item.title === drawerNav)
                    ?.components?.map((component: any) => (
                      <li
                        key={component.service_name}
                        className={cn(
                          "py-4 px-5 rounded transition-colors",
                          pathname === component.href ? "bg-accent text-primary" : "hover:bg-accent"
                        )}
                      >
                        <Link
                          href={component.href}
                          className={cn(
                            "block w-full",
                            pathname === component.href ? "text-primary" : ""
                          )}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setDrawerNav(null);
                          }}
                        >
                          <span className="font-medium">{component.service_name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-primary">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

// Add animation for drawer sliding in
import '@/styles/drawer-animation.css';
