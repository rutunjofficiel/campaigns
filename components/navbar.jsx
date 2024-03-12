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
    <header className="mx-auto max-w-[90%] backdrop-blur-sm  md:top-0 md:z-40 md:max-w-[90%] ">
      <nav className="lg:bg-[#00243B] lg:text-white lg:flex-row m-auto mt-2 flex flex-col   items-center justify-between rounded-full text-lg text-white md:mt-4 md:gap-3  md:p-1 md:px-5">
        <div className="lg:w-fit flex w-full flex-row items-center justify-between gap-3">
          <div className="mobileLogo  lg:hidden m-auto flex w-fit  flex-row gap-1 text-black md:m-0">
            <SlEnvolopeLetter size={22} color="#029AFF" />
            <h1 className="text-xl font-bold">
              <span>Officiel</span>
              <span className="text-campaignBlue">Campaign</span>
            </h1>
          </div>
          <div className="desktopLogo lg:inline-block lg:w-[11rem] relative hidden w-32 overflow-hidden">
            <Image objectFit="cover" src={logo} alt="Logo main" />
          </div>

          <Button
            variant="link"
            id="menu-button"
            className="lg:hidden "
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
          className={`${navHidden ? "hidden" : "flex"} lg:bg-campaignBlueDark lg:flex lg:flex-row m-auto w-full flex-col items-center justify-between gap-3`}
          id="menu"
        >
          <ul className="text-campaignBlueDark lg:text-white lg:flex lg:flex-row   w-fit text-base">
            {navLinks.map((link, index) => (
              <li key={index} className="lg:px-2 lg:py-4 py-2">
                <Link href={link?.href}>{link.link}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center gap-2 align-middle">
            <Link
              className="lg:text-white text-campaignBlueDark block py-2 text-base opacity-100 duration-200 md:px-2 md:py-4"
              href="/signIn"
            >
              Sign In
            </Link>
            <Button>Try for free</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

const navLinks = [
  {
    link: "Home",
    href: "#",
  },
  {
    link: "Solutions",
    href: "#",
  },
  {
    link: "Features",
    href: "#",
  },
  {
    link: "Pricing",
    href: "#",
  },
  {
    link: "Contact",
    href: "#",
  },
];

const navLinks2 = [
  {
    link: "Sign In",
    href: "#",
  },
];
