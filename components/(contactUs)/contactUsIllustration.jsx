import { Card } from "@/components/ui/card";
import ContactDetailCard from "./contactDetailCard";

export default function ContactUsIllustration() {
  return (
    <Card className="relative m-auto border-0 bg-transparent text-white shadow-none">
      <div className="m-auto flex flex-col items-center">
        <div className="flex w-[90%] flex-col gap-10 py-6 lg:w-[70%]">
          <div className="flex flex-col  gap-2 lg:gap-4">
            <h1 className="sub-heading-white">Let&apos;s Talk!</h1>
            <p className="m-auto text-center text-[1rem] font-medium lg:text-start">
              Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem
              Ipsum is a dummy text.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 ">
            <ContactDetailCard
              horizontal={true}
              bg={"#DCF1FF"}
              icon={"phone"}
              number={"9949399393"}
            />
            <ContactDetailCard
              horizontal={true}
              bg={"#DCF1FF"}
              icon={"location"}
              detail={"19 Maypole Crescent Ilford,L62UJ"}
            />
            <ContactDetailCard
              horizontal={true}
              bg={"#DCF1FF"}
              icon={"email"}
              mail={"contact@officielcrm.com"}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
