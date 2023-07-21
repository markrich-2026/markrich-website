import React from "react";

export const Card = ({ icon, title, text, align }) => {
  return (
    <div className={`flex flex-col gap-4 w-full ${align ? align : ""}`}>
      <img className="max-w-[36px]" src={icon.src} alt="" />
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="text-slate-500 text-sm">{text}</p>
    </div>
  );
};

export const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-4 w-full bg-[#F3FBFF] p-8 rounded-2xl">
      <img className="max-w-[36px]" src={icon.src} alt="" />
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="text-slate-500 text-base font-medium">{text}</p>
    </div>
  );
};

export const TabsCard = ({ icon, title, text, link }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[331px] px-4 py-6 rounded-2xl shadow-md ">
      <h6 className="text-2xl font-semibold text-[#F58A07]">{title}</h6>
      <p className="text-slate-500 text-base pb-4 font-medium">{text}</p>
      <button className="rounded-full w-fit p-3 bg-[#ED3630] text-white shadow-rose-300 shadow-sm">
        <a href="">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </button>
    </div>
  );
};

export const CaseStudyCard = ({ image, title, link }) => {
  return (
    <>
      <div className="flex gap-4 flex-col w-full mb-2">
        <div className="flex rounded-lg overflow-hidden">
          <img className="w-full object-cover" src={image.src} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-sm font-medium">{title}</h6>
          <button className="w-full max-w-fit">
            <a className="text-[#F58A07]" href={link}>
              View
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
