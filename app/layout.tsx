import React from "react";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={montserrat.className}>
      <header>dasd</header>
      {children}
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
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
