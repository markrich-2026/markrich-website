import React, { useState } from "react";
import { NextSeo, FAQPageJsonLd } from "next-seo";
import Link from "next/link";
import SectionHero from "@/components/Section";
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import { LabelList, SectionHeading } from "@/components/TrainingPage";

const PAGE_URL = "https://www.markrich.in/ai-training-in-finance/";
const META_TITLE = "AI Training in Finance for Teams | Markrich Solutions";
const META_DESCRIPTION =
  "AI Training in Finance by Markrich Solutions. Build practical AI skills for reporting, forecasting, Excel, GST reconciliation and responsible use of data.";

const whyAI = [
  ["Faster reporting and analysis", "AI-enabled workflows can help organise financial information, summarise results, and prepare initial report drafts."],
  ["Improved forecasting", "AI-supported analysis can help teams explore trends, compare scenarios, and identify factors that may influence future performance."],
  ["Automation of repetitive tasks", "Suitable processes such as data categorisation, document summarisation, and routine reporting may be streamlined."],
  ["Risk and anomaly monitoring", "AI can help flag unusual patterns for further review, supporting risk management and control processes."],
  ["More informed decisions", "Easier access to insights can help finance professionals spend more time interpreting results and advising stakeholders."],
];

const trainingAreas = [
  ["AI fundamentals for finance professionals", "Understand core AI concepts, common business applications, capabilities, and limitations in a finance context."],
  ["AI-powered reporting and documentation", "Explore how AI can assist with report outlines, commentary, summaries, and the organisation of financial information."],
  ["Financial analysis and forecasting", "Learn how AI-supported tools can help examine trends, compare scenarios, and support forecasting workflows."],
  ["AI with Advanced Excel", "Use AI features and assistants to support formula creation, data cleaning, analysis, and interpretation of spreadsheet information."],
  ["Generative AI tools for finance teams", "Practise writing effective prompts and reviewing outputs from tools such as ChatGPT, Microsoft Copilot, and Google Gemini, subject to organisational approval."],
  ["Workflow automation", "Identify suitable repetitive tasks and understand how automation platforms can support more efficient processes."],
  ["Responsible AI, privacy, and data security", "Learn how to protect confidential financial information, check outputs, understand limitations, and follow company policies."],
];

const steps = [
  {
    title: "Identify finance processes and skill gaps",
    text: "Review tasks such as monthly reporting, reconciliations, budgeting, forecasting, and financial analysis. Identify where teams spend significant time and where additional AI knowledge could be useful.",
  },
  {
    title: "Identify suitable AI tools",
    text: "Assess tools that align with existing systems, security requirements, budgets, and business objectives. Involve IT, information security, compliance, and relevant finance leaders where appropriate.",
  },
  {
    title: "Design role-specific training",
    text: "Adapt learning for accountants, financial analysts, finance managers, and senior leaders. Different roles require different levels of technical knowledge and practical applications.",
  },
  {
    title: "Use hands-on exercises",
    text: "Include activities based on realistic finance scenarios. Use fictional, anonymised, or explicitly approved data rather than exposing confidential company or customer information.",
  },
  {
    title: "Establish responsible-use guidelines",
    text: "Explain which tools are approved, what information may be entered, how outputs should be checked, and when human review or escalation is required.",
  },
  {
    title: "Apply learning to low-risk workflows",
    text: "Begin with appropriate tasks such as drafting non-sensitive summaries or exploring sample datasets. Validate results before expanding use to more important workflows.",
  },
  {
    title: "Measure outcomes and continue learning",
    text: "Track indicators such as time spent on selected tasks, report preparation efficiency, output quality, and employee confidence. Update training as tools and business needs change.",
  },
];

const tools = [
  ["ChatGPT", "Drafting, summarising, brainstorming, and explaining concepts using non-confidential or approved information."],
  ["Microsoft Copilot", "Assistance across supported Microsoft 365 workflows, depending on licences and configuration."],
  ["Google Gemini", "Research assistance, summarisation, and productivity support within approved workflows."],
  ["Microsoft Excel", "Spreadsheet analysis, formula support, data organisation, and available AI-assisted features."],
  ["Power BI", "Business intelligence, dashboarding, and analysis of financial and operational information."],
  ["Power Automate", "Automating suitable repetitive tasks and connecting supported business applications."],
];

const taxUses = [
  ["Tax research and summarisation", "AI tools can help organise tax-related information, summarise circulars or guidance supplied by the user, and prepare initial research notes for professional review."],
  ["Tax classification support", "AI may assist in organising transactions and highlighting possible tax categories or issues for review. Final classification and tax treatment should be confirmed by a qualified professional."],
  ["Return preparation support", "AI-enabled workflows can help organise source documents, extract relevant details, and prepare working papers or draft explanations for review."],
  ["Compliance monitoring", "AI can support reminders, document tracking, and the identification of missing information across recurring tax-compliance activities."],
  ["Anomaly detection", "AI and analytics tools can flag unusual transaction patterns, inconsistent values, or possible errors that may require further investigation."],
];

const gstUses = [
  ["Invoice matching", "Compare purchase-register entries with corresponding invoice details in GSTR-2B using fields such as GSTIN, invoice number, invoice date, taxable value, and tax amounts."],
  ["Mismatch identification", "Highlight differences in invoice values, tax amounts, GSTINs, invoice dates, or document numbers for investigation."],
  ["Missing and duplicate invoices", "Flag purchase invoices that do not appear in the relevant records, as well as possible duplicate entries."],
  ["Input Tax Credit (ITC) review support", "Organise potential ITC mismatches and exceptions so that the finance team can investigate them before taking action. AI should not independently decide ITC eligibility."],
  ["Vendor follow-up", "Generate exception lists and draft vendor communication requesting missing invoices, corrected details, or clarification."],
  ["Reconciliation summaries", "Prepare dashboards or exception reports showing matched records, unmatched entries, value differences, and items pending review."],
];

const audiences = [
  ["Accountants and accounting teams", "Looking to streamline suitable documentation and reporting tasks."],
  ["Financial analysts", "Who work with data, trends, budgets, and forecasts."],
  ["Finance managers", "Responsible for reporting, planning, controls, and team performance."],
  ["CFOs and senior leaders", "Who want to understand AI opportunities, limitations, and governance considerations."],
  ["Accounts, audit, and compliance professionals", "Exploring responsible ways to use AI-supported analysis."],
  ["Banking and financial services teams", "Seeking to build relevant AI awareness and practical capabilities."],
];

const reasons = [
  ["Customised learning", "Training can be aligned with the organisation's requirements, employee roles, and existing skill levels."],
  ["Practical approach", "Workshops and exercises can help participants understand how AI may fit into everyday finance workflows."],
  ["Connected skill development", "AI learning can complement existing capabilities in Excel, analytics, reporting, and business decision-making."],
  ["Future-ready teams", "Build employee confidence to assess and use evolving AI tools thoughtfully."],
];

const faqs = [
  {
    question: "What is AI Training in Finance?",
    answer:
      "It is a learning programme that helps finance professionals understand AI and apply suitable AI-enabled tools to tasks such as reporting, analysis, forecasting, and workflow support.",
  },
  {
    question: "Why should finance professionals learn AI?",
    answer:
      "AI knowledge can help finance teams assess opportunities to improve efficiency and analysis while understanding risks, limitations, and the need for human review.",
  },
  {
    question: "Can accountants benefit from AI training?",
    answer:
      "Yes. Accountants can explore appropriate uses of AI for documentation, summaries, spreadsheet support, and routine workflows, while retaining responsibility for accuracy and compliance.",
  },
  {
    question: "Which AI tools are useful for finance teams?",
    answer:
      "Depending on organisational approval and requirements, teams may explore tools such as ChatGPT, Microsoft Copilot, Google Gemini, Excel, Power BI, and Power Automate.",
  },
  {
    question: "Will AI replace finance professionals?",
    answer:
      "AI is more appropriately viewed as a tool that can support selected tasks. Professional judgement, financial understanding, communication, accountability, and oversight remain important.",
  },
  {
    question: "Is AI training suitable for non-technical finance employees?",
    answer:
      "Yes. Training can begin with foundational concepts and practical, role-based examples without requiring participants to have a programming background.",
  },
  {
    question: "How can an organisation implement AI training?",
    answer:
      "Start by identifying relevant workflows and skill gaps, selecting approved tools, designing role-specific learning, practising with safe sample data, and measuring results.",
  },
  {
    question: "Can corporate AI training be customised?",
    answer:
      "A programme can be planned around the organisation's roles, learning objectives, technology environment, and data-security requirements.",
  },
];

const AITrainingInFinance = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
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
      <FAQPageJsonLd
        mainEntity={faqs.map((faq) => ({
          questionName: faq.question,
          acceptedAnswerText: faq.answer,
        }))}
      />

      <SectionHero
        background
        metaTitle="AI Training in Finance"
        subText="Artificial Intelligence is changing the way finance teams manage information, prepare reports, analyse performance, forecast outcomes, and support business decisions. From automating repetitive tasks to identifying patterns in large datasets, AI is creating new opportunities for finance professionals to work more efficiently and strategically."
      >
        <span className="text-[#F58A07]">AI Training in Finance:</span>{" "}
        Empower Your Finance Team with Practical AI Skills
      </SectionHero>

      {/* Intro */}
      <section className="px-12 pb-16 lg:px-4">
        <div className="container mx-auto max-w-[900px] flex flex-col gap-6 text-[#18181B] leading-relaxed">
          <p>
            However, adopting AI tools is only one part of the process. Finance
            professionals also need to understand how to use these tools
            correctly, evaluate their outputs, protect sensitive information,
            and apply AI responsibly.
          </p>
          <p className="text-2xl font-semibold tracking-tight md:text-xl">
            This is where{" "}
            <span className="text-[#F58A07]">AI Training in Finance</span>{" "}
            becomes important.
          </p>
          <p>
            Markrich Solutions can support organisations in building practical
            AI capabilities within their finance teams through role-relevant
            corporate learning designed around business needs, existing skills,
            and appropriate use cases.
          </p>
        </div>
      </section>

      {/* Why AI in finance */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why it matters">
              Why Is AI Important in{" "}
              <span className="text-[#F58A07]">Finance?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Finance departments work with large volumes of data, recurring
              reports, deadlines, and decisions that can affect the entire
              organisation. AI can help teams process information faster and
              identify insights, while human expertise remains essential for
              judgement, validation, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {whyAI.map(([title, text], index) => (
              <div
                key={title}
                className="flex flex-col gap-4 bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] md:p-6"
              >
                <span className="h-10 w-10 rounded-full bg-[#F58A07] text-white font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex gap-16 items-start lg:flex-col lg:gap-10">
          <div className="flex flex-col gap-4 max-w-[480px] lg:max-w-none">
            <SectionHeading eyebrow="Training areas">
              What Does AI Training in Finance{" "}
              <span className="text-[#F58A07]">Include?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              An effective corporate programme should connect AI concepts with
              everyday finance responsibilities. Depending on the
              organisation&apos;s needs and the tools it uses, training may
              cover the following areas.
            </p>
          </div>
          <div className="bg-[#FFF7ED] rounded-2xl p-8 w-full md:p-6">
            <LabelList items={trainingAreas} />
          </div>
        </div>
      </section>

      {/* Implementation steps */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Step by step">
              How to Implement AI Training in{" "}
              <span className="text-[#F58A07]">Your Finance Department</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Introducing AI training is most effective when it is connected to
              real business requirements. Organisations can use the following
              steps to plan a structured learning programme.
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
                <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div>
            <Button text={"Enquire About AI Training Finance"} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* Tools table */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Tools">
              AI Tools That Can Support{" "}
              <span className="text-[#F58A07]">Finance Teams</span>
            </SectionHeading>
            <p className="text-[#18181B]">
              The most appropriate tools depend on an organisation&apos;s
              technology environment, data policies, and approved-use
              guidelines. These examples illustrate common categories and should
              not be treated as a recommendation to upload sensitive financial
              data.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[#F58A07] text-white">
                <tr>
                  <th className="p-4 font-semibold">Tool</th>
                  <th className="p-4 font-semibold">Potential finance application</th>
                </tr>
              </thead>
              <tbody>
                {tools.map(([tool, use], index) => (
                  <tr key={tool} className={index % 2 ? "bg-[#FFF7ED]" : "bg-white"}>
                    <td className="p-4 font-semibold text-[#18181B]">{tool}</td>
                    <td className="p-4 text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Taxation and GST */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Taxation">
              Taxation and AI:{" "}
              <span className="text-[#F58A07]">Building Smarter Tax Workflows</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              AI should be used as a support tool in tax workflows, not as a
              substitute for qualified tax professionals. Tax rules,
              notifications, and filing requirements can change, so
              AI-generated information and calculations must be checked against
              current official guidance and reviewed by an authorised
              professional.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
            <div className="flex flex-col gap-5 bg-[#FFF7ED] rounded-2xl p-8 md:p-6">
              <h3 className="text-2xl font-semibold">AI in tax workflows</h3>
              <LabelList items={taxUses} />
            </div>

            <div className="flex flex-col gap-5 bg-[#F3FBFF] rounded-2xl p-8 md:p-6">
              <h3 className="text-2xl font-semibold">AI for GST Reconciliation</h3>
              <p className="text-slate-600">
                GST reconciliation is an important area where AI and automation
                can support finance and accounts teams. Businesses often need to
                compare purchase records maintained in their accounting systems
                with supplier invoice information reflected in GST records,
                including GSTR-2B. AI-assisted tools can help process large
                volumes of invoice data, identify differences, and organise
                exceptions for review.
              </p>
              <LabelList items={gstUses} />
              <p className="text-slate-600 text-sm">
                A practical AI training exercise can use a sample purchase
                register and sample GSTR-2B data. Participants can learn how to
                clean and standardise records, match invoices, classify
                exceptions, prepare a reconciliation summary, and document the
                checks completed. Training should use fictional, anonymised, or
                appropriately approved data.
              </p>
            </div>
          </div>

          <p className="text-[#18181B]">
            <span className="font-semibold">Important:</span> AI-generated GST
            reconciliation results must be validated by the finance or tax team.
            The final treatment of input tax credit, return reporting, and
            compliance decisions should follow current GST law, applicable rules
            and notifications, and professional review.
          </p>
        </div>
      </section>

      {/* Who benefits */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <SectionHeading eyebrow="Who it is for">
            Who Can Benefit from{" "}
            <span className="text-[#F58A07]">AI Training in Finance?</span>
          </SectionHeading>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {audiences.map(([title, text]) => (
              <div
                key={title}
                className="flex flex-col gap-3 bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]"
              >
                <h3 className="text-lg font-semibold text-[#F58A07]">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Markrich */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why choose us">
              Why Choose Markrich Solutions for{" "}
              <span className="text-[#F58A07]">Corporate AI Training in Finance?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              AI training should be relevant to the organisation&apos;s people,
              processes, and objectives. Markrich Solutions focuses on corporate
              learning that connects professional skills with practical
              business applications.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {reasons.map(([title, text]) => (
              <div key={title} className="flex flex-col gap-3 bg-[#F3FBFF] rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-[#18181B]">
            Training topics and tool coverage should be finalised after a
            discussion of your organisation&apos;s requirements, approved
            technology, and internal data policies.
          </p>
        </div>
      </section>

      <GoogleReviews />

      {/* FAQs */}
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-3xl font-semibold text-black mb-10 text-center">
            Frequently Asked <span className="text-[#F58A07]">Questions</span>
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] border border-[#E5E7EB] overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex justify-between items-center gap-4 p-6 text-left"
                >
                  <h3
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeIndex === index ? "text-[#F58A07]" : "text-[#18181B]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-[#F58A07]">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6 text-[#52525B] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-6xl rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#F1F9FF] p-14 flex flex-col gap-6 items-center text-center md:p-8 md:items-start md:text-left">
          <h2 className="text-4xl font-semibold tracking-tight md:text-3xl">
            Build AI Capabilities Across{" "}
            <span className="text-[#F58A07]">Your Finance Team</span>
          </h2>
          <p className="max-w-[800px] text-[#18181B]">
            AI is becoming an important part of the modern business
            environment, and finance teams have an opportunity to use it to
            support analysis, reporting, and more efficient workflows. The key
            is to combine practical skills with responsible use, strong data
            practices, and human judgement.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Markrich Solutions can help your organisation explore corporate AI
            training aligned with its finance and business requirements.
            Connect with the team to discuss a suitable learning programme for
            your employees.
          </p>
          <div className="flex gap-4 md:flex-col">
            <Button text={"Enquire About Corporate AI Training in Finance"} highlight link={"/contact-us"} />
            <Link href="/training-solutions" className="self-center text-[#ED3630] font-semibold">
              View all training solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AITrainingInFinance;
