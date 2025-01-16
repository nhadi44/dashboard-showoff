'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from '@/components/icons';
import { SidebarContext } from '@/components/layout/layout-context';
import React from 'react';
import { useLockedBody } from '@/components/hooks/useBodyLock';

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    // <NextUINavbar maxWidth="xl" position="sticky">
    //
    //   <NavbarMenuToggle />
    //
    //   <NavbarMenu>
    //     {searchInput}
    //     <div className="mx-4 mt-2 flex flex-col gap-2">
    //       {siteConfig.navMenuItems.map((item, index) => (
    //         <NavbarMenuItem key={`${item}-${index}`}>
    //           <Link
    //             color={
    //               index === 2
    //                 ? 'primary'
    //                 : index === siteConfig.navMenuItems.length - 1
    //                   ? 'danger'
    //                   : 'foreground'
    //             }
    //             href="#"
    //             size="lg"
    //           >
    //             {item.label}
    //           </Link>
    //         </NavbarMenuItem>
    //       ))}
    //     </div>
    //   </NavbarMenu>
    // </NextUINavbar>

    <SidebarContext.Provider
      value={{
        collapsed: false,
        setCollapsed: () => handleToggleSidebar,
      }}>
    </SidebarContext.Provider>
  );
};
