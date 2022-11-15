import React from "react";
import "./globals.css";
import { clsx } from "clsx";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="z-10 relative">{children}</div>
      <div
        className={clsx(
          "z-0 fixed top-0 left-0 bottom-0 right-0",
          "bg-gradient-to-br from-gradient-purple-light to-gradient-purple-dark"
        )}
      />
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
