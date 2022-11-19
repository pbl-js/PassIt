import { Section } from "@prisma/client";
import { API_URL } from "../../config";
import { getOrigin } from "../../utils/getOrigin";

export async function getSections(): Promise<Section[]> {
  const origin = getOrigin();
  console.log(origin);
  const res = await fetch(`${origin}/api/section`, {
    method: "GET",
    cache: "no-store",
    headers: {},
  });

  return res.json();
}
