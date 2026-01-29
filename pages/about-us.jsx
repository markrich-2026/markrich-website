import React from "react";
import aboutImage from "@/public/images/about-image.webp";
import aboutImageTwo from "@/public/images/about-image-2.webp";
import Image from "next/image";
import trainersIcon from "@/public/icons/trainers-icon.svg";
import approachIcon from "@/public/icons/approach-icon.svg";
import interactiveIcon from "@/public/icons/interactive-icon.svg";
import { FeatureCard } from "@/components/Card";
import { CTA } from "@/components/CTA";
import Section from "@/components/Section";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

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
  const [showMore, setShowMore] = useState(false);

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

      <section className="min-h-screen flex items-center px-12 py-6 lg:px-4 sm:py-24">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-16 items-center lg:flex-col-reverse lg:gap-5">
          <div className="flex flex-col gap-8 max-w-[600px] lg:max-w-none">
            {/* about us content */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[#ED3630] font-medium md:text-sm">
                Who we are
              </h6>
              <h2 className="text-5xl font-semibold tracking-tighter md:text-4xl">
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
          <div className="lg:w-full flex">
            {/* Hero image */}
            <img src={aboutImage.src} className="w-full" />
          </div>
        </div>
      </section>

      <section className="flex items-center px-12 py-15 lg:px-4 sm:py-24 bg-white">
        <div className="container mx-auto max-w-[1200px] flex gap-16 items-center lg:flex-col lg:gap-10">
          {/* Founder Card */}
          <div className="w-[520px] lg:w-full  bg-gradient-to-br from-[#FFF7ED] to-[#F1F9FF] rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col items-start gap-6">
              {/* Image */}
              <div className="relative">
                <img
                  src="/images/mark.png"
                  alt="Founder"
                  className="h-28 w-28 rounded-full border-4 border-[#F58A07] object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[#18181B]">
                  Mark Menezes
                </h3>
                <p className="text-sm text-[#18181B]">
                  Founder, Markrich Solutions LLP
                </p>
                <p className="text-sm text-gray-600">
                  Entrepreneur | Technology Driven | Training Visionary
                </p>
                <p className="text-sm text-gray-500">Thane, Maharashtra</p>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/markmenezes1"
                className="text-sm text-[#0A66C2] font-medium flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Story Content */}
          <div className="flex flex-col gap-6 max-w-[650px]">
            <h6 className="text-[#ED3630] font-medium md:text-sm">Our Story</h6>

            <h2 className="text-5xl font-semibold tracking-tighter md:text-4xl">
              The Vision of Our <span className="text-[#F58A07]">Founder</span>
            </h2>

            <p className="text-[#18181B] leading-relaxed">
              Mark Menezes is the Founder of Markrich Solutions LLP, enabling
              organizations to become future-ready through Finance, Generative
              AI, Analytics, and Business Excellence training. With over a
              decade of experience in understanding stakeholder needs and
              crafting the right learning interventions, Mark brings a
              consultative, solution-first approach that helps teams turn
              concepts into on-the-job capability.
            </p>

            <p className="text-[#18181B] leading-relaxed">
              Before founding Markrich, Mark led corporate training solution
              sales and consultative engagements at organizations such as Dun &
              Bradstreet India and VitalSmarts (Crucial Learning), working
              closely with HR, L&D, OD, and business leaders to diagnose skill
              gaps and deploy customized programs that drive measurable
              outcomes. His work spans diverse sectors including BFSI,
              Manufacturing, FMCG, Chemicals, IT, and Services.
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="text-[#F58A07] font-medium w-fit hover:underline"
            >
              {showMore ? "" : "Read more"}
            </button>

            {showMore && (
              <p className="text-[#18181B] leading-relaxed">
                At Markrich, Mark champions learning experiences that are
                immersive, engaging, and action-oriented—from Finance for
                Non-Finance, Financial Markets, Risk and Treasury topics, to
                GenAI for Leaders, Prompt Engineering, and GenAI for Business
                Functions, as well as Power BI, Data Visualization, Business
                Analytics, and capability building under Business Excellence.
                Grounded in values of honesty, integrity, and commitment, he is
                known for partnering deeply with clients to ensure learning
                sticks and creates real business impact.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-12 py-20 lg:px-4 sm:py-24">
        <div className="container mx-auto max-w-[1200px] flex gap-16 items-center lg:flex-col lg:gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-6 max-w-[650px] order-1 lg:order-2">
            <h6 className="text-[#ED3630] font-medium md:text-sm">
              Leadership
            </h6>

            <h2 className="text-5xl font-semibold tracking-tighter md:text-4xl">
              Operational<span className="text-[#F58A07]"> Leadership</span>
            </h2>

            <p className="text-[#18181B] leading-relaxed">
              Richard Menezes is a Partner at Markrich Solutions LLP and brings
              40+ years of manufacturing experience, built through decades of
              leading end-to-end plant and installation operations across large,
              complex environments.
            </p>

            <p className="text-[#18181B] leading-relaxed">
              At Markrich Solutions, Richard anchors the firm’s operations and
              finance, ensuring smooth execution across programs—right from
              vendor coordination and logistics to internal controls and
              financial discipline. He also serves as a strategic mentor to the
              team, offering practical guidance, process thinking, and a
              long-term perspective that strengthens how Markrich delivers
              consistent quality across every client engagement.
            </p>
          </div>

          {/* Partner Card */}
          <div className="w-[520px] lg:w-full bg-gradient-to-br from-[#FFF7ED] to-[#F1F9FF] rounded-3xl p-8 shadow-sm order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <img
                src="/images/richard.png"
                alt="Richard Menezes"
                className="h-30 w-28 rounded-full border-4 border-[#F58A07] object-cover"
              />

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[#18181B]">
                  Richard Menezes
                </h3>
                <p className="text-sm text-[#18181B]">
                  Partner, Markrich Solutions LLP
                </p>
                <p className="text-sm text-gray-600">
                  Entrepreneur | Technology Driven | Training Visionary
                </p>
                <p className="text-sm text-gray-500">Thane, Maharashtra</p>
              </div>
               {/* LinkedIn */}
                <a
                  href="#"
                  className="text-sm text-[#0A66C2] font-medium flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-lg" />
                  LinkedIn
                </a>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] flex items-center px-12 py-6 lg:px-4 sm:py-14 sm:min-h-fit">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-16 items-center lg:flex-col">
          <div className="flex w-full">
            {/* Hero image */}
            <img src={aboutImageTwo.src} className="w-full" />
          </div>
          <div className="flex flex-col gap-8 max-w-[600px] lg:max-w-none">
            {/* about us content */}
            <div className="flex flex-col gap-4">
              {/* <h6 className="text-[#ED3630] font-medium">Who we are</h6> */}
              <h3 className="text-4xl font-semibold tracking-tight er">
                Our Mission
              </h3>
            </div>
            <p className="text-[#18181B]">
              To ensure customer satisfaction in all our client engagements and
              to gain our clients’ trust through our work.
            </p>
            <hr />
            <div className="flex flex-col gap-4">
              {/* <h6 className="text-[#ED3630] font-medium">Who we are</h6> */}
              <h3 className="text-4xl font-semibold tracking-tighter">
                Our Vision
              </h3>
            </div>
            <p className="text-[#18181B]">
              To be the partner of choice for all corporate training needs
            </p>
          </div>
        </div>
      </section>
      {/* <section className="min-h-screen flex items-center justify-center px-12 py-6 lg:px-4 sm:py-14">
        <div className="container max-w-7xl flex flex-col items-center justify-center gap-16 mt-24">
          <div className="flex flex-col gap-4 items-center text-center sm:text-left">
            <h6 className="text-[#ED3630] font-medium w-full">
              Why Choose Us?
            </h6>
            <h3 className="text-4xl font-semibold tracking-tighter sm:text-3xl">
              Unparalleled Solutions for Your Needs
            </h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,550px))] lg:grid-cols-[repeat(auto-fill,minmax(300px,100%))] w-full justify-center gap-6">
            {chooseUsData.map((ele, ind) => (
              <FeatureCard
                key={ind}
                title={ele.title}
                text={ele.content}
                icon={ele.icon}
              />
            ))}
          </div>
        </div>
      </section> */}
      <CTA />
    </>
  );
};

export default About;
