import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>Root Layout</h1>
      {children}
    </section>
  );
}