import React from "react";
import "./globals.css";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
