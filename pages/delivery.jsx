import React from "react";
import process1 from "@/public/icons/process-icon-1.svg";
import process2 from "@/public/icons/process-icon-2.svg";
import process3 from "@/public/icons/process-icon-3.svg";
import process4 from "@/public/icons/process-icon-4.svg";
import trainingImage from "@/public/images/about-instructor-training.svg";
import offlineImage from "@/public/images/about-offline-trainings.svg";
import sessionsImage from "@/public/images/about-sessions.svg";
import { CTA, CTASecondary } from "@/components/CTA";
import Link from "next/link";
const process = [
  {
    title: "Understanding Needs",
    icon: process1,
    text: "We do not believe in providing run-off the mill solutions. Our experts invest time in understanding the need and the actual outcome that is expected from our solutions. We do this through stake holder calls, meetings, focus-group discussions, etc. ",
  },
  {
    title: "Creating Customized Solutions",
    text: "We create solutions that contextualize concepts and examples to your organization’s requirements. Case studies, roleplays, quizzes, etc. are created to ensure maximum learning. As and when applicable, industry insights and happenings are included as well.",
    icon: process2,
  },
  {
    title: "Delivery",
    text: "We create solutions that contextualize concepts and examples to your organization’s requirements. Case studies, roleplays, quizzes, etc. are created to ensure maximum learning. As and when applicable, industry insights and happenings are included as well.",
    icon: process3,
  },
  {
    title: "Post-Implementation Feedback",
    text: "We take feedback seriously, because we strive to learn and improve continuously.",
    icon: process4,
  },
];

const Delivery = () => {
  return (
    <>
      <section className="min-h-[90vh] flex items-center justify-center px-12 py-6 lg:px-2">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-20 px-2 items-center lg:flex-col">
          <div className="flex flex-col gap-8 max-w-[600px] w-full lg:max-w-none">
            {/* hero content */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[#ED3630] font-medium md:text-sm">
                How We Work
              </h6>
              <h1 className="text-6xl font-semibold tracking-tighter md:text-5xl">
                Our Process for <span className="text-[#F58A07]">Success</span>{" "}
              </h1>
            </div>
            <p className="text-slate-500">
              At Markrich Solutions LLP. we pride ourselves on our streamlined
              and efficient approach to delivering exceptional results. Our
              proven process ensures that every project we undertake is executed
              with precision and professionalism.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-full">
            {process.map((ele, ind) => (
              <div className="flex items-center gap-6 sm:flex-col sm:items-start">
                <div className="bg-[#fee5c852] rounded-full p-4">
                  <img className="max-w-[30px]" src={ele.icon.src} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-md font-medium">{ele.title}</h5>
                  <p className="text-sm text-slate-500">{ele.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-[80vh] flex items-center justify-center px-12 py-6 lg:px-2 lg:py-24">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-12 px-2 items-center lg:flex-col">
          <div
            className={`flex flex-col gap-2 w-full max-w-[600px] lg:max-w-none`}
          >
            <div className="mb-3 shadow-md flex overflow-hidden bg-transparent rounded-2xl">
              <img
                className="w-full object-cover"
                src={offlineImage.src}
                alt=""
              />
            </div>
            <h6 className="text-2xl font-semibold text-[#F58A07]">
              Offline trainings
            </h6>
            <p className="text-slate-500 text-sm">
              Our training experts visit your location to deliver the training.
            </p>
          </div>
          <div
            className={`flex flex-col gap-2 w-full max-w-[600px] lg:max-w-none`}
          >
            <div className="mb-3 shadow-md flex overflow-hidden bg-transparent rounded-2xl">
              <img
                className="w-full object-cover"
                src={trainingImage.src}
                alt=""
              />
            </div>
            <h6 className="text-2xl font-semibold text-[#F58A07]">
              Virtual Instructor Led Training
            </h6>
            <p className="text-slate-500 text-sm">
              Our experts conduct engaging Live- Virtual training sessions.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[80vh] flex items-center justify-center px-12 py-6 lg:px-2">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-6 px-2 items-center lg:flex-col-reverse">
          <div className="flex flex-col gap-8 max-w-[600px]">
            {/* hero content */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[#ED3630] font-medium md:text-sm">
                What you get
              </h6>
              <h3 className="text-4xl font-semibold tracking-tight lg:text-3xl">
                At Markrich Solutions, our{" "}
                <span className="text-[#F58A07]">
                  training sessions include
                </span>
              </h3>
            </div>

            <ul className=" list-disc pl-4 text-slate-800 md:leading-8">
              <li>Interactive Discussions</li>
              <li>Case Studies</li>
              <li>Excel based exercises wherever applicable.</li>
              <li>Pre & Post -Training Assessments</li>
              <li>Short Quizzes</li>
            </ul>
            <hr />
            <button className="text-[#ED3630] font-semibold max-w-fit">
              <Link href={"/contact-us"}>
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </Link>
            </button>
          </div>
          <div>
            <img src={sessionsImage.src} alt="" />
          </div>
        </div>
      </section>
      <CTASecondary />
    </>
  );
};

export default Delivery;
