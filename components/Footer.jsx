import React from "react";
import logo from "@/public/images/logo.svg";
import fbIcon from "@/public/icons/social-fb.svg";
import linkedinIcon from "@/public/icons/social-linkedin.svg";
import twIcon from "@/public/icons/social-tw.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="min-h-[50vh] px-12 py-14 bg-slate-50 flex items-center justify-center md:px-2">
      <div className="container mx-auto max-w-[1200px] flex flex-col justify-between gap-8 ">
        <div className="container mx-auto flex justify-between gap-12 px-2 md:flex-wrap">
          <div className="flex w-full flex-col gap-4 max-w-[320px] md:max-w-none">
            <Link href={"/"}>
              <div className="flex max-w-[100px]">
                <img className="object-contain w-full" src={logo.src} alt="" />
              </div>
            </Link>

            <p className="text-sm text-slate-500">
              Unlock the potential of your workforce with our comprehensive
              training solutions in finance, analytics, and behavioural
              training.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[200px] md:max-w-none">
            <h6 className="text-base font-medium ">Company</h6>
            <ul className="flex flex-col gap-2 text-sm text-slate-500">
              <Link href={"/about-us"}>
                <li>About us</li>
              </Link>
              {/* 
              <li>Terms and conditions</li>
              <li>Privacy policy</li> */}
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[200px] md:max-w-none">
            <h6 className="text-base font-medium">Services</h6>
            <ul className="flex flex-col gap-2 text-sm text-slate-500">
              <Link href={"/training-solutions"}>
                <li>Training solutions</li>
              </Link>
              <Link href={"/delivery"}>
                <li>Offline trainings</li>
              </Link>
              <Link href={"/content"}>
                <li>Content Services</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-[250px] md:max-w-none">
            <h6 className="text-base font-medium">Contact us</h6>
            <ul className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/markrich-solutions-llp"
                target="_blank"
              >
                <img
                  src={linkedinIcon.src}
                  className="w-full object-fit max-w-[40px]"
                  alt=""
                />
              </a>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center text-sm text-slate-500 mx-auto">
          © Copyright 2023, All Rights Reserved by markrichsolutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
