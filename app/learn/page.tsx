import { redirect } from "next/navigation";
import { routes } from "../../consts/routes";

export default function Page() {
  return redirect(routes.topics);
}
