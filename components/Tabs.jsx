import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CaseStudyCard, TabsCard } from "./Card";
import AccordionComponent from "./Accordian";
import thumbnailPlaceholder from "@/public/images/case-study-thumbnail.webp";
import ContentDevelopmentSection from "./ContentDevelopmentSection";

const caseStudyData = [
  {
    title: "Optimizing Customer Engagement: A Case Study on Company XYZ",
    link: "/",
    image: thumbnailPlaceholder,
  },
  {
    title: "Unraveling Supply Chain Challenges: A Case Study of Company ABC",
    link: "/",
    image: thumbnailPlaceholder,
  },
  {
    title: "Data-Driven Decision Making: A Case Study in Retail",
    link: "/",
    image: thumbnailPlaceholder,
  },
  {
    title: "From Struggle to Success: A Case Study on Business Turnaround",
    link: "/",
    image: thumbnailPlaceholder,
  },
  {
    title: "Optimizing Customer Engagement: A Case Study on Company XYZ",
    link: "/",
    image: thumbnailPlaceholder,
  },
  {
    title: "From Struggle to Success: A Case Study on Business Turnaround",
    link: "/",
    image: thumbnailPlaceholder,
  },
];

export const TabsComponent = ({ titles, tabData }) => (
  <Tabs.Root className="flex flex-col w-full  " defaultValue="tab1">
    <Tabs.List
      className="flex gap-3 justify-between w-full max-w-fit mx-auto  lg:overflow-scroll lg:max-w-none tabs__ py-1"
      aria-label=""
    >
      {titles.map((titles, value) => (
        <Tabs.Trigger
          key={value * 3}
          className="w-full py-3 px-5 text-sm max-w-fit min-w-fit flex items-center justify-center  select-none hover:bg-[#FFF2E2] data-[state=active]:bg-[#FFF2E2]   data-[state=active]:text-[#CF4D16]  data-[state=active]:shadow-current   data-[state=active]:focus:bg-[#FFF2E2] outline-none cursor-pointer transition duration-500 rounded-lg"
          value={titles.value}
        >
          {titles.title}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabData.map((ele, ind) => (
      <Tabs.Content
        key={ind * 2}
        className="grow bg-white rounded-b-md outline-none pt-20 py-5 items-center justify-center"
        value={ele.tab}
      >
        <div className="gap-3 grid grid-cols-[repeat(auto-fill,minmax(300px,550px))] lg:grid-cols-[repeat(auto-fill,minmax(300px,100%))] w-full justify-center items-center ">
          {ele.data.map((card, index) => (
            <TabsCard
              key={index * 5}
              title={card.title}
              text={card.text}
              link={card?.link}
              value={index + 1}
            />
          ))}
        </div>
      </Tabs.Content>
    ))}
  </Tabs.Root>
);

export const TabsComponentSecondary = ({ titles, tabData }) => (
  <Tabs.Root className="flex flex-col w-full " defaultValue="tab1">
    <Tabs.List
      className="flex w-full gap-3 max-w-3xl self-center mx-auto   lg:overflow-scroll lg:max-w-none tabs__ py-1 justify-center lg:justify-start"
      aria-label=""
    >
      {titles.map((titles, value) => (
        <Tabs.Trigger
          key={value * 3}
          className="w-full max-w-fit min-w-fit py-3 px-4 text-sm flex items-center justify-center  select-none hover:bg-[#FFF2E2] data-[state=active]:bg-[#FFF2E2]   data-[state=active]:text-[#CF4D16]  data-[state=active]:shadow-current   data-[state=active]:focus:bg-[#FFF2E2] outline-none cursor-pointer transition duration-500 rounded-lg"
          value={titles.value}
        >
          {titles.title}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabData.map((ele, ind) => (
      <Tabs.Content
        key={ind * 2}
        className="grow bg-white rounded-b-md outline-none  pt-20 py-5"
        value={ele.tab}
      >
        <div className="mx-auto">
          {ele?.title === "question-bank" && (
            <div className="max-w-3xl mx-auto">
              {/* <AccordionComponent data={ele.data} /> */}
              <div className="flex flex-col gap-4 justify-center items-center text-center">
                <h6 className="text-[#ED3630] font-medium">Question bank</h6>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Create interesting question banks with us, to stimulate your
                  employees' knowledge. Have weekly quizzes at work, make it
                  engaging.
                </h3>
              </div>
            </div>
          )}
          {ele?.title === "case-study" && (
            // <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-9 justify-items-center">
            //   {caseStudyData.map((caseStudy, index) => (
            //     <CaseStudyCard
            //       image={caseStudy.image}
            //       title={caseStudy.title}
            //       link={caseStudy.link}
            //     />
            //   ))}
            // </div>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-4 justify-center items-center text-center">
                <h6 className="text-[#ED3630] font-medium">Case study</h6>
                <h3 className="text-2xl font-semibold tracking-tight">
                  We're happy to provide case studies, that can be used to
                  enhance the learning experience for your teams.
                </h3>
              </div>
            </div>
          )}
          {ele?.title === "content-development" && (
            <ContentDevelopmentSection />
          )}
        </div>
      </Tabs.Content>
    ))}
  </Tabs.Root>
);
