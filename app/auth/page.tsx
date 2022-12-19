import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { AuthPageClient } from './pageClient';
import { getCurrentUser, getSession } from '../../utils/session';
import { redirect } from 'next/navigation';
import { routes } from '../../consts/routes';

const AuthPage = async () => {
  const session = await getSession();

  if (session) {
    redirect(routes.topics);
  }

  return <AuthPageClient session={session} />;
};

export default AuthPage;
