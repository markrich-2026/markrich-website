import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CaseStudyCard, TabsCard } from "./Card";
import AccordionComponent from "./Accordian";
import thumbnailPlaceholder from "@/public/images/case-study-thumbnail.svg";
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
      className="flex gap-3 justify-between w-full max-w-fit mx-auto"
      aria-label=""
    >
      {titles.map((titles, value) => (
        <Tabs.Trigger
          key={value * 3}
          className="w-full py-3 px-5 text-sm max-w-fit flex items-center justify-center  select-none hover:bg-[#FFF2E2] data-[state=active]:bg-[#FFF2E2]   data-[state=active]:text-[#CF4D16]  data-[state=active]:shadow-current   data-[state=active]:focus:bg-[#FFF2E2] outline-none cursor-pointer transition duration-500 rounded-lg"
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(370px,370px))] gap-3">
          {ele.data.map((card, index) => (
            <TabsCard
              key={index * 5}
              title={card.title}
              text={card.text}
              link={card?.link}
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
      className="flex w-full gap-3 max-w-3xl self-center"
      aria-label=""
    >
      {titles.map((titles, value) => (
        <Tabs.Trigger
          key={value * 3}
          className="w-full py-3 text-sm flex items-center justify-center  select-none hover:bg-[#FFF2E2] data-[state=active]:bg-[#FFF2E2]   data-[state=active]:text-[#CF4D16]  data-[state=active]:shadow-current   data-[state=active]:focus:bg-[#FFF2E2] outline-none cursor-pointer transition duration-500 rounded-lg"
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
        <div className="">
          {ele?.title === "question-bank" && (
            <div className="">
              <AccordionComponent data={ele.data} />
            </div>
          )}
          {ele?.title === "case-study" && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-9 justify-items-center">
              {caseStudyData.map((caseStudy, index) => (
                <CaseStudyCard
                  image={caseStudy.image}
                  title={caseStudy.title}
                  link={caseStudy.link}
                />
              ))}
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
