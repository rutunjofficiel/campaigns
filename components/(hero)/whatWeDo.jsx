import { whatWeDoCardsContent } from "@/app/utils/content";
import WhatWeDoCard from "../(whatWeDo)/whatWeDoCard";

export default function WhatWeDo() {
  return (
    <>
      <div className="m-auto flex max-w-[42rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold">
          Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.
        </h1>
        <p className="w-10/12 text-xl">
          Lorem Ipsum is dummy text. Lorem Ipsum is dummy text. Lorem Ipsum is
          dummy text. Lorem Ipsum is dummy text.
        </p>
      </div>
      <div className="sm:grid-cols-2 mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-3">
        {whatWeDoCardsContent.map((content) => (
          <WhatWeDoCard
            key={content.title}
            heading={content.title} // Changed 'heading' to 'title'
            description={content.description}
          />
        ))}
      </div>
    </>
  );
}
