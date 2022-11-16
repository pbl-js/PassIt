import React from "react";
import { Section } from "@prisma/client";

async function getSections(): Promise<Section[]> {
  const res = await fetch("http://localhost:3000/api/section", {
    method: "GET",
    cache: "no-store",
    headers: {},
  });

  return res.json();
}

export default async function PlayPage() {
  const sections = await getSections();

  return (
    <div className="w-full">
      {sections.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}
