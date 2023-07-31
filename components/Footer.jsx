import React from "react";
import logo from "@/public/images/logo.svg";
import fbIcon from "@/public/icons/social-fb.svg";
import linkedinIcon from "@/public/icons/social-linkedin.svg";
import twIcon from "@/public/icons/social-tw.svg";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] px-12 py-14 bg-slate-50 flex items-center justify-center md:px-2">
      <div className="container mx-auto max-w-[1200px] flex flex-col justify-between gap-8 ">
        <div className="container mx-auto flex justify-between gap-12 px-2 md:flex-wrap">
          <div className="flex w-full flex-col gap-4 max-w-[320px] md:max-w-none">
            <div className="flex max-w-[100px]">
              <img className="object-contain w-full" src={logo.src} alt="" />
            </div>
            <p className="text-sm text-slate-500">
              Unlock the potential of your workforce with our comprehensive
              training solutions in finance, analytics, and behavioural
              training.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[200px] md:max-w-none">
            <h6 className="text-base font-medium ">Company</h6>
            <ul className="flex flex-col gap-2 text-sm text-slate-500">
              <li>About us</li>
              <li>Terms and conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[200px] md:max-w-none">
            <h6 className="text-base font-medium">Services</h6>
            <ul className="flex flex-col gap-2 text-sm text-slate-500">
              <li>Finance Solutions</li>
              <li>Solutions for financial services domain</li>
              <li>Analytics solutions</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-[250px] md:max-w-none">
            <h6 className="text-base font-medium">Contact us</h6>
            <ul className="flex gap-2">
              <li className="flex">
                <img
                  className="w-full object-fit max-w-[40px]"
                  src={fbIcon.src}
                  alt=""
                />
              </li>
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
              <li>
                <img
                  src={twIcon.src}
                  className="w-full object-fit max-w-[40px]"
                  alt=""
                />
              </li>
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
