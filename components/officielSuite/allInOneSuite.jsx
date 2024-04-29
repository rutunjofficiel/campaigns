import { CiCircleCheck } from "react-icons/ci";
import { CgQuote } from "react-icons/cg";

export default function AllInOneSuite() {
  return (
    <div className="mx-auto mt-12 grid w-[94%] grid-cols-1 items-center justify-evenly gap-12 py-10 text-white lg:w-[90%] lg:grid-cols-2 lg:py-16 ">
      <div className="flex flex-col items-start gap-6 lg:gap-8">
        <div className="flex flex-row items-center gap-2 opacity-90">
          <div className="inline-block h-[1px] w-[24px] bg-white"></div>
          <p className="text-sm tracking-[0.25rem]">ALL-IN-ONE SUITE</p>
        </div>
        <h2 className="text-[36px] leading-tight lg:text-[48px]">
          Officiel Suite:
          <br /> The operating system for business
        </h2>
        <p className="tracking-wide">
          Experience the breadth and depth of the Officiel ecosystem, with the
          professional services, infrastructure, support, and security that a
          large business needs. Streamline complex business processes, build
          strong relationships with your customers, and drive growth at scale.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex flex-row items-center gap-1">
                <CiCircleCheck size={22} color="white" />
                <p>{feature}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-12 pl-4">
        <div className="w-fit rounded-full bg-white">
          <CgQuote size={94} color="#8A1DB5" />
        </div>
        <p className="text-3xl italic tracking-wide">
          "You can be a startup, mid-sized company, or an enterprise — Officiel
          Suite is a boon for all."
        </p>
        <div className="flex flex-row items-center gap-4">
          <div className=" h-[80px] w-[80px] rounded-lg bg-slate-200" />
          <div className=" flex flex-col ">
            <h2 className="text-2xl font-semibold  ">Name Here</h2>
            <p>Designation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  "Lorem Ipsum is a dummy text",
  "Lorem Ipsum is a dummy text",
  "Lorem Ipsum is a dummy text",
  "Lorem Ipsum is a dummy text",
  "Lorem Ipsum is a dummy text",
  "Lorem Ipsum is a dummy text",
];
