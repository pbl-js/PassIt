"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import { SessionType } from "../../utils/session";

type AuthPageClientProps = { session: SessionType };

export const AuthPageClient = ({ session }: AuthPageClientProps) => {
  if (session)
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );

  return (
    <div>
      <p>Not sign in</p>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};
