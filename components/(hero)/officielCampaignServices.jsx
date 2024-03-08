import { CardBody, CardTitle } from "react-bootstrap";
import { Card } from "../ui/card";
import { ICONS } from "@/config";

export default function HeroFeatureCard({ feature, featureDescription }) {
  return (
    <>
      <Card className="flex w-fit flex-col justify-between gap-3 bg-[#029AFF] px-4 py-4 text-start text-white duration-300 hover:bg-[#00243B]  md:gap-5 md:p-4 md:px-5">
        <div className="h-8 w-8 rounded-full bg-white"></div>
        <div className="flex flex-row md:flex-col md:gap-12">
          <div className="flex flex-col gap-2">
            <CardTitle>
              <p className="text-[1rem] font-semibold">{feature}</p>
            </CardTitle>
            <CardBody>
              <p className=" text-[0.8rem]">{featureDescription}</p>
            </CardBody>
          </div>
        </div>
      </Card>
    </>
  );
}
4;
