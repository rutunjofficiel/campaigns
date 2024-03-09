import { HeroFeatures } from "@/config";
import { Button } from "./ui/button";
import HeroFeature from "./(hero)/heroFeature";
import HeroFeatureCard from "./(hero)/officielCampaignServices";

export default function Hero() {
  return (
    <section className="m-auto  flex flex-col gap-10 px-3 text-start md:mt-16 md:max-w-[64rem] md:items-center md:text-center">
      <div className="flex max-w-[64rem] flex-col items-start gap-4 md:items-center md:gap-8 ">
        <h1 className=" lg:text-7xl text-4xl font-bold text-[#050505] md:text-6xl">
          <span className=" lg:text-7xl bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Email Marketing{" "}
          </span>
          and SMS Marketing Made Easy
        </h1>

        <p className="max-w-[42rem] text-xl font-medium   leading-normal text-[#00243B] opacity-90 ">
          Boost your conversions; leave the confusion. Choose Officiel for
          marketing solutions.
        </p>
        <div className="flex w-fit flex-row gap-2">
          <Button className="md:h-14 md:rounded-full md:px-12 md:text-lg">
            Contact Us
          </Button>
          <Button
            className="md:h-14 md:rounded-full md:px-12 md:text-lg"
            variant="outline"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="lg:max-w-[80vw] m-auto  mx-auto mt-8 grid w-fit grid-cols-1 justify-center gap-4 md:max-w-[85vw] md:grid-cols-3">
        <HeroFeatureCard
          feature={"Expanding Your Business"}
          featureDescription={
            "Expand your business with the Officiel Campaign and accelerate your growth with many options integrated into one platform."
          }
        />
        <HeroFeatureCard
          feature={"Sign Up For Free"}
          featureDescription={
            "Leave worries about investing. Officiel offers a free sign-up for 500 emails."
          }
        />
        <HeroFeatureCard
          className="col-span-2"
          feature={"Explore Your Options"}
          featureDescription={
            "Don't feel stuck with one option; explore SMS, WhatsApp, and Email everything by investing in one app."
          }
        />
      </div>
    </section>
  );
}
