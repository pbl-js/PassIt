import clsx from 'clsx';
import { SessionProvider } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';
import {
  Navigation,
  navigationWidth,
} from '../../components/navigation/Navigation';
import { routes } from '../../consts/routes';
import { getCurrentUser } from '../../utils/session';
import { LearnClientLayout } from './ClientLayout';

export default async function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(routes.signIn);
  }

  return <LearnClientLayout>{children}</LearnClientLayout>;
}
