import { Button } from "../ui/button";
import { Card, CardTitle, CardContent } from "../ui/card";

export default function BenefitCard({ benefit }) {
  return (
    <>
      <Card className="flex w-fit flex-col gap-4 bg-[#029AFF] p-4 px-5 text-start text-white duration-300 hover:bg-[#00243B] md:gap-5">
        <CardTitle className="max-w-[24rem] text-[1rem] font-normal">
          {benefit}
        </CardTitle>
      </Card>
    </>
  );
}
