import { Section } from "@prisma/client";
import { getOrigin } from "../../utils/getOrigin";

export async function getSections(): Promise<Section[]> {
  const origin = getOrigin();

  try {
    const res = await fetch(`${origin}/api/section`, {
      method: "GET",
      cache: "no-store",
      headers: {},
    });

    return res.json();
  } catch (error) {
    return [];
  }
}
