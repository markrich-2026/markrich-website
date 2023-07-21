import { CTA } from "@/components/CTA";
import { Card } from "@/components/Card";
import SectionHero from "@/components/Section";
import trainSol1 from "@/public/icons/training-sol-1.svg";
import trainSol2 from "@/public/icons/training-sol-2.svg";
import trainSol3 from "@/public/icons/training-sol-3.svg";
import trainSol4 from "@/public/icons/training-sol-4.svg";
import trainSol5 from "@/public/icons/training-sol-5.svg";
import trainSol6 from "@/public/icons/training-sol-6.svg";
import trainSol7 from "@/public/icons/training-sol-7.svg";
import React from "react";

const trainingSolution = [
  {
    title: "Finance Solutions",
    icon: trainSol1,
    text: "Unlock your financial expertise with comprehensive training in finance fundamentals, cost management, financial modeling etc.",
  },
  {
    title: "Financial Services domain",
    icon: trainSol2,
    text: "Stay ahead in the financial services sector with specialized training in AML/KYC, derivatives, credit risk modeling, and compliance frameworks.",
  },
  {
    title: "Banking Solutions",
    icon: trainSol3,
    text: "Gain comprehensive insights into banking and financial services through training in credit management, risk management, investment banking, and payments systems.",
  },
  {
    title: "Analytics Solutions",
    icon: trainSol4,
    text: "Develop analytical prowess with training in Excel, business analytics, data visualization, and machine learning for strategic insights and informed decision-making.",
  },
  {
    title: "Leadership Development Solutions",
    icon: trainSol5,
    text: "Enhance leadership skills through specialized programs for first-time managers, team building, negotiation, and sales training, fostering effective leadership.",
  },
  {
    title: "Other Training Solutions",
    icon: trainSol6,
    text: "Expand your knowledge in project management, agile methodologies, and scrum practices for successful project delivery in the fast-paced business environment.",
  },
  {
    title: "Content Solutions",
    icon: trainSol7,
    text: "Access a wealth of resources including case studies, question banks, and training content for practical learning and real-world application.",
  },
];

const TrainingSolutions = () => {
  return (
    <>
      <SectionHero
        background
        subText={
          "Discover a diverse range of training solutions designed to enhance your knowledge and skills in the realms of finance, banking, analytics, and leadership development. Our comprehensive programs cater to individuals and organizations seeking to gain a competitive edge in today's dynamic business landscape."
        }
        metaTitle={"Training Solutions"}
      >
        Comprehensive{" "}
        <span className="text-[#F58A07]">Training Solutions </span>
        for Finance, Banking, Analytics, and Leadership Development
      </SectionHero>
      <section className="flex flex-col items-center justify-center px-12 py-24">
        <div className="container max-w-7xl flex flex-col gap-20 items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-4xl tracking-tight font-semibold">
              Our Diverse{" "}
              <span className="text-[#F58A07]">Training Solutions</span>
            </h2>
            <p className="max-w-2xl text-center">
              Enhance your skills and knowledge in finance, banking, analytics,
              and leadership development with our comprehensive training
              solutions.
            </p>
          </div>
          <div className="  w-full  grid grid-cols-2 grid-rows-3 justify-items-center justify-center gap-20 ">
            {trainingSolution.map((ele, ind) => (
              <Card title={ele.title} text={ele.text} icon={ele.icon} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
};

export default TrainingSolutions;
