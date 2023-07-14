import React from "react";

export const Card = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[270px]">
      <img className="max-w-[36px]" src={icon.src} alt="" />
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="text-slate-500 text-sm">{text}</p>
    </div>
  );
};

export const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[371px] bg-[#F3FBFF] p-8 rounded-2xl">
      <img className="max-w-[36px]" src={icon.src} alt="" />
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="text-slate-500 text-base font-medium">{text}</p>
    </div>
  );
};
