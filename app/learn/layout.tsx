import React from "react";
import { Navigation } from "../../components/navigation/Navigation";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="w-full h-full bg-slate-400">{children}</div>
    </>
  );
}
