import Illustration from "@/components/illustration";
import SignInForm from "@/components/signInForm";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col ">
      <Illustration />
      <SignInForm />
    </div>
  );
}
