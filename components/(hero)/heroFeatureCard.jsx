import { CardBody, CardTitle } from "react-bootstrap";
import { Card } from "../ui/card";
import { ICONS } from "@/config";

export default function HeroFeatureCard() {
  return (
    <Card className="text-white bg-[#029AFF] w-fit   ">
      <CardTitle>
        <ICONS.performance size={22} />
        <p className="font-semibold text-[1.2rem]">Expanding Your Business</p>
      </CardTitle>
      <CardBody>
        <p>
          Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum
          is a dummy text.{" "}
        </p>
      </CardBody>
    </Card>
  );
}
