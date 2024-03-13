import { Button } from "./ui/button";

export default function CtaBottom() {
  return (
    <section className="container flex flex-col items-center gap-10 py-12 text-center text-white">
      <div className="flex flex-col items-center justify-center gap-12 sm:gap-8">
        <div className=" flex flex-col items-center gap-4 text-center lg:gap-10">
          <h1 className="text-3xl font-bold">
            Read everything and still doing all these tasks on your own?
          </h1>
          <p className="max-w-[42rem] font-medium leading-normal sm:text-xl sm:leading-8  ">
            Well, bring the change and let Officiel handle all your tasks.
          </p>
          <div className="flex w-fit flex-row gap-2">
            <Button className="bg-white text-campaignBlue  hover:bg-white hover:text-campaignBlueDark lg:h-14  lg:px-12 lg:text-lg">
              Start for free
            </Button>
            <Button
              variant="ghost"
              className="text-campaignBlueDark   lg:h-14 lg:px-12 lg:text-lg"
            >
              Request more info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
