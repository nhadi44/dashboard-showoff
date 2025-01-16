'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from '../icons/sidebar/chevron-down-icon';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Item = {
  title: string;
  href: string;
};

interface Props {
  icon: React.ReactNode;
  title: string;
  items: Item[];
  isActive?: boolean;
}

export const CollapseItems = ({ icon, items, title, isActive }: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex gap-4 h-full items-center cursor-pointer">
      <Accordion className="px-0" defaultExpandedKeys={isActive ? ['1'] : ['']}>
        <AccordionItem
          indicator={<ChevronDownIcon />}
          classNames={{
            indicator: 'data-[open=true]:-rotate-180',
            trigger: `py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5 ${isActive ? 'bg-primary-100 [&_svg_path]:fill-primary-500' : ''}`,

            title:
              'px-0 flex text-base gap-2 h-full items-center cursor-pointer',
          }}
          aria-label="Accordion 1"
          title={
            <div className="flex flex-row gap-2">
              <span>{icon}</span>
              <span>{title}</span>
            </div>
          }
          key={'1'}
        >
          <div className="pl-12">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex py-2 text-default-500 hover:text-default-900 transition-colors ${item.href === pathname ? 'text-primary-500' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
