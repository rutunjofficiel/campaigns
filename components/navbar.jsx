"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import { Button } from "./ui/button";
import { useState } from "react";
export default function Navbar() {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <header>
      <nav
        className={`${navHidden ? "rounded-[2rem]" : "rounded-[2rem]  rounded-b-[2rem]"} lg:px-4 lg:py-4 lg:mt-4 lg:flex-row m-auto mt-2 flex w-[85%]  flex-col items-center justify-between rounded-full bg-[#00243B] px-4 text-lg text-gray-700 md:max-w-[64rem] md:justify-between md:gap-3 `}
      >
        <div className="lg:w-fit flex w-full flex-row items-center justify-between">
          <Link href="#">
            <div className="lg:m-0 relative m-auto h-16 w-48">
              <Image
                fill={true}
                quality={100}
                style={{
                  objectFit: "contain",
                }}
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
                src={logo}
                alt="logo"
              />
            </div>
          </Link>
          <Button
            variant="link"
            className="lg:hidden"
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

        <div
          className={`${navHidden ? "hidden" : "flex"} lg:flex lg:flex-row m-auto w-[85%] flex-col justify-between gap-3 bg-[#00243B] py-3 md:items-center md:bg-transparent`}
          id="menu"
        >
          <ul
            className="
              m-auto
              w-fit  text-base     text-gray-700
              md:m-0
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="block py-2 text-sm text-white opacity-80  duration-200 hover:opacity-100 md:px-2 md:py-4"
                  href={link?.href}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center gap-2 align-middle">
            <Link
              className="block py-2 text-sm text-white opacity-70  duration-200 hover:opacity-100 md:px-2 md:py-4"
              href="#"
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
