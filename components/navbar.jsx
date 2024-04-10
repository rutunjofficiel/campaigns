"use client";
import Image from "next/image";
import Link from "next/link";
import navDesktopLogo from "@/public/images/navDesktopLogo.png";
import navDesktopLogoBlack from "@/public/images/navDesktopLogoBlack.png";
import { Button } from "./ui/button";
import { useRef, useState, useEffect } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader } from "./ui/card";
import { BsWhatsapp } from "react-icons/bs";
import { Mail } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { MessagesSquareIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

export default function Navbar() {
  const [navHidden, setNavHidden] = useState(true);
  const [showDropdownSolutions, setShowDropdownSolutions] = useState(false);
  const [showDropdownCompany, setShowDropdownCompany] = useState(false);
  const menuRef = useRef(null); // Ref for the menu/dropdown element

  useEffect(() => {
    // Function to close menu/dropdown when user clicks outside
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // If clicked element is not inside the menu/dropdown
        setShowDropdownSolutions(false);
        setShowDropdownCompany(false);
      }
    }

    // Add event listener to handle clicks outside the menu/dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDropdown = (dropdown) => {
    if (dropdown === "solutions") {
      setShowDropdownSolutions(!showDropdownSolutions);
      setShowDropdownCompany(false); // Close company dropdown
    } else if (dropdown === "company") {
      setShowDropdownCompany(!showDropdownCompany);
      setShowDropdownSolutions(false); // Close solutions dropdown
    }
  };
  return (
    <header className="mx-auto max-w-[95%] backdrop-blur-sm  md:top-0 md:z-40 md:max-w-[90%] ">
      <nav className="m-auto mt-2 flex flex-col items-center justify-between rounded-full   text-lg text-white  md:mt-4 md:gap-3 md:p-1 md:px-5 lg:flex-row  lg:bg-[#00243B] lg:text-white">
        <div className="flex w-full flex-row items-center justify-between gap-3 lg:w-fit">
          {/* <div className="mobileLogo flex w-fit flex-row  gap-1 text-black md:m-0 lg:hidden">
            <div className="  relative hidden w-32 overflow-hidden   lg:w-[180px]">
              <Link href="/" className="flex flex-row gap-1">
                <Image objectFit="cover" src={navDesktopLogo} alt="Logo main" />
              </Link>
            </div>
          </div> */}
          <div className="desktopLogo relative  w-[180px] overflow-hidden  lg:hidden">
            <Link href="/" className="flex flex-row gap-1">
              <Image
                objectFit="cover"
                src={navDesktopLogoBlack}
                alt="Logo main"
              />
            </Link>
          </div>
          <div className="desktopLogo relative hidden  w-32 overflow-hidden lg:inline-block lg:w-[180px]">
            <Link href="/" className="flex flex-row gap-1">
              <Image objectFit="cover" src={navDesktopLogo} alt="Logo main" />
            </Link>
          </div>

          <Button
            variant="link"
            id="menu-button"
            className="p-3 lg:hidden"
            onClick={() => {
              setNavHidden(!navHidden);
            }}
          >
            {navHidden ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block h-6 w-6 cursor-pointer "
                fill="none"
                viewBox="0 0 24 24"
                stroke="#050505"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            )}
          </Button>
        </div>
        <div
          ref={menuRef} // Attach ref to the menu/dropdown container
          className={`${navHidden ? "hidden" : "flex"} w-full flex-col items-center justify-between gap-3 lg:m-auto lg:flex  lg:flex-row lg:bg-campaignBlueDark`}
          id="menu"
        >
          <ul className="w-fit text-base text-campaignBlueDark lg:flex lg:flex-row  lg:text-white">
            <li
              className=" relative cursor-pointer  py-2 lg:p-4"
              onClick={() => toggleDropdown("solutions")}
            >
              <div className="flex flex-row items-center gap-1">
                <span>Solutions </span>
                {showDropdownSolutions ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>
              {showDropdownSolutions && (
                <div className="relative left-0 top-full mt-2 w-[180px] rounded-lg bg-inherit p-4 lg:absolute lg:w-[220px] lg:bg-white  lg:shadow-lg">
                  <ul className="flex flex-col gap-y-2 text-campaignBlueDark">
                    <li className=" ">
                      <Link href="#">
                        <Button
                          variant="outline"
                          className="hidden w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:flex"
                        >
                          <p className="">Email</p>
                          <Mail />
                        </Button>
                        <div className="flex w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:hidden">
                          <p className="">Email</p>
                          <Mail />
                        </div>
                      </Link>
                    </li>
                    <li className="  ">
                      <Link href="#">
                        <Button
                          variant="outline"
                          className="hidden w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:flex"
                        >
                          <p className="">SMS</p>
                          <MessagesSquareIcon />
                        </Button>
                        <div className="flex w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:hidden">
                          <p className="">SMS</p>
                          <MessagesSquareIcon />
                        </div>
                      </Link>
                    </li>
                    <li className=" ">
                      <Link href="#">
                        <Button
                          variant="outline"
                          className="hidden w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:flex"
                        >
                          <p className="">Whatsapp</p>
                          <BsWhatsapp size={20} />
                        </Button>
                        <div className="flex w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:hidden">
                          <p className="">Whatsapp</p>
                          <BsWhatsapp size={20} />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative cursor-pointer py-2 lg:p-4"
              onClick={() => toggleDropdown("company")}
            >
              <div className="flex flex-row items-center gap-1">
                <span>Company </span>
                {showDropdownCompany ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>
              {showDropdownCompany && (
                <div className="relative left-0 top-full mt-2 w-[180px] rounded-lg bg-inherit p-4 lg:absolute lg:w-[220px] lg:bg-white  lg:shadow-lg">
                  <ul className="flex flex-col gap-y-2 text-campaignBlueDark">
                    <li className=" ">
                      <Link href="https://officielcrm.com/about/">
                        <Button
                          variant="outline"
                          className="hidden w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:flex"
                        >
                          <p className="">About Us</p>
                        </Button>
                        <div className="flex w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:hidden">
                          <p className="">About Us</p>
                        </div>
                      </Link>
                    </li>
                    <li className=" ">
                      <Link href="https://officielcrm.com/career/">
                        <Button
                          variant="outline"
                          className="hidden w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:flex"
                        >
                          <p className="">Careers</p>
                        </Button>
                        <div className="flex w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:hidden">
                          <p className="">Careers</p>
                        </div>
                      </Link>
                    </li>

                    <li className=" ">
                      <Link href="https://officielcrm.com/blog/">
                        <Button
                          variant="outline"
                          className="hidden w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:flex"
                        >
                          <p className="">Blogs</p>
                        </Button>
                        <div className="flex w-full flex-row justify-between rounded-xl bg-transparent opacity-90 lg:hidden">
                          <p className="">Blogs</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {navLinks.map((link, index) => (
              <li
                key={index}
                className="transition-200ms py-2 opacity-80 hover:opacity-100 lg:p-4"
              >
                <Link href={link?.href}>{link.link}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center gap-2 align-middle">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="block py-2 text-base text-campaignBlueDark opacity-100 duration-200 md:px-2 md:py-4 lg:text-white"
                    href="#"
                  >
                    Sign In
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-campaignBlue ">
                  <p
                    className="text-white
                  "
                  >
                    Coming soon...
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="/#">
                    <Button className="font-semibold ">Try for free</Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-campaignBlue">
                  <p className="text-white">Coming soon...</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </nav>
    </header>
  );
}

const navLinks = [
  {
    link: "Support",
    href: "/support",
  },
];

const navLinks2 = [
  {
    link: "Sign In",
    href: "#",
  },
];
