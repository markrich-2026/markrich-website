import Image from "next/image";

import heroImg from "@/public/images/hero-image.svg";
import trainingIcon from "@/public/icons/training-icon.svg";
import analyticsIcon from "@/public/icons/analytics-icon.svg";
import behaviouralIcon from "@/public/icons/behavioural-icon.svg";
import trainersIcon from "@/public/icons/trainers-icon.svg";
import approachIcon from "@/public/icons/approach-icon.svg";
import interactiveIcon from "@/public/icons/interactive-icon.svg";
import { Card, FeatureCard } from "@/components/Card";
import { TabsComponent } from "@/components/Tabs";

const trainingAreas = [
  {
    icon: trainingIcon,
    title: "Finance Training",
    text: "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: analyticsIcon,
    title: "Analytics Training",
    text: "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: behaviouralIcon,
    title: "Behavioural Training",
    text: "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
  },
];
const features = [
  {
    icon: trainersIcon,
    title: "Expert Trainers",
    text: "Benefit from industry professionals with extensive experience in their domains. ",
  },
  {
    icon: approachIcon,
    title: "Customized Approach",
    text: "Our customized training programs are tailored to your specific needs, ensuring maximum relevance and effectiveness.",
  },
  {
    icon: interactiveIcon,
    title: "Interactive Learning",
    text: "Experience interactive and experiential training sessions that foster active participation and knowledge retention.",
  },
];
const titles = [
  {
    title: "Finance Solutions",
    value: "tab1",
  },
  {
    title: "Solutions for financial services domain",
    value: "tab2",
  },
  {
    title: "Analytics solutions",
    value: "tab3",
  },
  {
    title: "Leadership development solutions",
    value: "tab4",
  },
];

const tabData = [
  {
    tab: "tab1",
    data: [
      {
        title: "Finance for Non-Finance",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
      {
        title: "Finance for Sales Managers & Executives",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
      {
        title: "Personal Finance sessions",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
      {
        title: "Strategic Cost Management",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
      {
        title: "Working Capital Management",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
    ],
  },
  {
    tab: "tab2",
    data: [
      {
        title: "Finance for Non-Finance",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
      {
        title: "Finance for Sales Managers & Executives",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
      {
        title: "Personal Finance sessions",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
    ],
  },
  {
    tab: "tab3",
    data: [
      {
        title: "Finance for Non-Finance",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
    ],
  },
  {
    tab: "tab4",
    data: [
      {
        title: "Finance for Non-Finance",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
      {
        title: "Finance for Sales Managers & Executives",
        link: "",
        text: "We enjoy working with discerning clients: individuals who value quality, service, integrity, and aesthetics.",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* hero section */}
      <main className={`flex min-h-[90vh] px-12 py-6`}>
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-5 px-2 items-center">
          <div className="flex flex-col gap-8 max-w-[600px]">
            {/* hero content */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[#ED3630] font-medium">
                Finance, Analytics, and Behavioural Training
              </h6>
              <h1 className="text-6xl font-semibold tracking-tighter">
                Welcome to <span className="text-[#F58A07]">Markrich</span>{" "}
                Solutions
              </h1>
            </div>
            <p className="text-[#18181B]">
              Equip your employees with essential skills to thrive in today's
              competitive environment. Enhance financial acumen, leverage
              data-driven decision-making, and foster a positive work culture
              with xyzSolutions.
            </p>
            <hr />

            <button className="text-[#ED3630] font-semibold max-w-fit">
              <a href={""}>
                <div className="flex items-center gap-1">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </a>
            </button>
          </div>
          <div>
            {/* Hero image */}
            <Image src={heroImg} />
          </div>
        </div>
      </main>
      {/* areas of work */}
      <section className="flex min-h-[80vh] px-12 py-6 pb-24 items-center justify-start">
        <div className="container mx-auto max-w-[1200px] flex flex-col justify-start gap-[4rem] px-2 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h6 className="text-[#ED3630] font-medium">Training areas</h6>
            <h2 className="text-5xl font-semibold tracking-tighter text-center">
              Our Core
              <span className="text-[#F58A07]"> training</span> areas
            </h2>
          </div>
          <div className="flex gap-10 w-full items-center justify-center">
            {trainingAreas.map((ele, ind) => (
              <Card
                key={ind}
                title={ele.title}
                icon={ele.icon}
                text={ele.text}
              />
            ))}
          </div>
        </div>
      </section>
      {/* features section why choose us */}
      <section className="flex min-h-screen bg-[url('/images/features-bg.svg')] bg-cover bg-no-repeat px-12 py-6">
        <div className="container mx-auto max-w-[1200px] flex flex-col justify-center gap-[5rem] px-2 ">
          <div className="flex flex-col gap-8 max-w-[650px]">
            {/* hero content */}
            <div className="flex flex-col gap-4 ">
              <h6 className="text-[#ED3630] font-medium">Why Choose Us?</h6>
              <h2 className="text-5xl font-semibold tracking-tight leading-tight">
                Unlock your team's potential with our{" "}
                <span className="text-[#F58A07]"> training expertise </span>
              </h2>
            </div>
            <p className="text-[#18181B]">
              Equip your employees with essential skills to thrive in today's
              competitive environment. Enhance financial acumen, leverage
              data-driven decision-making, and foster a positive work culture
              with xyzSolutions.
            </p>
          </div>
          <div className="flex gap-10 w-full ">
            {features.map((ele, ind) => (
              <FeatureCard
                key={ind}
                title={ele.title}
                icon={ele.icon}
                text={ele.text}
              />
            ))}
          </div>
        </div>
      </section>
      {/* tabs view training areas */}
      <section className="flex min-h-[100vh] py-20 px-12">
        <div className="container mx-auto max-w-[1200px] flex flex-col justify-center gap-[4rem] px-2 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h6 className="text-[#ED3630] font-medium">Training areas</h6>
            <h2 className="text-5xl font-semibold tracking-tighter text-center leading-11 max-w-[700px]">
              A collection of all our{" "}
              <span className="text-[#F58A07]"> Training Solutions</span>
            </h2>
          </div>
          <TabsComponent titles={titles} tabData={tabData} />
        </div>
      </section>
      {/* contact us section */}
    </>
  );
}
