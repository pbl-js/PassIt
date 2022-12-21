import Link from 'next/link';
import React from 'react';
import { routes } from '../../consts/routes';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 bg-purple-800">
      <div className="flex flex-row gap-10 items-center mb-12">
        <Link
          href={routes.home}
          className="mr-auto text-white text-3xl font-bold"
        >
          LOGO
        </Link>
        <div className="flex flex-row gap-8 text-lg font-bold  text-white">
          <Link href={routes.pageOne}>Page one</Link>
          <Link href={routes.pageTwo}>Page two</Link>
          <Link href={routes.pageThree}>Page three</Link>
        </div>
        <Link
          className="py-5 px-8 bg-yellow-400 rounded-xl text-purple-800 text-lg font-bold"
          href="/learn"
        >
          GO TO APPLICATION
        </Link>
      </div>
      {children}
    </div>
  );
}
