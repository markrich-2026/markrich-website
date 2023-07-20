import React from "react";
import aboutImage from "@/public/images/about-image.svg";
import aboutImageTwo from "@/public/images/about-image-2.svg";
import Image from "next/image";
import trainersIcon from "@/public/icons/trainers-icon.svg";
import approachIcon from "@/public/icons/approach-icon.svg";
import interactiveIcon from "@/public/icons/interactive-icon.svg";
import { FeatureCard } from "@/components/Card";
import CTA from "@/components/CTA";
import Section from "@/components/Section";

const chooseUsData = [
  {
    title: "Expert Trainers",
    icon: trainersIcon,
    content:
      "Our trainers are industry professionals with extensive experience in their respective domains. They bring a wealth of practical insights to make the training sessions engaging and impactful.",
  },
  {
    title: "Customized Approach",
    icon: approachIcon,
    content:
      "We understand that each organization has unique requirements. That's why we offer customized training programs tailored to your specific needs, ensuring maximum relevance and effectiveness.",
  },
  {
    title: "Interactive Learning",
    icon: interactiveIcon,
    content:
      "Our training sessions are interactive and experiential, fostering active participation and knowledge retention. We believe that learning should be engaging and enjoyable.",
  },
  {
    title: "Practical Application",
    icon: interactiveIcon,
    content:
      "Through case studies, hands-on exercises, we bridge the gap between theory and practice, enabling your employees to implement their learnings in real-world scenarios.",
  },
];

const About = () => {
  return (
    <>
      <Section
        background
        metaTitle={"About us"}
        subText={
          "At Markrich Solutions , we understand the ever-evolving landscape of the business world and the need for continuous learning and development. Our goal is to equip your employees with the essential skills and knowledge to thrive in today's competitive environment."
        }
      >
        <span className="text-[#F58A07]">Markrich</span> Solutions
      </Section>

      <section className="min-h-screen flex items-center">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-16 px-2 items-center">
          <div className="flex flex-col gap-8 max-w-[600px]">
            {/* about us content */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[#ED3630] font-medium">Who we are</h6>
              <h2 className="text-5xl font-semibold tracking-tighter">
                Welcome to <span className="text-[#F58A07]">Markrich</span>{" "}
                Solutions
              </h2>
            </div>
            <p className="text-[#18181B]">
              Unlock the potential of your workforce with our comprehensive
              training solutions in finance, analytics, and behavioural
              training. At Markrich Solutions , we understand the ever-evolving
              landscape of the business world and the need for continuous
              learning and development.
            </p>
            <hr />

            <button className="text-[#ED3630] font-semibold max-w-fit">
              <a href={""}>
                <div className="flex items-center gap-1">
                  Contact Us{" "}
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
                </div>
              </a>
            </button>
          </div>
          <div>
            {/* Hero image */}
            <Image src={aboutImage} />
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-16 px-2 items-center">
          <div>
            {/* Hero image */}
            <Image src={aboutImageTwo} />
          </div>
          <div className="flex flex-col gap-8 max-w-[600px]">
            {/* about us content */}
            <div className="flex flex-col gap-4">
              {/* <h6 className="text-[#ED3630] font-medium">Who we are</h6> */}
              <h3 className="text-4xl font-semibold tracking-tighter">
                Our Mission
              </h3>
            </div>
            <p className="text-[#18181B]">
              Lorem ipsum amet consectetur adipiscing do eiusmod tempor
              incididunt ut labore. Lorem ipsum amet consectetur adipiscing do
              eiusmod tempor incididunt ut labore.
            </p>
            <hr />
            <div className="flex flex-col gap-4">
              {/* <h6 className="text-[#ED3630] font-medium">Who we are</h6> */}
              <h3 className="text-4xl font-semibold tracking-tighter">
                Our Vision
              </h3>
            </div>
            <p className="text-[#18181B]">
              Lorem ipsum amet consectetur adipiscing do eiusmod tempor
              incididunt ut labore. Lorem ipsum amet consectetur adipiscing do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <div className="container max-w-7xl flex flex-col items-center justify-center gap-16 mt-24">
          <div className="flex flex-col gap-4 items-center">
            <h6 className="text-[#ED3630] font-medium">Why Choose Us?</h6>
            <h3 className="text-4xl font-semibold tracking-tighter">
              Unparalleled Solutions for Your Needs
            </h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,600px))] w-full justify-between gap-12">
            {chooseUsData.map((ele, ind) => (
              <FeatureCard
                title={ele.title}
                text={ele.content}
                icon={ele.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
};

export default About;
