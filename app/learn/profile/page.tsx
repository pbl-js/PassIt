import { redirect } from "next/navigation";
import React from "react";
import { routes } from "../../../consts/routes";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getCurrentUser } from "../../../utils/session";
import { ProfilePageClient } from "./pageClient";

export default async function PlayPage() {
  const user = await getCurrentUser();

  return <ProfilePageClient user={user} />;
}
