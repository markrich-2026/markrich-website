import Link from "next/link";
import React from "react";

const Button = ({ text, link, highlight }) => {
  return (
    <button
      className={`w-full min-w-[237px] max-w-fit px-4 py-3 text-center  ${
        !highlight ? "bg-white text-[#F58A07]" : "bg-[#F58A07] text-white"
      } font-medium text-base rounded-md`}
    >
      <Link href={link ? link : "/"}>{text}</Link>
    </button>
  );
};

export default Button;
