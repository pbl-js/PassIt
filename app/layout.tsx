import React from 'react';
import './globals.css';

import { Montserrat } from '@next/font/google';
import { unstable_getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import clsx from 'clsx';

const montserrat = Montserrat();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
