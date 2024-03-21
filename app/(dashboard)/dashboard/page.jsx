"use client";
import SidePanel from "@/components/(dashboard)/sidePanel";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    let d = JSON.parse(window.localStorage.getItem("userInfo"));
    console.log("d", d);
    if (d === null) {
      // router.push("/signIn");
    }
  }

  return <div className=""></div>;
}
