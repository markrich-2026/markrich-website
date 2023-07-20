import React from "react";
import logo from "@/public/images/markrich-logo.png";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <NavigationMenu.Root className="z-[1] flex w-full items-center justify-center  [&>div]:min-w-[100%] [&>div]:flex [&>div]:justify-center [&>div]:static ">
      <NavigationMenu.List className="w-full flex max-w-[1200px] list-none bg-white p-1 items-center justify-between ">
        <NavigationMenu.Item>
          <Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/"
          >
            <img src={logo.src} className="max-w-[120px]" alt="" />
          </Link>
        </NavigationMenu.Item>
        <div className="flex gap-5">
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
              href="/"
            >
              Home
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
              href="/about-us"
            >
              About us
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
              href="/training-solutions"
            >
              Training solutions
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
              href="/delivery"
            >
              Delivery
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
              href="/content"
            >
              Content
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              className="text-violet11 hover:text-[#F58A07] transition duration-500 focus:text-[#F58A07] block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
              href="/contact"
            >
              Contact
            </Link>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavBar;
