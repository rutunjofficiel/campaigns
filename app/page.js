import Illustration from "@/components/illustration";
import SignInForm from "@/components/(signIn)/signInForm";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-4 md:gap-0 ">
      <div className=" h-max">
        <Illustration />
      </div>
      <div className=" h-max">
        <SignInForm />
      </div>
    </div>
  );
}
