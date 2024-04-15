export default function HeroStats() {
  return (
    <div className="flex w-full flex-col justify-evenly gap-12 bg-[#1F1F1F]  py-8 lg:flex-row  lg:py-10 ">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[1.2rem] font-bold text-white md:text-[2rem]">
          55+
        </h2>
        <p className=" font-normal text-white">Integration Partners</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[1.2rem] font-bold text-white md:text-[2rem]">
          2.5k
        </h2>
        <p className=" font-normal text-white">Organizations</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[1.2rem] font-bold text-white md:text-[2rem]">
          400M
        </h2>
        <p className=" font-normal text-white">Emails sent/month</p>
      </div>
    </div>
  );
}
