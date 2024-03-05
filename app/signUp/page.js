import SignUpForm from "@/components/(signUp)/signUpForm";
import Illustration from "@/components/illustration";
export default function Page() {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-4 md:gap-0">
      <Illustration />
      <SignUpForm />
    </div>
  );
}
