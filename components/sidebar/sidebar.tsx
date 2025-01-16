import React from 'react';
import { Sidebar } from './sidebar.styles';
import { Avatar, Tooltip } from '@nextui-org/react';
import { HomeIcon } from '../icons/sidebar/home-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { CollapseItems } from './collapse-items';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { FilterIcon } from '../icons/sidebar/filter-icon';
import { useSidebarContext } from '../layout/layout-context';
import { usePathname } from 'next/navigation';
import SwaggerIcon from '@/components/icons/swagger-icon';
import DatabaseIcon from '@/components/icons/database-icon';
import { SettingsIcon } from '@/components/icons/sidebar/settings-icon';
import SettingIcon from '@/components/icons/setting-icon';

// create object
const accordionItems = [
  {
    title: 'Hero',
    href: '/master-data/hero',
  },
  {
    title: 'About',
    href: '/master-data/about',
  },
  {
    title: 'Anti-Hero',
    href: '/master-data/anti-hero',
  },
];

const cmsSettingItems = [
  {
    title: 'Breadcrumbs',
    href: '/cms-setting/breadcrumbs',
  },
  {
    title: 'Sidebar',
    href: '/cms-setting/breadcrumbs',
  },
];

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <SwaggerIcon />
          <h1 className="font-semibold text-xl">ShowOff</h1>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<HomeIcon />}
              isActive={pathname === '/'}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <CollapseItems
                icon={<DatabaseIcon />}
                items={accordionItems}
                title="Master Data"
                isActive={pathname.startsWith('/master-data')}
              />
            </SidebarMenu>

            <SidebarMenu title="Settings">
              <SidebarItem
                isActive={pathname === '/accounts'}
                title="Accounts"
                icon={<AccountsIcon />}
                href="accounts"
              />
              <CollapseItems icon={<SettingIcon />} title={'CMS Settings'} items={cmsSettingItems}
                             isActive={pathname.startsWith('/cms-setting')} />
            </SidebarMenu>

          </div>
        </div>
      </div>
    </aside>
  );
};
