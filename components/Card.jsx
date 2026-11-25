import React from "react";
import Link from "next/link";

// link is optional: when set, the title and a "Learn more" link point to that page
export const Card = ({ icon, title, text, align, link }) => {
  return (
    <div className={`flex flex-col gap-4 w-full ${align ? align : ""}`}>
      <img className="max-w-[36px]" src={icon.src} alt="" width={36} height={36} loading="lazy" decoding="async" />
      <h6 className="text-xl font-semibold">
        {link ? (
          <Link href={link} className="hover:text-[#F58A07] transition">
            {title}
          </Link>
        ) : (
          title
        )}
      </h6>
      <p className="text-slate-500 text-sm">{text}</p>
      {link && (
        <Link
          href={link}
          className="text-[#ED3630] font-semibold text-sm flex items-center gap-1 w-fit"
          aria-label={`Learn more about ${title} training`}
        >
          Learn More{" "}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      )}
    </div>
  );
};

export const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-4 w-full bg-[#F3FBFF] p-8 rounded-2xl md:py-8 md:px-2">
      <img className="max-w-[36px]" src={icon.src} alt="" width={36} height={36} loading="lazy" decoding="async" />
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="text-slate-500 text-base font-medium">{text}</p>
    </div>
  );
};

export const TabsCard = ({ icon, title, text, link, value }) => {
  return (
    <div className="flex flex-col gap-4 w-full min-w-fit max-w-fit px-4 my-0 rounded-2xl">
      {/* <h6 className="text-xl font-semibold text-[#F58A07]">{}</h6> */}
      <div className="flex gap-2 items-center justify-center">
        <div className="flex items-center justify-center py-2 text-[#F58A07]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <p className="text-slate-500 text-base font-medium">{title}</p>
      </div>
      {/* 
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
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </button>
       */}
    </div>
  );
};

export const CaseStudyCard = ({ image, title, link }) => {
  return (
    <>
      <div className="flex gap-4 flex-col w-full mb-2">
        <div className="flex rounded-lg overflow-hidden">
          <img className="w-full object-cover" src={image.src} alt="" loading="lazy" decoding="async" />
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
