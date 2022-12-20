import React from 'react';
import { LearnClientLayout } from './ClientLayout';

export default async function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LearnClientLayout>{children}</LearnClientLayout>;
}
