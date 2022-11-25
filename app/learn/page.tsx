import { redirect } from "next/navigation";
import { routes } from "../../consts/routes";

export default function Page() {
  redirect(routes.topics);

  // TODO: Add notFound page
  return null;
}
