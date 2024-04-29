import Image from "next/image";
import privacyIllustration from "../../public/images/privacy.png";

export default function Privacy() {
  return (
    <div className="mx-auto my-16 grid w-[94%] grid-cols-1 items-center gap-10 lg:w-[90%] lg:grid-cols-2 lg:gap-12">
      <div className=" mx-auto flex flex-col gap-8 lg:w-[85%]">
        <h2 className="text-center text-[36px] font-medium  leading-tight lg:text-start lg:text-[44px]">
          Your privacy is our responsibility
        </h2>
        <p className="tracking- text-center font-[#5D6C7C]  opacity-80 lg:text-start  lg:text-[20px]   ">
          We believe that trust is paramount in a relationship. We do not own or
          sell your data, and we most certainly do not bank on advertising-based
          business models. The only way we make money is from the software
          license fees you pay us.
        </p>
      </div>

      <div className="mx-auto">
        <div className="image-container-suite ">
          <Image
            fill={true}
            quality={100}
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
            src={privacyIllustration}
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
}
