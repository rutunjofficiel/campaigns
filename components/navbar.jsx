"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import { Button } from "./ui/button";
import { useState } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Navbar() {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <header className="mx-auto max-w-[95%] backdrop-blur-sm  md:top-0 md:z-40 md:max-w-[90%] ">
      <nav className="m-auto mt-2 flex flex-col items-center justify-between rounded-full   text-lg text-white md:mt-4 md:gap-3 md:p-1 md:px-5 lg:flex-row  lg:bg-[#00243B] lg:text-white">
        <div className="flex w-full flex-row items-center justify-between gap-3 lg:w-fit">
          <div className="mobileLogo    flex w-fit flex-row  gap-1 text-black md:m-0 lg:hidden">
            <Link href="/">
              <SlEnvolopeLetter size={22} color="#029AFF" />
              <h1 className="text-xl font-bold">
                <span>Officiel</span>
                <span className="text-campaignBlue">Campaign</span>
              </h1>
            </Link>
          </div>
          <div className="desktopLogo relative hidden w-32 overflow-hidden lg:inline-block lg:w-[11rem]">
            <Link href="/">
              <Image objectFit="cover" src={logo} alt="Logo main" />
            </Link>
          </div>

          <Button
            variant="link"
            id="menu-button"
            className="p-3 lg:hidden"
            onClick={() => {
              console.log(navHidden);
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
          className={`${navHidden ? "hidden" : "flex"} m-auto w-full flex-col items-center justify-between gap-3 lg:flex lg:flex-row lg:bg-campaignBlueDark`}
          id="menu"
        >
          <ul className="w-fit text-base text-campaignBlueDark lg:flex   lg:flex-row lg:text-white">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="transition-200ms py-2 opacity-80 hover:opacity-100 lg:px-2 lg:py-4"
              >
                <Link href={link?.href}>{link.link}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center gap-2 align-middle">
            <Link
              className="block py-2 text-base text-campaignBlueDark opacity-100 duration-200 md:px-2 md:py-4 lg:text-white"
              href="/signIn"
            >
              Sign In
            </Link>
            <Link href="/signUp">
              <Button className="font-semibold ">Try for free</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

const navLinks = [
  {
    link: "Home",
    href: "/",
  },
  {
    link: "Solutions",
    href: "#",
  },
  {
    link: "Features",
    href: "#services",
  },
  {
    link: "Pricing",
    href: "#",
  },
  {
    link: "Contact",
    href: "/contactUs",
  },
];

const navLinks2 = [
  {
    link: "Sign In",
    href: "#",
  },
];
