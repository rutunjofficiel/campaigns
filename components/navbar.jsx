"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import { Button } from "./ui/button";
import { useState } from "react";
export default function Navbar() {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <header className="backdrop-blur-sm md:sticky md:top-0 md:z-40">
      <nav
        className={`${navHidden ? "rounded-[2rem]" : "rounded-[2rem]"} m-auto mt-2 flex flex-col items-center justify-between rounded-full bg-[#00243B] text-lg text-white md:mt-4 md:flex-row md:justify-between md:gap-3 md:p-1 md:px-5 `}
      >
        <div className="flex w-full flex-row items-center justify-between md:w-fit">
          <Link href="#">
            <div className="relative overflow-hidden md:w-48">
              <Image objectFit="cover" src={logo} alt="Logo main" />
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
                stroke="white"
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
          className={`${navHidden ? "hidden" : "flex"} m-auto w-full flex-col justify-between gap-3 bg-[#00243B]   md:flex md:flex-row md:items-center md:bg-transparent`}
          id="menu"
        >
          <ul className="m-auto w-fit text-base md:m-0 md:flex md:justify-between md:pt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="block py-2   opacity-100  duration-200 md:px-2 md:py-4"
                  href={link?.href}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center gap-2 align-middle">
            <Link
              className="block py-2 text-base opacity-100 duration-200 md:px-2 md:py-4"
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
