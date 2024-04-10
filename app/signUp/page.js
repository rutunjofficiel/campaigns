import SignUpForm from "@/components/(signUp)/signUpForm";
import Illustration from "@/components/illustration";
export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-0 lg:mt-2">
      <Illustration />
      <SignUpForm />
    </div>
  );
}
