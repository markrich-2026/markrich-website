import React from "react";
import { CTA } from "@/components/CTA";
import SectionHero from "@/components/Section";
import ExpandableCard from "@/components/ExpandableCard";
import { useState } from "react";
import trainSol1 from "@/public/icons/training-sol-1.svg";
import trainSol2 from "@/public/icons/training-sol-2.svg";
import trainSol3 from "@/public/icons/training-sol-3.svg";
import trainSol4 from "@/public/icons/training-sol-4.svg";
import trainSol5 from "@/public/icons/training-sol-5.svg";
import trainSol6 from "@/public/icons/training-sol-6.svg";
import trainSol7 from "@/public/icons/training-sol-7.svg";

const trainingSolution = [
  {
    title: "Finance Solutions",
    icon: trainSol1,
    text: "Comprehensive finance programs designed to build strong financial understanding, decision-making, and advanced domain expertise.",
    subServices: [
      "Finance for Non-Finance",
      "Working Capital Management",
      "Cost Optimization & Management",
      "Business Acumen",
      "Financial Statement Analysis",
      "Financial Modeling",
      "Corporate Finance",
      "Accounting & Taxation",
      "IFRS",
      "IndAS",
      "AML / KYC",
      "Investment Banking",
      "Derivatives",
      "Accounting for Derivatives",
      "Bond Mathematics",
    ],
  },
  {
    title: "AI Solutions",
    icon: trainSol2,
    text: "AI-driven training programs focused on Generative AI, automation, and machine learning for real-world business applications.",
    subServices: [
      "Generative AI Basics",
      "Generative AI for Business Productivity",
      "Generative AI for Sales",
      "Generative AI for Marketing",
      "Generative AI for HR",
      "Generative AI for Finance",
      "Agentic AI",
      "Machine Learning",
    ],
  },
  {
    title: "Analytics Solutions",
    icon: trainSol3,
    text: "Analytics training to enable data-driven decision making through modern tools, techniques, and industry-focused analytics.",
    subServices: [
      "Basic MS Excel",
      "Advanced MS Excel",
      "Business Analytics",
      "Data Analytics for Data Driven Decision Making",
      "Data Visualization",
      "Analytics for HR Professionals",
      "Analytics for Finance Professionals",
      "Customer Analytics",
      "Power BI",
      "Python",
      "PySpark Coding",
    ],
  },
  {
    title: "Business Excellence Solutions",
    icon: trainSol4,
    text: "Leadership and business excellence programs aimed at driving organizational effectiveness and strategic growth.",
    subServices: [
      "Project Management",
      "Agile",
      "Risk Management",
      "ESG",
      "Leadership Development",
      "Strategic Thinking Workshops",
      "Communication Skills",
      "Executive Presence",
      "Executive Coaching for Leaders",
    ],
  },
];

const TrainingSolutions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <SectionHero
        background
        subText="Discover a diverse range of training solutions designed to enhance your knowledge and skills in the realms of finance, banking, analytics, and leadership development. Our comprehensive programs cater to individuals and organizations seeking to gain a competitive edge in today's dynamic business landscape."
      >
        Comprehensive{" "}
        <span className="text-[#F58A07]">Training Solutions </span>
        for Finance, AI, Analytics, and Business Excellence
      </SectionHero>

      <section className="px-6 py-20 lg:px-4">
        <div className="container max-w-5xl mx-auto flex flex-col gap-14">
          {/* Heading */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Our Diverse{" "}
              <span className="text-[#f59607]">Training Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-700">
              Enhance your skills and knowledge in finance, ai, analytics,
              and business excellence with our comprehensive training
              solutions.
            </p>
          </div>

          {/* Accordion list */}
          <div className="flex flex-col gap-4">
            {trainingSolution.map((ele, index) => (
              <ExpandableCard
                key={index}
                data={ele}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default TrainingSolutions;
