import JsonLd from "@/components/JsonLd";
import { dataAnalyticsSchema } from "@/lib/schema";
import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import SectionHero from "@/components/Section";
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import { LabelList, SectionHeading } from "@/components/TrainingPage";

const PAGE_URL = "https://www.markrich.in/data-analytics-training/";
const META_TITLE = "Data Analytics Training Programs | Markrich Solutions";
const META_DESCRIPTION =
  "Build data analytics skills with Markrich Solutions through practical training in data interpretation, reporting, and insights for decisions, start now.";

const departments = [
  ["Marketing", "Analyse campaign performance, measure return on investment (ROI), and understand customer behaviour."],
  ["Human Resources", "Identify employee trends, analyse attrition patterns, and support workforce planning."],
  ["Finance", "Improve financial reporting, budgeting, forecasting, and performance analysis."],
  ["Operations", "Monitor productivity, identify inefficiencies, and optimise business processes."],
];

const benefits = [
  {
    title: "Break Down Data Silos Across Departments",
    paragraphs: [
      "When employees understand how to work with data, different departments can make better use of business information.",
    ],
    list: departments,
    outro:
      "Data Analytics Training equips teams with the knowledge to turn departmental data into insights that support wider organisational goals.",
  },
  {
    title: "Improve Decision-Making and Business Performance",
    paragraphs: [
      "Waiting for technical teams to generate every report can slow down business decisions. With the right analytics skills, managers and employees can independently explore data, identify emerging trends, and recognise potential risks.",
      "Training in tools such as Microsoft Excel, Power BI, Tableau, and Python enables professionals to analyse information more effectively and communicate findings clearly.",
    ],
    outro:
      "The result is a more confident, efficient, and informed approach to business decision-making.",
  },
  {
    title: "Build a Culture of Data-Driven Innovation",
    paragraphs: [
      "Successful organisations continuously evaluate their strategies and look for ways to improve. Data analytics helps teams move beyond assumptions by testing ideas, measuring results, and identifying opportunities for improvement.",
      "With the right training, employees can use data to evaluate business strategies, understand changing market conditions, and support continuous innovation.",
    ],
    outro:
      "Developing these capabilities across the workforce helps organisations make evidence-based decisions and respond more effectively to business challenges.",
  },
];

const trainingAreas = [
  ["Basic and Advanced Excel", "Learn data management, spreadsheet analysis, formulas, reporting, and advanced analytical techniques."],
  ["Business Analytics", "Understand business performance, interpret trends, and use data to support strategic decisions."],
  ["Data Visualisation with Power BI and Tableau", "Transform complex datasets into interactive dashboards, reports, and meaningful visual insights."],
  ["Python for Data Analytics", "Develop skills in data manipulation, analysis, and automation using Python."],
];

const steps = [
  {
    title: "Define Your Business Objectives",
    text: "Identify the decisions you want data to support, such as improving sales performance, reducing costs, or understanding customer behaviour.",
  },
  {
    title: "Identify and Collect Relevant Data",
    text: "List the data sources you already have, including spreadsheets, CRM systems, and financial records, and gather the information that supports your objectives.",
  },
  {
    title: "Clean and Organise Your Data",
    text: "Remove duplicates, correct errors, and standardise formats so your analysis is based on accurate and consistent information.",
  },
  {
    title: "Choose the Right Tools",
    text: "Select tools that match the needs and skill level of your team, such as Excel for everyday analysis, Power BI or Tableau for dashboards, and Python for advanced analytics.",
  },
  {
    title: "Train Your Team",
    text: "Provide practical Data Analytics Training so employees can confidently analyse data, build reports, and interpret results within their own roles.",
  },
  {
    title: "Analyse Data and Visualise Insights",
    text: "Identify trends and patterns, then present findings through clear dashboards and reports that decision-makers can easily understand.",
  },
  {
    title: "Act on Insights and Measure Results",
    text: "Apply insights to business decisions, track outcomes against your goals, and refine your approach over time.",
  },
];

const DataAnalyticsTraining = () => {
  return (
    <>
      <JsonLd data={dataAnalyticsSchema} />
      <NextSeo
        title={META_TITLE}
        description={META_DESCRIPTION}
        canonical={PAGE_URL}
        openGraph={{
          url: PAGE_URL,
          title: META_TITLE,
          description: META_DESCRIPTION,
          siteName: "Markrichsolutions",
        }}
      />

      <SectionHero
        background
        metaTitle="Data Analytics Training"
        subText="Businesses today are investing heavily in business intelligence tools, automated dashboards, and advanced data management systems. However, having access to data does not automatically lead to better business decisions. Without the right skills to interpret and analyse information, even the most advanced technology can fall short of its potential."
      >
        <span className="text-[#F58A07]">Data Analytics Training:</span>{" "}
        Empower Your Team to Make Data-Driven Decisions
      </SectionHero>

      {/* Intro */}
      <section className="px-12 pb-16 lg:px-4">
        <div className="container mx-auto max-w-[900px] flex flex-col gap-6 text-[#18181B] leading-relaxed">
          <p className="text-2xl font-semibold tracking-tight md:text-xl">
            This is where{" "}
            <span className="text-[#F58A07]">Data Analytics Training</span>{" "}
            makes a difference.
          </p>
          <p>
            Data is only as valuable as the people who understand it.
            Organisations need employees who can interpret complex datasets,
            identify meaningful patterns, and transform insights into
            actionable business strategies.
          </p>
          <p>
            At Markrich Solutions, we believe that developing data analytics
            skills across your workforce is essential for improving business
            performance and achieving sustainable growth.
          </p>
          <div>
            <Button text={"Discuss your requirements"} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why it matters">
              Why Is Data Analytics Training Important for{" "}
              <span className="text-[#F58A07]">Businesses?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Collecting data is no longer enough to stay competitive.
              Businesses must know how to use that data effectively to
              understand customers, improve operations, manage risks, and
              identify growth opportunities.
            </p>
            <p className="text-[#18181B] leading-relaxed">
              Professional Data Analytics Training helps employees develop the
              practical skills needed to make informed decisions. By improving
              data literacy across departments, organisations can reduce
              reliance on guesswork and build a stronger data-driven culture.
            </p>
            <p className="text-[#18181B] font-medium">
              Here are three key benefits of investing in data analytics
              skills.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-4 bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] md:p-6"
              >
                <span className="h-10 w-10 rounded-full bg-[#F58A07] text-white font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                {benefit.paragraphs.map((text) => (
                  <p key={text} className="text-slate-600 leading-relaxed">
                    {text}
                  </p>
                ))}
                {benefit.list && <LabelList items={benefit.list} />}
                <p className="text-slate-600 leading-relaxed">{benefit.outro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex gap-16 items-start lg:flex-col lg:gap-10">
          <div className="flex flex-col gap-4 max-w-[520px] lg:max-w-none">
            <SectionHeading eyebrow="Training areas">
              What Does Data Analytics Training{" "}
              <span className="text-[#F58A07]">Include?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Effective Data Analytics Training goes beyond understanding
              numbers. It focuses on developing practical skills that employees
              can apply directly to their roles.
            </p>
            <p className="text-[#18181B] leading-relaxed">
              At Markrich Solutions, our customised analytics training
              programmes are designed to help professionals build essential
              technical and analytical capabilities.
            </p>
          </div>

          <div className="flex flex-col gap-5 bg-[#FFF7ED] rounded-2xl p-8 w-full md:p-6">
            <h3 className="text-2xl font-semibold">Our training areas include:</h3>
            <LabelList items={trainingAreas} />
            <p className="text-slate-600 leading-relaxed">
              These programmes combine practical learning with real-world
              business applications, helping employees develop the confidence
              to work with data and generate actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation steps */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Step by step">
              How to Implement Data Analytics Skills Across{" "}
              <span className="text-[#F58A07]">Your Organisation</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Introducing data analytics works best when it follows a clear
              process. Here is a practical step-by-step approach that any
              organisation can follow.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]"
              >
                <span className="h-10 w-10 rounded-full bg-[#F58A07] text-white font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[#18181B]">
            Following these steps helps businesses move from simply collecting
            data to using it with confidence, and the right training ensures
            your team can sustain the process.
          </p>
        </div>
      </section>

      <GoogleReviews />

      {/* Closing CTA */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-6xl rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#F1F9FF] p-14 flex flex-col gap-6 items-center text-center md:p-8 md:items-start md:text-left">
          <h2 className="text-4xl font-semibold tracking-tight md:text-3xl">
            Turn Data Analytics Skills into{" "}
            <span className="text-[#F58A07]">
              Business Growth with Markrich Solutions
            </span>
          </h2>
          <p className="max-w-[800px] text-[#18181B]">
            Technology alone cannot drive digital transformation. Businesses
            also need people who can use data effectively to solve problems,
            improve performance, and identify new opportunities.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            At Markrich Solutions, we provide customised corporate training
            programmes that help organisations bridge skill gaps and strengthen
            their data analytics capabilities.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Our approach focuses on practical learning, relevant business
            applications, and measurable workplace impact. Whether your team
            needs to improve its Excel skills, develop expertise in data
            visualisation, or explore advanced analytics using Python, our
            programmes can be tailored to your organisation&apos;s objectives.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Investing in Data Analytics Training helps your workforce turn
            complex information into meaningful insights, make informed
            decisions, and contribute to long-term business success.
          </p>
          <p className="max-w-[800px] text-xl font-semibold text-[#18181B]">
            Because business growth is not just about having data, it is about
            knowing what to do with it.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Connect with Markrich Solutions to explore customised Data
            Analytics Training programmes for your organisation.
          </p>
          <div className="flex gap-4 md:flex-col">
            <Button text={"Contact Markrich Solutions"} highlight link={"/contact-us"} />
            <Link
              href="/training-solutions"
              className="self-center text-[#ED3630] font-semibold"
            >
              View all training solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataAnalyticsTraining;
