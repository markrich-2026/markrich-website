import JsonLd from "@/components/JsonLd";
import { aiTrainingSchema } from "@/lib/schema";
import React, { useState } from "react";
import { NextSeo, FAQPageJsonLd } from "next-seo";
import Link from "next/link";
import SectionHero from "@/components/Section";
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import { LabelList, SectionHeading } from "@/components/TrainingPage";

const PAGE_URL = "https://www.markrich.in/ai-training-company-india/";
const META_TITLE = "Top AI Training Company in India | Markrich Solutions";
const META_DESCRIPTION =
  "Choose Markrich Solutions, the top AI training company in India, for AI tools, use cases, workplace applications, and practical learning, join us today.";

const trainingAreas = [
  {
    title: "Finance Training",
    intro:
      "Finance training helps professionals develop a stronger understanding of financial concepts, business performance and decision-making. Programmes can be relevant to finance teams as well as non-finance professionals who need to interpret financial information in their roles.",
    listLabel: "Our finance training areas include:",
    items: [
      ["Finance for Non-Finance", "Build an understanding of financial terminology, statements and business performance."],
      ["Corporate Finance", "Explore financial concepts relevant to organisational and business decisions."],
      ["Financial Modelling", "Develop skills in structuring and working with financial models."],
      ["Financial Statement Analysis", "Understand financial statements and the information they provide."],
      ["Working Capital Management", "Explore the management of working capital and its role in business operations."],
      ["Cost Optimisation and Management", "Build awareness of cost structures and cost-related decisions."],
      ["Additional specialist areas", "Accounting and taxation, IFRS, Ind AS, AML/KYC, investment banking, derivatives and bond mathematics."],
    ],
    outro:
      "The appropriate programme depends on the participants’ existing knowledge, responsibilities and learning objectives.",
  },
  {
    title: "AI Training",
    intro:
      "AI training helps professionals understand artificial intelligence and explore how AI-enabled tools and workflows may support relevant workplace activities. For corporate teams, the focus should be on practical applications, appropriate use and the ability to assess AI-generated outputs rather than simply learning terminology.",
    listLabel: "Markrich’s AI training portfolio includes:",
    items: [
      ["Generative AI Basics", "Develop a foundational understanding of generative AI and its potential workplace applications."],
      ["Generative AI for Business Productivity", "Explore ways generative AI may assist with suitable everyday business tasks."],
      ["Generative AI for Sales", "Examine potential applications of generative AI in sales-related work."],
      ["Generative AI for Marketing", "Explore relevant applications in marketing activities and content-related workflows."],
      ["Generative AI for HR", "Consider appropriate uses of generative AI in human resources, with attention to privacy, fairness and human judgement."],
      ["Generative AI for Finance", "Explore potential applications in finance-related workflows while maintaining confidentiality and verification."],
      ["Agentic AI", "Understand AI agents and the role of human oversight in workflows involving more autonomous systems."],
      ["Machine Learning", "Explore the fundamentals and business relevance of machine learning."],
    ],
    outro:
      "The most suitable AI programme depends on the audience, their existing familiarity with AI, the business tasks they want to explore and the organisation’s information-security requirements.",
  },
  {
    title: "Analytics Training",
    intro:
      "Analytics training helps employees interpret information, work with data and develop a more structured approach to business decisions. Depending on the programme, learning may focus on spreadsheet skills, visualisation, business analytics or more specialised analytical techniques.",
    listLabel: "Our analytics training areas include:",
    items: [
      ["Basic and Advanced MS Excel", "Develop spreadsheet skills for organising, analysing and presenting information."],
      ["Business Analytics", "Understand how business questions can be translated into structured analysis."],
      ["Data Analytics for Data-Driven Decision-Making", "Explore how data can inform business discussions and decisions."],
      ["Data Visualisation", "Present information in formats that make patterns and findings easier to interpret."],
      ["Power BI", "Explore business intelligence and dashboard-related capabilities."],
      ["Python and PySpark", "Consider programming-based approaches to data analysis and processing, subject to programme scope."],
      ["Functional analytics", "Explore analytics applications for HR professionals, finance professionals and customer analytics."],
    ],
    outro:
      "The right learning path depends on participants’ current skills, the data they work with and the level of technical depth required.",
  },
  {
    title: "Business Excellence Training",
    intro:
      "Business Excellence programmes focus on professional capabilities that support effective collaboration, leadership, project execution and organisational performance.",
    listLabel: "The portfolio includes:",
    items: [
      ["Leadership Development", "Strengthen leadership capabilities relevant to managing teams and responsibilities."],
      ["Project Management", "Build an understanding of project planning, coordination and execution."],
      ["Agile", "Explore agile principles and their relevance to collaborative ways of working."],
      ["Risk Management", "Develop awareness of risk identification and management approaches."],
      ["Strategic Thinking Workshops", "Encourage structured thinking about business priorities and decisions."],
      ["Communication Skills", "Strengthen workplace communication and professional interactions."],
      ["Executive Presence", "Develop communication and presentation capabilities relevant to professional settings."],
      ["Executive Coaching for Leaders", "Explore leadership development through coaching, subject to the agreed engagement scope."],
      ["ESG", "Build awareness of environmental, social and governance considerations."],
    ],
    outro:
      "These programmes can support organisations seeking to develop leadership, communication and business-management capabilities alongside technical training.",
  },
];

const aiApplicationAreas = [
  ["Everyday business productivity", "Using AI-assisted approaches to support suitable drafting, summarisation and information-organisation tasks."],
  ["Finance-related work", "Exploring appropriate uses of AI for working with financial information, while checking calculations, sources and outputs."],
  ["Human resources", "Understanding potential applications in HR workflows while maintaining candidate privacy, fairness and human decision-making."],
  ["Sales and marketing", "Exploring content-related and other suitable workflow applications."],
  ["Data and analytics", "Understanding the relationship between AI, analytical thinking and data-informed decisions."],
  ["AI agents", "Learning about agent-based approaches and the importance of controls when systems are permitted to perform multiple steps."],
];

const responsibleUse = [
  ["Data confidentiality", "Avoiding the input of sensitive or confidential information into tools that have not been approved for that purpose."],
  ["Output verification", "Checking factual claims, calculations, sources and assumptions."],
  ["Human oversight", "Keeping appropriate people responsible for decisions that affect employees, customers, finances or business operations."],
  ["Bias awareness", "Recognising that AI-assisted recommendations may reflect errors or biases and require careful evaluation."],
  ["Organisational policies", "Following the organisation’s approved tools, access controls and data-handling practices."],
];

const processSteps = [
  {
    title: "Understand the learning requirement",
    text: "The process begins with discussions about the intended audience, existing skill levels, workplace challenges and expected learning objectives. This helps clarify whether the requirement is best addressed through Finance, AI, Analytics or Business Excellence training.",
  },
  {
    title: "Contextualise the learning content",
    text: "Training content and examples can be adapted to organisational requirements. Depending on the programme, the learning approach may incorporate case studies, roleplays, quizzes or practical exercises to connect concepts with workplace situations.",
  },
  {
    title: "Deliver the programme",
    text: "Markrich provides in-person training at the client’s location and live virtual instructor-led training. The suitable format depends on the programme requirements and the agreed delivery arrangement.",
  },
  {
    title: "Gather feedback",
    text: "Post-implementation feedback forms part of Markrich’s stated delivery approach. Assessment activities, including pre- and post-training assessments, may also be incorporated where applicable to the programme.",
  },
];

const choosingSteps = [
  {
    title: "Identify Your Organisation's Skill Gaps",
    text: "Start by evaluating the skills your employees currently possess and the capabilities they need to develop. Consider feedback from managers, performance observations, changing job responsibilities and business requirements. This helps identify whether the priority lies in financial knowledge, AI adoption, data analytics, leadership or communication.",
  },
  {
    title: "Define Clear Learning Objectives",
    text: "Establish what participants should understand or be able to do after completing the programme. Objectives could include interpreting financial statements, using Power BI to analyse business data, understanding Generative AI applications or developing project management capabilities. Clear objectives help determine the appropriate training subject and depth.",
  },
  {
    title: "Select the Relevant Training Area",
    text: "Match identified skill gaps with the appropriate learning programme. Finance training may be relevant for improving financial understanding, while Analytics training can support data interpretation and reporting skills. AI training may help teams understand emerging tools and applications, while Business Excellence programmes address leadership, communication and management capabilities.",
  },
  {
    title: "Consider Employee Roles and Existing Knowledge",
    text: "Training should be relevant to participants' responsibilities and experience levels. A foundational Excel programme may suit employees with limited spreadsheet experience, whereas advanced analytics training may be more relevant to professionals already working with datasets and analytical tools. Consider the audience before deciding on the programme level.",
  },
  {
    title: "Determine the Training Format and Scope",
    text: "Decide whether in-person training or live virtual instructor-led training is more suitable for the participants. Establish the programme duration, group size, topics, exercises and expected level of interaction. The scope should reflect the learning objectives and the time available.",
  },
  {
    title: "Evaluate Learning and Gather Feedback",
    text: "Consider how learning will be assessed and how participants will provide feedback. Depending on the programme, this may include practical exercises, quizzes, assessments or discussions. Post-training feedback can help identify areas requiring further learning and inform future training initiatives.",
  },
];

const snapshot = [
  {
    area: "Finance",
    examples: "Finance for Non-Finance, Corporate Finance, Financial Modelling",
    audience: "Finance teams and non-finance professionals",
  },
  {
    area: "AI",
    examples: "Generative AI Basics, Business Productivity, AI for HR and Finance, Agentic AI, Machine Learning",
    audience: "Business teams, functional professionals and decision-makers",
  },
  {
    area: "Analytics",
    examples: "Excel, Business Analytics, Power BI, Data Visualisation, Python",
    audience: "Analysts, finance and HR professionals, business teams",
  },
  {
    area: "Business Excellence",
    examples: "Leadership, Project Management, Communication, Risk Management",
    audience: "Managers, team leaders and professionals",
  },
];

const programmeDetails = [
  ["Delivery modes", "In-person and live virtual instructor-led training are described in Markrich’s delivery information."],
  ["Tools and technology", "The tools covered depend on the selected programme. Confirm the exact tool list before committing to a curriculum."],
  ["Prerequisites", "To be determined according to the programme and participants’ existing knowledge."],
  ["Certification", "Confirm whether certification is included for the specific programme; do not assume it is available across the portfolio."],
];

const audiences = [
  ["HR and Learning & Development leaders", "Identify skill gaps, plan learning interventions and evaluate programmes suited to workforce development priorities."],
  ["Finance leaders and CFOs", "Explore training that strengthens financial understanding, modelling capabilities and relevant applications of AI."],
  ["Analytics leaders", "Consider programmes in Excel, Power BI, data visualisation and business analytics to support data-related responsibilities."],
  ["Business heads and functional managers", "Identify learning options aligned with team responsibilities and business requirements."],
  ["Employees and individual contributors", "Develop relevant professional knowledge and practical capabilities within the scope of the selected programme."],
];

const reasons = [
  {
    title: "A broad training portfolio",
    text: "Markrich covers Finance, AI, Analytics and Business Excellence, allowing organisations to explore different areas of professional development through one training provider.",
  },
  {
    title: "A customised learning approach",
    text: "Markrich’s delivery process begins with understanding stakeholder needs and contextualising content to organisational requirements. This helps keep the proposed learning intervention aligned with the audience and the objectives discussed.",
  },
  {
    title: "Interactive learning methods",
    text: "Markrich’s delivery information describes the use of interactive discussions, case studies, quizzes and Excel-based exercises wherever applicable. The activities used in a programme depend on its subject and agreed scope.",
  },
  {
    title: "Multiple delivery formats",
    text: "Both in-person training at client locations and live virtual instructor-led training are described in Markrich’s delivery information. Confirm the preferred format and availability for the specific programme during planning.",
  },
  {
    title: "A focus on practical application",
    text: "Training can use workplace-relevant examples and exercises, where appropriate, to help participants connect concepts with their responsibilities. The proposed exercises and assessment approach should be agreed as part of the programme design.",
  },
];

const faqs = [
  {
    question: "What types of corporate training does Markrich Solutions offer?",
    answer:
      "Markrich offers training across Finance, AI, Analytics and Business Excellence. Areas include financial modelling, Finance for Non-Finance, Generative AI, Agentic AI, Power BI, business analytics, leadership development, project management and communication skills. The most suitable programme depends on your organisation’s learning objectives and the audience.",
  },
  {
    question: "Does Markrich provide AI training for corporate teams?",
    answer:
      "Yes. Markrich’s published training portfolio includes Generative AI Basics, Generative AI for Business Productivity, Generative AI for Sales and Marketing, Generative AI for HR and Finance, Agentic AI and Machine Learning. Discuss your team’s requirements to confirm the appropriate programme scope and curriculum.",
  },
  {
    question: "Can the training programme be customised for our organisation?",
    answer:
      "Markrich describes a needs-based approach that includes stakeholder discussions and contextualising content and examples to organisational requirements. The proposed programme can be discussed in terms of audience, learning objectives and relevant workplace scenarios, with the final scope agreed before delivery.",
  },
  {
    question: "What training delivery formats are available?",
    answer:
      "Markrich’s delivery information describes in-person training at the client’s location and live virtual instructor-led training. The appropriate format depends on the programme and agreed arrangements. Confirm the preferred delivery mode, schedule and availability when discussing your training requirements.",
  },
  {
    question: "How long does a corporate training programme take?",
    answer:
      "Duration depends on the subject, depth of coverage, participants’ existing knowledge and learning objectives. Markrich’s published information lists several training areas but does not establish one standard duration for every programme. Share your requirements to discuss a suitable schedule and scope.",
  },
  {
    question: "How can we enquire about corporate training for our team?",
    answer:
      "You can contact Markrich Solutions through the website to discuss your organisation’s training requirements. It is useful to share the subject area, target audience, approximate number of participants, preferred delivery format and intended learning objectives so the team can understand the requirement and discuss the next steps.",
  },
];

const AiTrainingCompanyInIndia = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <JsonLd data={aiTrainingSchema} />
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
        metaTitle="AI Training Company in India"
        subText="Markrich Solutions provides corporate training solutions designed to help organisations strengthen financial understanding, develop data-driven decision-making skills, build AI capabilities and improve leadership effectiveness. Our training portfolio covers Finance, AI, Analytics and Business Excellence, enabling organisations to explore learning programmes relevant to their teams and business requirements."
      >
        AI Training Company in India: Corporate Training Solutions in{" "}
        <span className="text-[#F58A07]">Finance, AI, Analytics</span> and
        Business Excellence
      </SectionHero>

      {/* Intro */}
      <section className="px-12 pb-16 lg:px-4">
        <div className="container mx-auto max-w-[900px] flex flex-col gap-6 text-[#18181B] leading-relaxed">
          <p>
            From AI training and Generative AI for workplace productivity to
            financial modelling, Power BI, business analytics, leadership
            development and communication skills, our programmes address a
            range of professional learning needs. We take a practical,
            interactive approach to training, with programme content and
            examples contextualised to organisational requirements.
          </p>
          <p>
            Whether you are an HR leader planning workforce development, an
            L&amp;D manager addressing skill gaps, a finance leader
            strengthening business acumen or an analytics leader supporting
            data-driven decisions, Markrich can help you explore suitable
            corporate training options.
          </p>
          <div>
            <Button text={"Discuss your requirements"} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* Training areas */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <SectionHeading eyebrow="Training areas">
              Explore Our <span className="text-[#F58A07]">Training Solutions</span>
            </SectionHeading>
            <p className="text-[#18181B]">
              Markrich offers training across four core areas. Each area
              addresses different workplace capabilities and can be explored
              according to your organisation’s learning priorities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
            {trainingAreas.map((area) => (
              <div
                key={area.title}
                className="flex flex-col gap-5 bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] md:p-6"
              >
                <h3 className="text-2xl font-semibold text-[#F58A07]">
                  {area.title}
                </h3>
                <p className="text-slate-600">{area.intro}</p>
                <p className="font-medium">{area.listLabel}</p>
                <LabelList items={area.items} />
                <p className="text-slate-600">{area.outro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI for workplace applications */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="AI at work">
              AI Training for{" "}
              <span className="text-[#F58A07]">Workplace Applications</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              AI is becoming relevant to a growing range of professional
              activities, from drafting and summarising information to
              exploring patterns in data and supporting structured analysis.
              However, identifying an appropriate use case requires more than
              selecting a tool. Employees also need to understand the task,
              assess the quality of the output and recognise when human review
              is essential.
            </p>
            <p className="text-[#18181B] leading-relaxed">
              Markrich’s AI training portfolio includes Generative AI, business
              productivity, function-specific applications, Agentic AI and
              Machine Learning. The focus of an organisational programme should
              be determined by the participants’ roles and the business
              problems they need to understand.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
            <div className="flex flex-col gap-5 bg-[#FFF7ED] rounded-2xl p-8 md:p-6">
              <h3 className="text-2xl font-semibold">
                Connecting AI learning with business needs
              </h3>
              <p className="text-slate-600">
                A useful corporate AI training programme starts by identifying
                where AI knowledge could be relevant to employees’ work.
              </p>
              <p className="font-medium">Examples of areas to explore include:</p>
              <LabelList items={aiApplicationAreas} />
              <p className="text-slate-600 text-sm">
                These are illustrative application areas, not promises that
                every use case is included in every training programme. The
                agreed curriculum should reflect the organisation’s needs,
                available tools and data-governance requirements.
              </p>
            </div>

            <div className="flex flex-col gap-5 bg-[#F3FBFF] rounded-2xl p-8 md:p-6">
              <h3 className="text-2xl font-semibold">
                Responsible use of AI at work
              </h3>
              <p className="text-slate-600">
                AI-generated content can be incomplete, inaccurate or
                misleading. Employees should learn to verify outputs before
                relying on them, particularly when the work involves financial
                information, employment decisions, confidential business
                material or sensitive personal data.
              </p>
              <p className="font-medium">
                A responsible learning approach should consider:
              </p>
              <LabelList items={responsibleUse} />
              <p className="text-slate-600 text-sm">
                The specific governance and compliance content should be agreed
                with the organisation and reviewed against its applicable
                policies and legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Choosing a programme">
              How to Choose the Right Corporate Training Programme for{" "}
              <span className="text-[#F58A07]">Your Organisation</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Selecting a corporate training programme requires an
              understanding of your employees&apos; current capabilities,
              business priorities and the skills they need to develop. A
              structured approach can help organisations identify relevant
              learning areas, define objectives and plan training that aligns
              with their requirements.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {choosingSteps.map((step, index) => (
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

          <p className="text-[#18181B] max-w-[900px]">
            A structured approach to selecting corporate training helps
            organisations connect learning priorities with employee
            responsibilities and business requirements. Markrich Solutions
            offers training across Finance, AI, Analytics and Business
            Excellence, with programme scope and delivery discussed according
            to organisational needs.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="How we work">
              A Practical, Needs-Based Approach to{" "}
              <span className="text-[#F58A07]">Corporate Training</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Effective corporate training starts with an understanding of what
              employees need to learn and how that learning relates to their
              responsibilities. Markrich’s delivery approach includes
              understanding stakeholder needs, creating customised solutions,
              delivering training and gathering post-implementation feedback.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {processSteps.map((step, index) => (
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
            The specific learning objectives, exercises, duration, delivery
            arrangements and evaluation approach should be agreed before the
            programme begins.
          </p>
        </div>
      </section>

      {/* Snapshot table */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="At a glance">
              Corporate Training{" "}
              <span className="text-[#F58A07]">Programme Snapshot</span>
            </SectionHeading>
            <p className="text-[#18181B]">
              The following table provides an overview of the training
              portfolio. Programme-specific details should be confirmed during
              the enquiry and proposal stage.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-[#F58A07] text-white">
                <tr>
                  <th className="p-4 font-semibold">Training area</th>
                  <th className="p-4 font-semibold">Programme examples</th>
                  <th className="p-4 font-semibold">Typical audience</th>
                </tr>
              </thead>
              <tbody>
                {snapshot.map((row, index) => (
                  <tr
                    key={row.area}
                    className={index % 2 ? "bg-[#FFF7ED]" : "bg-white"}
                  >
                    <td className="p-4 font-semibold text-[#18181B]">
                      {row.area}
                    </td>
                    <td className="p-4 text-slate-600">{row.examples}</td>
                    <td className="p-4 text-slate-600">{row.audience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">
              Additional programme details
            </h3>
            <LabelList items={programmeDetails} />
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Who it is for">
              Who Can Benefit from{" "}
              <span className="text-[#F58A07]">
                Markrich’s Training Solutions?
              </span>
            </SectionHeading>
            <p className="text-[#18181B]">
              Markrich’s corporate training portfolio can be explored by
              organisations with different learning priorities and employee
              groups.
            </p>
          </div>
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
          <p className="text-[#18181B]">
            The final audience, level and curriculum should be defined for each
            engagement rather than assuming a single programme will suit every
            role.
          </p>
        </div>
      </section>

      {/* Why Markrich */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why choose us">
              Why Consider{" "}
              <span className="text-[#F58A07]">Markrich Solutions?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Choosing a corporate training provider involves more than
              comparing course titles. Organisations need to consider the
              relevance of the content, the approach to delivery and how well
              the programme reflects participants’ learning requirements.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex flex-col gap-3 bg-[#F3FBFF] rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
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
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
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
            Discuss Your{" "}
            <span className="text-[#F58A07]">
              Corporate Training Requirements
            </span>
          </h2>
          <p className="max-w-[800px] text-[#18181B]">
            Every organisation has different capability requirements. Whether
            you are exploring AI training, strengthening financial
            understanding, developing analytics skills or investing in
            leadership and business excellence, the first step is to identify
            your team’s learning priorities.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Contact Markrich Solutions to discuss the subject area, target
            audience, intended learning objectives and preferred delivery
            format. The next step is to establish a programme scope suited to
            your requirements.
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

export default AiTrainingCompanyInIndia;
