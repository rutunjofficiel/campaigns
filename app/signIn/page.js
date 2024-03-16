import Illustration from "@/components/illustration";
import SignInForm from "@/components/(signIn)/signInForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-0">
      <Illustration />
      <SignInForm />
    </div>
  );
}
