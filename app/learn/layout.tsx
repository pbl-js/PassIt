import React from "react";
import {
  Navigation,
  navigationWidth,
} from "../../components/navigation/Navigation";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
