import Link from "next/link";
import React from "react";

const Button = ({ text, link }) => {
  return (
    <button className="w-full min-w-[237px] max-w-fit px-4 py-3 text-center bg-white text-slate-800 font-medium text-base rounded-md">
      <Link href={link ? link : "/"}>{text}</Link>
    </button>
  );
};

export default Button;
