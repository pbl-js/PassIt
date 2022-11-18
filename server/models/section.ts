import { Section } from "@prisma/client";

export async function getSections(): Promise<Section[]> {
  const res = await fetch("http://localhost:3000/api/section", {
    method: "GET",
    cache: "no-store",
    headers: {},
  });

  return res.json();
}
