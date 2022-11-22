import { redirect } from "next/navigation";
import React from "react";
import {
  Navigation,
  navigationWidth,
} from "../../components/navigation/Navigation";
import { routes } from "../../consts/routes";
import { getCurrentUser } from "../../utils/session";

export default async function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(routes.signIn);
  }

  return (
    <>
      <Navigation />
      <div
        className="w-full min-h-screen p-8"
        style={{ marginLeft: navigationWidth }}
      >
        {children}
      </div>
    </>
  );
}
