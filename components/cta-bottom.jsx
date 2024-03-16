import { Button } from "./ui/button";

export default function CtaBottom() {
  return (
    <section className="container m-auto my-10 flex w-[95%] flex-col items-center gap-10 rounded-3xl bg-campaignBlue py-8 text-center text-white md:py-16 md:px-14 lg:w-[80%]">
      <div className="flex flex-col items-center justify-center gap-12 sm:gap-8">
        <div className=" flex flex-col items-center gap-4 text-center lg:gap-10">
          <h1 className="text-3xl font-bold">
            Read everything and still doing all these tasks on your own?
          </h1>
          <p className="max-w-[42rem] font-medium leading-normal sm:text-xl sm:leading-8  ">
            Well, bring the change and let Officiel handle all your tasks.
          </p>
          <div className="flex w-fit flex-row gap-2">
            <Button className="bg-white font-semibold text-campaignBlue  hover:bg-white hover:text-campaignBlueDark hover:shadow-lg lg:h-14  lg:px-12 lg:text-lg">
              Start for free
            </Button>
            <Button className="border-[2px] border-white font-semibold  text-white hover:text-white hover:shadow-lg lg:h-14 lg:px-12 lg:text-lg">
              Request more info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
