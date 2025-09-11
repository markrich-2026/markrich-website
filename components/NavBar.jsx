import React, { useState } from "react";
import logo from "@/public/images/logo.webp";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const NavBar = () => {
  const [isClicked, setClicked] = useState(false);

  const showNav = () => {
    setClicked((prevCheck) => !prevCheck);
  };
  const showDrop = () => {
    setHover((prevCheck) => !prevCheck);
  };
  const navLinks = [
    {
      page: "Home",
      url: "/",
    },
    {
      page: "About us",
      url: "/about-us",
    },
    {
      page: "Training Solutions",
      url: "/training-solutions",
    },
    {
      page: "Delivery",
      url: "/delivery",
    },
    {
      page: "Content",
      url: "/content",
    },
    {
      page: "Verify Certificate",
      url: "/verify-certificate",
    },
    {
      page: "Contact",
      url: "/contact-us",
    },
  ];

  return (
    <>
      <NavigationMenu.Root className="z-[1] flex w-full items-center justify-center  [&>div]:min-w-[100%] [&>div]:flex [&>div]:justify-center [&>div]:static ">
        <NavigationMenu.List className="w-full flex max-w-[1200px] list-none bg-white p-1 py-3 px-5 items-center justify-between">
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/"
            >
              <img src={logo.src} className="max-w-[100px]" alt="" />
            </Link>
          </NavigationMenu.Item>
          <div className="flex gap-5 lg:hidden">
            {navLinks.map((navitem, index) => (
              <NavigationMenu.Item key={index + 1}>
                <Link
                  className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 text-[15px] font-medium leading-none no-underline outline-none"
                  href={navitem.url}
                >
                  {navitem.page}
                </Link>
              </NavigationMenu.Item>
            ))}
          </div>
          <div className="rounded-full  hidden lg:block ">
            <button
              className="focus:text-[#F58A07] p-2 rounded-full bg-slate-50 text-slate-500 focus:bg-[#f58a072b]"
              onClick={showNav}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <NavigationMenu.Root
        className={`z-[1] w-full items-center justify-center  [&>div]:min-w-[100%] [&>div]:flex [&>div]:justify-center [&>div]:static lg:min-h-screen hidden lg:flex lg:items-start ${
          isClicked ? "" : "lg:translate-x-[-1000px]"
        } lg:absolute lg:bg-white transition`}
      >
        <NavigationMenu.List className="w-full flex max-w-[1200px] list-none bg-white p-1 py-3 px-5 items-center justify-between h-full lg:items-start">
          <div className="flex gap-5 lg:flex-col lg:gap-6 lg:mt-6">
            {navLinks.map((navitem, index) => (
              <NavigationMenu.Item key={index + 1} onClick={showNav}>
                <Link
                  className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 text-xl font-medium leading-none no-underline outline-none"
                  href={navitem.url}
                >
                  {navitem.page}
                </Link>
              </NavigationMenu.Item>
            ))}
          </div>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
};

export default NavBar;
