import React from "react";
import "./globals.css";

import { Montserrat } from "@next/font/google";
import { ClientLayout } from "./ClientLayout";
import { unstable_getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const montserrat = Montserrat();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClientLayout session={session}>{children}</ClientLayout>
      </body>
    </html>
  );
}
