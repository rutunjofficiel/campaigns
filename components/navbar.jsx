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
    <header className="sticky top-0 z-40 border-b-2 border-slate-50 backdrop-blur-sm">
      <nav
        className={`${navHidden ? "rounded-[2rem]" : "rounded-[2rem]"} lg:py-4 lg:mt-4 m-auto mt-2 flex   max-w-[64rem] flex-col items-center justify-between rounded-full text-lg md:flex-row md:justify-between md:gap-3`}
      >
        <div className="flex w-full flex-row items-center justify-between md:w-fit">
          <Link href="#">
            <div className="lg:justify-normal m-auto flex w-fit flex-row items-center justify-center gap-1 md:m-0 hideIllustration:w-full ">
              <SlEnvolopeLetter size={22} color="#029AFF" />
              <h1 className="text-xl font-bold">
                <span>Officiel</span>
                <span className="text-campaingnBlue">Campaign</span>
              </h1>
            </div>
          </Link>
          <Button
            variant="link"
            className="md:hidden"
            onClick={() => {
              console.log(navHidden);
              setNavHidden(!navHidden);
            }}
          >
            {navHidden ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="block h-6 w-6 cursor-pointer "
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            )}
          </Button>
        </div>

        {/* <div
          className={`${navHidden ? "hidden" : "flex"} m-auto w-full flex-col justify-between gap-3 bg-[#00243B] py-3 md:flex md:flex-row md:items-center md:bg-transparent`}
          id="menu"
        > */}
        <ul className="text-basetext-gray-700 m-auto w-fit md:m-0 md:flex md:justify-between md:pt-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="block py-2 text-sm opacity-100 duration-200 md:px-2 md:py-4"
                href={link?.href}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-center gap-2 align-middle">
          <Link
            className="block py-2 text-sm opacity-100 duration-200 md:px-2 md:py-4"
            href="/signIn"
          >
            Sign In
          </Link>
          <Button>Try for free</Button>
        </div>
        {/* </div> */}
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
