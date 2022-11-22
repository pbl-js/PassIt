"use client";

import { signOut } from "next-auth/react";
import React from "react";
import { CurrentUserType } from "../../../utils/session";

type ProfilePageClient = {
  user: CurrentUserType;
};

export const ProfilePageClient = ({ user }: ProfilePageClient) => {
  return (
    <div>
      <p>Signed in as {user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};
