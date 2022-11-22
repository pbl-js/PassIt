import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export type SessionType = Awaited<ReturnType<typeof getSession>>;

export async function getSession() {
  return await unstable_getServerSession(authOptions);
}

export type CurrentUserType = Awaited<ReturnType<typeof getCurrentUser>>;

export async function getCurrentUser() {
  const session = await getSession();

  return session?.user;
}
