import { SlEnvolopeLetter } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { Button } from "./ui/button";

export default function SignInForm() {
  return (
    <div className="flex flex-col justify-center md:py-0 py-4 px-4 w-full md:w-1/2 md:px-1 ">
      <div className="md:ml-10 md:p-6 flex flex-col md:gap-8 gap-8">
        <div className="flex flex-row gap-1 items-center m-auto md:m-0">
          <SlEnvolopeLetter size={22} color="#029AFF" />
          <h1 className="font-bold text-xl">
            <span>Officiel</span>
            <span className="text-blue-500">Campaign</span>
          </h1>
        </div>
        <div className="flex flex-col md:gap-3 gap-7 pl-0">
          <div className="flex flex-col md:gap-5 gap-4 text-center md:text-left">
            <h1 className="md:text-[2.5rem] text-[1.6rem] leading-tight font-extrabold">
              Welcome Back to Your <br></br> Email Marketing Hub
            </h1>
            <h3 className="text-lg font-medium text-gray-500">
              Access Your Campaigns with Ease
            </h3>
          </div>
          <div className="flex flex-col gap-7 lg:w-[70%] w-[90%] m-auto md:m-0">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                {" "}
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="bg-[#EEEEEE] py-2.5 px-2 rounded-sm"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="bg-[#EEEEEE] py-2.5 px-3 rounded-sm"
                  />
                </div>
                <div className="flex flex-row sm:text-sm text-xs justify-between">
                  <p>
                    Don’t have an account?
                    <span className="font-bold text-blue-500"> Sign Up</span>
                  </p>
                  <p>Forgot password?</p>
                </div>
              </div>
              <Button className="bg-[#029AFF] w-full py-6" type="submit">
                Login
              </Button>
            </form>

            <div className="flex flex-row items-center m-auto">
              <div className="flex-1 bg-[#424242]  px-12 h-[0.4px] opacity-40"></div>
              <p className="text-[#424242] mx-4 opacity-100">or</p>
              <div className="flex-1 bg-[#424242]  px-12 h-[0.4px] opacity-40"></div>
            </div>

            <div className="flex lg:flex-row gap-3 flex-col justify-around">
              <Button className="text-sm font-semibold lg:text-md w-full flex gap-2 items-center bg-slate-200 hover:bg-slate-300 text-black">
                <FcGoogle size={28} />
                Login with Google
              </Button>
              <Button className="text-sm font-semibold lg:text-md w-full flex gap-2 items-center align-middle">
                <ImAppleinc size={28} />
                Login with Apple
              </Button>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
