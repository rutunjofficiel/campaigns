import { Button } from "../ui/button";

export default function VideoSection() {
  return (
    <div className=" m-auto flex flex-col items-center justify-center gap-4 rounded-2xl bg-slate-50 p-4 py-8 text-center shadow md:max-w-[80vw]">
      <div className="flex flex-col items-center gap-6">
        <h1 className="w-[90%] text-[1rem] font-medium text-[#050505] md:text-2xl">
          Data-driven decisions, cost-effective investment, enhanced analytics,
          integration of third-party, everything is in one place with Officiel
          Campaign.
        </h1>
        <div className="flex w-fit flex-row gap-2">
          <Button className="lg:h-14 lg:rounded-full lg:px-12 lg:text-lg bg-campaignBlue">
            Try it now
          </Button>
          <Button
            className="lg:h-14 lg:rounded-full lg:px-12 lg:text-lg "
            variant="outline"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="border-12px aspect-video h-auto w-[90vh] rounded-2xl border-black bg-slate-200 "></div>
    </div>
  );
}
