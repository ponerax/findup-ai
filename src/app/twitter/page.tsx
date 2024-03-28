import { Links } from "@/libs/Links";
import { redirect } from "next/navigation";

function Twitter() {
  return redirect(Links.twitter ? Links.twitter : "/");
}

export default Twitter;
