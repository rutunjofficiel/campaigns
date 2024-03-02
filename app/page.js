import Illustration from "@/components/illustration";
import SignInForm from "@/components/signInForm";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-4 md:gap-0">
      <Illustration />
      <SignInForm />
    </div>
  );
}
