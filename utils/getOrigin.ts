import { isServer } from "./isServer";
import { headers as getHeaders } from "next/headers";

export function getOrigin() {
  const headers = getHeaders();

  const protocol = headers.get("host")?.includes("localhost")
    ? "http:"
    : "https:";
  const host = isServer() ? headers.get("host") : window.location.hostname;

  return `${protocol}//${host}`;
}
