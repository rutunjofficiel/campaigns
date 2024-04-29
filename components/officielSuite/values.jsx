export default function Values() {
  return (
    <div className=" mx-auto flex w-[94%] flex-col gap-12 lg:w-[90%]">
      <h2 className="mx-auto text-center text-[24px] font-medium leading-tight lg:text-[36px]">
        The core values and principles that drive us
      </h2>
      <div className="mx-auto flex flex-col items-center justify-evenly gap-8 lg:w-[85%] lg:flex-row">
        {values.map((value, i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="h-[64px] w-[64px] rounded-full bg-violet-800 lg:h-[72px] lg:w-[72px]"></div>
              <h2 className="text-center  text-[18px] font-medium lg:text-[22px] ">
                {value.title}
              </h2>
              <p className="text-center text-sm tracking-wide lg:text-base ">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const values = [
  {
    title: "Long-term commitment",
    description:
      "Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.",
  },
  {
    title: "Focus on research & development",
    description:
      "Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.",
  },
  {
    title: "Customer-first philosophy",
    description:
      "Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.Lorem Ipsum is a dummy text.",
  },
];
