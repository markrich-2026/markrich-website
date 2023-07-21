import React from "react";
import contentDevImage from "@/public/images/content-development-image.svg";
import checkIcon from "@/public/icons/check-icon.svg";

// temporary content component
const ContentDevelopmentSection = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center">
      <div className="container mx-auto max-w-[1200px] flex justify-between gap-12 px-2 items-center">
        <div className="flex">
          <img
            className="w-full object-cover"
            src={contentDevImage.src}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8 max-w-[550px] w-full">
          {/* hero content */}
          <div className="flex flex-col gap-4">
            <h6 className="text-[#ED3630] font-medium">Benefits</h6>
            <h3 className="text-3xl font-semibold tracking-tight">
              Captivate Your Audience with our{" "}
              <span className="text-[#F58A07]">content development</span>{" "}
              services
            </h3>
          </div>

          <ul className=" pl-1 text-slate-500 text-sm flex flex-col gap-3">
            <li className="flex gap-3">
              <span className="mt-1 text-[#F58A07]">
                <img src={checkIcon.src} alt="" />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              elementum, nisi a
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-[#F58A07]">
                <img src={checkIcon.src} alt="" />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              elementum, nisi a
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-[#F58A07]">
                <img src={checkIcon.src} alt="" />
              </span>
              Duis hendrerit velit in auctor tempor.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-[#F58A07]">
                <img src={checkIcon.src} alt="" />
              </span>
              Quisque sed porta ipsum, nec pellentesque risus.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-[#F58A07]">
                <img src={checkIcon.src} alt="" />
              </span>
              Short Quizzes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContentDevelopmentSection;
