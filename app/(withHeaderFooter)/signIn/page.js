"use client";
import Illustration from "@/components/illustration";
import SignInForm from "@/components/(signIn)/signInForm";
import { useEffect, useState } from "react";
import Loading from "@/app/(dashboard)/dashboard/loading";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("userInfo"));
    if (d) {
      if (d["userInfo"] && d["custID"]) {
        router.push("/dashboard");
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (!loading) {
    return (
      <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-0 lg:mt-2">
        <Illustration />
        <SignInForm />
      </div>
    );
  } else {
    return <Loading />;
  }
}
