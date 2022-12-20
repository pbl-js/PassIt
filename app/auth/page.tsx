import React from 'react';
import { AuthPageClient } from './pageClient';
import { getSession } from '../../utils/session';
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
