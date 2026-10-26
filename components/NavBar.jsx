import React, { useState } from "react";
import logo from "@/public/images/logo.webp";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { PHONE_DISPLAY, PHONE_LINK, EMAIL, EMAIL_LINK } from "@/lib/contact";

// Call / Email buttons shown in the header; labels collapse to icons on smaller screens
const HeaderContactButtons = () => (
  <div className="flex items-center gap-2">
    <a
      href={PHONE_LINK}
      aria-label={`Call ${PHONE_DISPLAY}`}
      className="flex items-center gap-2 rounded-full bg-[#F58A07] text-white px-4 py-2 text-sm font-medium hover:bg-[#ED3630] transition xl:px-3"
    >
      <FaPhoneAlt size={14} />
      <span className="xl:hidden">Call</span>
    </a>
    <a
      href={EMAIL_LINK}
      aria-label={`Email ${EMAIL}`}
      className="flex items-center gap-2 rounded-full border border-[#F58A07] text-[#F58A07] px-4 py-2 text-sm font-medium hover:bg-[#F58A07] hover:text-white transition xl:px-3"
    >
      <FaEnvelope size={14} />
      <span className="xl:hidden">Email</span>
    </a>
  </div>
);

// Pages listed under the "Training Solutions" dropdown — add new training pages here
const trainingPages = [
  {
    page: "AI Training Company in India",
    url: "/ai-training-company-india",
  },
];

const ChevronDown = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300 group-hover:rotate-180"
  >
    <path
      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

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
      children: trainingPages,
    },
    {
      page: "Delivery",
      url: "/delivery",
    },
    // {
    //   page: "Content",
    //   url: "/content",
    // },
    {
      page: "Success Stories",
      url: "/success-stories",
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
      <NavigationMenu.Root className="relative z-40 flex w-full items-center justify-center  [&>div]:min-w-[100%] [&>div]:flex [&>div]:justify-center [&>div]:static ">
        <NavigationMenu.List className="w-full flex max-w-[1200px] list-none bg-white p-1 py-3 px-5 items-center justify-between">
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/"
            >
              <img src={logo.src} className="max-w-[100px]" alt="" />
            </Link>
          </NavigationMenu.Item>
          <div className="flex items-center gap-1 lg:hidden">
            {navLinks.map((navitem, index) => (
              <NavigationMenu.Item
                key={index + 1}
                className={navitem.children ? "relative group" : ""}
              >
                <Link
                  className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] flex items-center gap-1 select-none whitespace-nowrap rounded-[4px] px-3 xl:px-2 text-[15px] font-medium leading-none no-underline outline-none group-hover:text-[#F58A07]"
                  href={navitem.url}
                >
                  {navitem.page}
                  {navitem.children && <ChevronDown />}
                </Link>
                {navitem.children && (
                  // pt-4 bridges the gap so the menu stays open while the mouse moves down
                  <div className="absolute left-0 top-full pt-4 hidden group-hover:block group-focus-within:block">
                    <ul className="min-w-[260px] list-none rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-lg">
                      {navitem.children.map((child) => (
                        <li key={child.url}>
                          <Link
                            href={child.url}
                            className="block whitespace-nowrap rounded-lg px-4 py-3 text-[15px] font-medium text-[#18181B] hover:bg-[#FFF7ED] hover:text-[#F58A07] focus:bg-[#FFF7ED] focus:text-[#F58A07] outline-none transition"
                          >
                            {child.page}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </NavigationMenu.Item>
            ))}
          </div>
          <div className="lg:hidden">
            <HeaderContactButtons />
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <HeaderContactButtons />
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
                {navitem.children && (
                  <ul className="mt-4 ml-3 flex flex-col gap-4 border-l-2 border-[#F58A07] pl-4 list-none">
                    {navitem.children.map((child) => (
                      <li key={child.url}>
                        <Link
                          href={child.url}
                          className="block text-base font-medium text-slate-600 hover:text-[#F58A07] transition"
                        >
                          {child.page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </NavigationMenu.Item>
            ))}
          </div>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
};

export default NavBar;
