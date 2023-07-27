import Link from "next/link";
import React from "react";

const Button = ({ text, link, highlight, type }) => {
  return (
    <button
      type={type ? type : ""}
      className={`w-full min-w-[237px] max-w-fit px-4 py-3 text-center sm:min-w-full  ${
        !highlight ? "bg-white text-[#F58A07]" : "bg-[#F58A07] text-white"
      } font-medium text-base rounded-md`}
    >
      {/* <Link href={link ? link : ""}>{text}</Link> */}
      {link ? <Link href={link}>{text}</Link> : text}
    </button>
  );
};

export default Button;
