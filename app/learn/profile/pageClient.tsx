'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { CurrentUserType } from '../../../utils/session';

type ProfilePageClient = {};

export const ProfilePageClient = ({}: ProfilePageClient) => {
  const { data } = useSession();

  return (
    <div>
      {data?.user && <p>Signed in as {data.user.email}</p>}
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};
