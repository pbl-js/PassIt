import Link from "next/link";
import React from "react";
import { Button } from "../../components/Button/Button";
import { routes } from "../../consts/routes";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10 bg-purple-800">
      <div className="flex flex-row gap-10 items-center mb-12">
        <Link href={routes.home} className="mr-auto text-white text-3xl font-bold">
          LOGO
        </Link>
        <div className="flex flex-row gap-8 text-lg font-bold  text-white">
          <Link href={routes.pageOne}>Page one</Link>
          <Link href={routes.pageTwo}>Page two</Link>
          <Link href={routes.pageThree}>Page three</Link>

          <Button href="/learn/topics">GO TO APPLICATION</Button>
        </div>
      </div>
      {children}
    </div>
  );
}
