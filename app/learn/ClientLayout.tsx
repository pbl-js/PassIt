"use client";

import clsx from "clsx";
import { SessionProvider } from "next-auth/react";
import { Navigation, navigationWidth } from "../../components/navigation/Navigation";
import { useSession } from "next-auth/react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

function InnerLearnClientLayout({ children }: ClientLayoutProps) {
  useSession({ required: true });

  return (
    <div>
      <div className="z-10 relative">
        <Navigation />
        <div
          className="w-full min-h-screen px-8 py-20"
          style={{
            marginLeft: navigationWidth,
            width: `calc(100% - ${navigationWidth})`,
          }}
        >
          {children}
        </div>
        <a>ds</a>
      </div>
      <div className={clsx("z-0 fixed top-0 left-0 bottom-0 right-0", "bg-purple-600")} />
    </div>
  );
}

export function LearnClientLayout({ children }: ClientLayoutProps) {
  return (
    <SessionProvider>
      <InnerLearnClientLayout>{children}</InnerLearnClientLayout>
    </SessionProvider>
  );
}
