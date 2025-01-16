'use client';

import { Layout } from '@/components/layout/layout';
import '@/styles/globals.css';
import React from 'react';
import { usePathname } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Layout>
      <section className="p-7 flex flex-row-reverse align-center justify-between">
        <Breadcrumb />
        <div>{children}</div>
      </section>
    </Layout>
  );
}
