import { CardBody, CardTitle } from "react-bootstrap";
import { Card } from "../ui/card";
import { ICONS } from "@/config";

export default function HeroFeatureCard() {
  return (
    <>
      <Card className="w-fit bg-[#029AFF] p-4 px-5 text-start text-white duration-300 hover:bg-[#00243B]">
        <div className="flex flex-col gap-12">
          <CardTitle>
            <div className="h-8 w-8 rounded-full bg-white"></div>
          </CardTitle>
          <div className="flex flex-col gap-2">
            <p className="text-[1rem] font-semibold">Expanding Your Business</p>
            <CardBody>
              <p className="text-[0.8rem]">
                Lorem Ipsum is aLorem Ipsum is a dummy text. Lorem Ipsum is a
                dummy text.
              </p>
            </CardBody>
          </div>
        </div>
      </Card>
    </>
  );
}
4;
