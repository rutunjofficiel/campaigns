import Link from "next/link";
import { Button } from "../ui/button";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mx-auto flex  w-[94%] flex-col gap-12 py-10 lg:w-[90%]">
      <div className="grid grid-cols-2 gap-4 text-white lg:grid-cols-4 lg:gap-0">
        <div className="  mx-auto flex flex-col gap-2 text-center text-sm opacity-80 lg:mx-0">
          <p className=" text-base  font-medium  opacity-100">Company</p>
          <Link href="#">About Us</Link>
          <Link href="#">Why Choose us</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Testimonial</Link>
        </div>
        <div className="  mx-auto flex flex-col gap-2 text-center text-sm opacity-80 lg:mx-0">
          <p className="text-base font-medium opacity-100 ">Resources</p>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms and Condition</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="col-span-2  mx-auto flex flex-col gap-2  place-self-center text-center text-sm opacity-80 lg:col-span-1 lg:mx-0 lg:place-self-start">
          <p className="text-base font-medium opacity-100 ">Product</p>
          <Link href="#">Project managment</Link>
          <Link href="#">Time tracker</Link>
          <Link href="#">Time schedule</Link>
          <Link href="#">Lead generate</Link>
        </div>
        <div className="col-span-2 my-6 flex flex-col gap-2 lg:col-span-1 lg:my-0">
          <h2 className=" sub-heading-white">
            Officiel<span className="text-campaignBlue">Suite</span>
          </h2>

          <p className="text-center lg:text-start">
            Subscribe to our Newsletter
          </p>
          <div className="flex flex-col gap-1 lg:flex-row">
            <input
              type="email"
              placeholder="Enter your Email"
              className="border-1 rounded-lg border-black border-opacity-75 bg-[#4F4F4F] p-2 text-white text-opacity-90 lg:rounded-e-none"
            />
            <Button className="rounded-lg bg-white text-black lg:rounded-s-none">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-row items-center justify-between text-white">
        <div className="inline-block h-[1px] bg-white opacity-70 lg:w-[30%]"></div>
        <div className="flex  flex-col-reverse items-center gap-8 opacity-80 lg:flex-row lg:items-start">
          <p>© Copyright OfficielCRM 2023</p>
          <div className="flex flex-row gap-4 lg:gap-2">
            <Link href="https://twitter.com/IE_Officielcrm">
              <FaXTwitter size={19} />
            </Link>
            <Link href="https://www.linkedin.com/company/officielcrm/">
              <FaLinkedinIn size={19} />
            </Link>
            <Link href="https://www.facebook.com/officielcrm">
              <FaFacebookF size={19} />
            </Link>
            <Link href="https://www.instagram.com/officiel_crm/">
              <FaInstagram size={19} />
            </Link>
          </div>
        </div>
        <div className="inline-block h-[1px] bg-white opacity-70 lg:w-[30%]"></div>
      </div>
    </footer>
  );
}
