import React from "react";

// Background is boolean, and children item expects only a title tag
// metaTag sets the heading level of the small title above the h1 (defaults to h6)
const SectionHero = ({
  background,
  metaTitle,
  metaTag: MetaTag = "h6",
  subText,
  children,
  height,
}) => {
  return (
    <section
      className={`${
        background ? "bg-[url('/images/section-background.webp')]" : ""
      } min-h-[${
        height ? height : "80vh"
      }] bg-no-repeat px-12 py-6 bg-[length:200%_100%] bg-center flex items-start justify-center lg:px-2 lg:min-h-[70vh]`}
    >
      <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-6 mt-16 h-full">
        <div className="flex flex-col gap-4 items-center justify-center">
          <MetaTag className="text-[#ED3630] font-medium md:text-sm">
            {metaTitle}
          </MetaTag>
          <h1 className="text-[52px] leading-tight max-w-6xl font-semibold tracking-tighter text-center md:text-3xl">
            {children}
          </h1>
        </div>
        <p className="text-[#18181B] max-w-4xl text-center">{subText}</p>
      </div>
    </section>
  );
};

export default SectionHero;
