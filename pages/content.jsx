import { CTASecondary } from "@/components/CTA";
import SectionHero from "@/components/Section";
import { TabsComponentSecondary } from "@/components/Tabs";
import React from "react";

const titles = [
  {
    title: "Question Bank",
    value: "tab1",
  },
  {
    title: "Case Study",
    value: "tab2",
  },
  {
    title: "Content Development",
    value: "tab3",
  },
];

const tabData = [
  {
    tab: "tab1",
    title: "question-bank",
    data: [
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore. Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
      },
      {
        question: "Can other info be added to an invoice?",
        answer:
          "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore. Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
      },
      {
        question: "How does billing work?",
        answer:
          "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore. Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
      },
      {
        question: "How do I change my account email?",
        answer:
          "Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore. Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt ut labore.",
      },
    ],
  },
  {
    tab: "tab2",
    title: "case-study",
    data: [
      {
        title: "Finance for Non-Finance",
        link: "",
        text: "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics.",
      },
      {
        title: "Finance for Sales Managers & Executives",
        link: "",
        text: "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics.",
      },
      {
        title: "Personal Finance sessions",
        link: "",
        text: "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics.",
      },
    ],
  },
  {
    tab: "tab3",
    title: "content-development",
    data: [
      {
        title: "Finance for Non-Finance",
        link: "",
        text: "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics.",
      },
    ],
  },
];

const Content = () => {
  return (
    <>
      <SectionHero
        background
        metaTitle={"Empowering Growth"}
        subText={
          "Ignite your journey towards success with our comprehensive range of educational resources, empowering individuals and organizations to thrive in a rapidly evolving world."
        }
      >
        Unlocking Potential through{" "}
        <span className="text-[#F58A07]">Knowledge</span> and{" "}
        <span className="text-[#F58A07]">Innovation</span>
      </SectionHero>
      <section className="min-h-[80vh] flex items-center justify-center px-12 py-6 md:px-2">
        <div className="container mx-auto max-w-[1200px] flex justify-between px-2 items-center">
          <TabsComponentSecondary titles={titles} tabData={tabData} />
        </div>
      </section>
      <CTASecondary />
    </>
  );
};

export default Content;
