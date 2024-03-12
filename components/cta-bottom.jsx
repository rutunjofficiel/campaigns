import { Button } from "./ui/button";

export default function CtaBottom() {
  return (
    <section className="container flex max-w-[64rem] flex-col items-center gap-10 py-24 text-center text-white">
      <div className="sm:gap-8 flex flex-col items-center justify-center gap-12">
        <div className=" lg:gap-10   flex max-w-[64rem] flex-col items-center gap-4   text-center">
          <h1 className="text-3xl font-bold">
            Read everything and still doing all these tasks on your own?
          </h1>
          <p className="sm:text-xl sm:leading-8 max-w-[42rem] leading-normal  ">
            Well, bring the change and let Officiel handle all your tasks.
          </p>
          <div className="flex w-fit flex-row gap-2">
            <Button className="lg:h-14 lg:rounded-lg lg:px-12 lg:text-lg hover:bg-campaignBlue text-campaignBlue bg-white hover:text-white">
              Start for free
            </Button>
            <Button className="lg:h-14 lg:rounded-full lg:px-12 lg:text-lg  outline outline-1 outline-white">
              Request more info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
