"use client";

import clsx from "clsx";
import { Session, unstable_getServerSession } from "next-auth";
import { getSession, SessionProvider } from "next-auth/react";
import { use } from "react";
import { authOptions } from "../pages/api/auth/[...nextauth]";

type ClientLayoutProps = {
  children: React.ReactNode;
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};

export function ClientLayout({ children, session }: ClientLayoutProps) {
  // const session = getSession();

  return (
    <SessionProvider session={session}>
      <div>
        <div className="z-10 relative">{children}</div>
        <div
          className={clsx(
            "z-0 fixed top-0 left-0 bottom-0 right-0",
            "bg-gradient-to-br from-gradient-purple-light to-gradient-purple-dark"
          )}
        />
      </div>
    </SessionProvider>
  );
}
