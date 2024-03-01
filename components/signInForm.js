import { SlEnvolopeLetter } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function SignInForm() {
  return (
    <div className="py-12  flex flex-col gap-4 ml-20">
      <div className="flex flex-row gap-1 items-center py-1">
        <SlEnvolopeLetter size={22} color="[#029AFF]" />
        <h1 className="font-bold text-xl">
          <span>Officiel</span>
          <span className="text-[#029AFF]">Campaign</span>
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-5xl font-extrabold">
            Welcome Back to Your <br></br> Email Marketing Hub
          </h1>
          <h3 className="text-xl font-medium text-gray-500">
            Access Your Campaigns with Ease
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-[#EEEEEE] py-3 px-6 rounded-sm"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="bg-[#EEEEEE] py-3 px-6 rounded-sm"
            />
          </div>
          <div className="flex flex-row justify-between text-sm gap-4">
            <p>
              Don’t have an account?
              <span className="font-bold text-[#029AFF]">Sign Up</span>
            </p>
            <p>Forgot password?</p>
          </div>
          <Button className="bg-[#029AFF] w-full"> Login</Button>
        </div>
      </div>{" "}
      <div className="flex items-center opacity-60">
        <div className="flex-1 bg-[#424242] mx-3 p-[1px]"></div>
        <p className="text-[#424242]">or</p>
        <div className="flex-1 bg-[#424242] mx-3 p-[1px]"></div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 justify-between">
        <Button className="w-full py-4 text-md flex gap-2 items-center bg-slate-200 hover:bg-slate-300 text-black">
          <FcGoogle size={28} />
          Login with Google
        </Button>
        <Button className="w-full py-4 text-md flex gap-2 items-center align-middle">
          <ImAppleinc size={28} />
          Login with Apple
        </Button>
      </div>
    </div>
  );
}
