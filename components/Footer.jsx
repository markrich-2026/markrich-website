import React from "react";
import logo from "@/public/images/logo.webp";
import fbIcon from "@/public/icons/social-fb.svg";
import linkedinIcon from "@/public/icons/social-linkedin.svg";
import instagramIcon from "@/public/icons/social-instagram.svg";
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
                <img
                  className="object-contain w-full h-auto"
                  src={logo.src}
                  width={100}
                  height={Math.round((100 * logo.height) / logo.width)}
                  loading="lazy"
                  decoding="async"
                  alt="Markrich Solutions home"
                />
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
              <li>
                <Link href={"/about-us"} className="hover:text-[#F58A07] transition">About us</Link>
              </li>
              {/* 
              <li>Terms and conditions</li>
              <li>Privacy policy</li> */}
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[200px] md:max-w-none">
            <h6 className="text-base font-medium">Services</h6>
            <ul className="flex flex-col gap-2 text-sm text-slate-500">
              <li>
                <Link href={"/training-solutions"} className="hover:text-[#F58A07] transition">Training solutions</Link>
              </li>
              <li>
                <Link href={"/delivery"} className="hover:text-[#F58A07] transition">Offline trainings</Link>
              </li>
              <li>
                <Link href={"/content"} className="hover:text-[#F58A07] transition">Content Services</Link>
              </li>
              <li>
                <Link href={"/ai-training-company-india"} className="hover:text-[#F58A07] transition">AI Training Company in India</Link>
              </li>
              <li>
                <Link href={"/data-analytics-training"} className="hover:text-[#F58A07] transition">Data Analytics Training</Link>
              </li>
              <li>
                <Link href={"/corporate-ai-training-india"} className="hover:text-[#F58A07] transition">Corporate AI Training India</Link>
              </li>
              <li>
                <Link href={"/ai-training-in-finance"} className="hover:text-[#F58A07] transition">AI Training in Finance</Link>
              </li>
              <li>
                <Link href={"/ai-training-in-hr"} className="hover:text-[#F58A07] transition">AI Training in HR</Link>
              </li>
              <li>
                <Link href={"/generative-ai-training-india"} className="hover:text-[#F58A07] transition">Generative AI Training India</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-[250px] md:max-w-none">
            <h6 className="text-base font-medium">Contact us</h6>
            <ul className="flex gap-2">
              <li>
<a
                href="https://www.linkedin.com/company/markrich-solutions-llp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Markrich Solutions on LinkedIn"
              >
                <img
                  src={linkedinIcon.src}
                  className="w-full object-fit max-w-[40px]"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt=""
                />
              </a>
              </li>
              <li>
<a
                href="https://www.instagram.com/markrich.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Markrich Solutions on Instagram"
              >
                <img
                  src={instagramIcon.src}
                  className="w-full object-fit max-w-[40px]"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt=""
                />
              </a>
              </li>
              <li>
<a
                href="https://www.facebook.com/people/Markrich-Solutions-LLP/61557010641903/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Markrich Solutions on Facebook"
              >
                <img
                  src={fbIcon.src}
                  className="w-full object-fit max-w-[40px]"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt=""
                />
              </a>
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
