import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 flex-1">
      <div>
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#029AFF]  ">
            Email Marketing and SMS Marketing Made Easy
          </h1>
          <p>
            Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem
            Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a
            dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy
            text.{" "}
          </p>
        </div>

        <div>
          <Button className="bg-[#029AFF]">Contact Us</Button>
          <Button variant="outline">Learn More</Button>
        </div>

        
      </div>
    </section>
  );
}
