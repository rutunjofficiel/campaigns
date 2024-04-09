import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import navDesktopLogo from "../public/images/navDesktopLogo.png";

import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Footer() {
  return (
    <footer className="bg-[#00243B] py-16 pb-6">
      <div className="m-auto flex flex-col gap-6">
        <div className=" grid grid-cols-1 gap-14 text-center lg:grid-cols-3">
          <div className="mx-auto flex flex-col items-center md:block">
            <div className="relative h-12 w-64 lg:m-0">
              <Image
                fill={true}
                quality={100}
                style={{
                  objectFit: "contain",
                }}
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
                src={navDesktopLogo}
                alt="logo"
              />
            </div>
            <p className=" w-fit text-[14px] text-white">Subtext here</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center md:grid-cols-2 lg:grid-cols-3  lg:text-start">
            <div className="flex flex-col gap-2 text-[0.9rem] text-white">
              <h1 className=" font-semibold uppercase">Products</h1>
              <Link className="" href="#">
                Officiel Campaign
              </Link>
              <Link className="" href="#">
                Pricing
              </Link>
              <Link className="" href="#">
                Solution
              </Link>
            </div>
            <div className="flex flex-col  gap-2 text-[0.9rem] text-white">
              <h1 className="font-bold uppercase">Company</h1>
              <Link href="https://officielcrm.com/about/">About</Link>
              <Link href="/contactUs">Contact</Link>
              <Link href="https://officielcrm.com/career/">Careers</Link>
              <Link href="https://officielcrm.com/blog/">Blog</Link>
            </div>
            <div className="col-span-2  flex flex-col gap-2 text-[0.9rem] text-white md:col-span-1">
              <h1 className="font-bold uppercase">Support</h1>
              <Link href="/contactUs">Contact Us</Link>
              <Link href="https://officielcrm.com/help-center/">Support</Link>
              <Link href="https://officielcrm.com/privacy-policy-2/">
                Policy
              </Link>
              <Link href="https://officielcrm.com/contact/">Talk to Sales</Link>
            </div>
          </div>
          <div className="flex flex-col  gap-4 text-[0.9rem] text-white md:w-[80%]  md:items-start md:text-start">
            <h1 className=" font-bold uppercase">
              Subscribe to our newsletter.
            </h1>
            <p>
              Want to stay up to date with news and updates about our product?
              Subscribe.
            </p>
            <div>
              <Input
                className="m-auto w-fit bg-transparent "
                placeholder="email@provider.com"
              />
            </div>
            <p className="text-[0.8rem]">
              By subscribing to our newsletter you agree to our privacy policy
              and will get commercial communication.
            </p>
          </div>
        </div>
        <Separator className="m-auto w-[95%]" />
        <div className="grid grid-cols-1 items-center gap-14 text-center text-[0.8rem] text-white md:grid-cols-3">
          <p>© 2024 Powered by OfficielCRM</p>

          <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Settings</p>
          </div>
          <div className="m-auto flex flex-row items-center  gap-5 lg:m-0">
            {/* <Select defaultValue="english" bgNone="true" className="bg-none ">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem className=" " value="english">
                    English
                  </SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="arabic">Arabic</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
            <div className="flex flex-row items-end gap-3">
              <FaXTwitter size={19} />
              <FaLinkedinIn size={19} />
              <FaFacebookF size={19} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
