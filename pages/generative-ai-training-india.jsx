import JsonLd from "@/components/JsonLd";
import { generativeAiTrainingSchema } from "@/lib/schema";
import React, { useState } from "react";
import { NextSeo, FAQPageJsonLd } from "next-seo";
import Link from "next/link";
import SectionHero from "@/components/Section";
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import { LabelList, SectionHeading } from "@/components/TrainingPage";

const PAGE_URL = "https://www.markrich.in/generative-ai-training-india/";
const META_TITLE = "Generative AI Training in India | Markrich Solutions";
const META_DESCRIPTION =
  "Develop generative AI skills with Markrich Solutions through training in India covering AI tools, content, ideation, workplace tasks, start learning now.";
const CTA_TEXT = "Enquire About Generative AI Training";

const whyImportant = [
  ["Improved Workplace Productivity", "Generative AI can assist with repetitive and time-consuming tasks such as drafting emails, preparing summaries, organising information, and creating first drafts of reports. This allows employees to spend more time on tasks that require problem-solving and decision-making."],
  ["Better Content and Communication", "Marketing, sales, and communication teams can use Generative AI to develop content ideas, prepare campaign drafts, write product descriptions, and create communication material. Employees can refine the output to match the organisation's brand voice and objectives."],
  ["Faster Research and Information Processing", "AI tools can help employees summarise lengthy documents, organise information, generate research questions, and prepare initial insights. The accuracy of the information must still be checked against reliable sources."],
  ["Support for Data Analysis and Reporting", "Generative AI can assist with explaining data, preparing report summaries, suggesting spreadsheet formulas, and helping employees interpret information. It can complement tools such as Excel and Power BI, rather than replace proper data analysis and validation."],
  ["Encouraging Innovation and Creativity", "Employees can use AI to brainstorm ideas, explore different approaches, develop concepts, and identify possible solutions to business challenges."],
  ["Building Future-Ready Employees", "As AI becomes more integrated into workplace processes, employees who understand its applications and limitations will be better prepared to adapt to evolving business requirements."],
];

const modules = [
  {
    title: "Introduction to Generative AI",
    items: [
      "Understanding Artificial Intelligence and Generative AI.",
      "How Large Language Models (LLMs) work at a foundational level.",
      "Understanding the capabilities and limitations of AI tools.",
      "Exploring real-world applications across industries.",
    ],
  },
  {
    title: "Prompt Engineering",
    items: [
      "Writing clear and structured prompts.",
      "Providing relevant context and instructions.",
      "Improving AI-generated responses through follow-up prompts.",
      "Using prompts for research, writing, analysis, and problem-solving.",
      "Identifying inaccurate or incomplete AI-generated information.",
    ],
  },
  {
    title: "Generative AI Tools for Workplace Productivity",
    items: [
      "Drafting emails and business documents.",
      "Creating reports and presentations.",
      "Summarising meetings and documents.",
      "Preparing research notes.",
      "Generating ideas and content outlines.",
      "Organising information and improving everyday workflows.",
    ],
  },
  {
    title: "Generative AI for Marketing and Sales",
    items: [
      "Social media content creation and blog drafts.",
      "Marketing campaign ideas and content calendars.",
      "Customer communication drafts.",
      "Product descriptions and promotional material.",
      "Sales proposal and presentation support.",
    ],
  },
  {
    title: "Generative AI for Finance and Business Operations",
    items: [
      "Preparing initial financial report summaries.",
      "Organising business information.",
      "Assisting with spreadsheet formulas.",
      "Drafting process documentation.",
      "Summarising non-sensitive business reports.",
      "Supporting routine administrative workflows.",
    ],
  },
  {
    title: "AI for Data Analysis and Decision Support",
    items: [
      "Understanding datasets and data terminology.",
      "Generating and explaining spreadsheet formulas.",
      "Summarising trends and findings.",
      "Preparing initial analytical reports.",
      "Developing questions for further investigation.",
    ],
  },
  {
    title: "Responsible AI and Data Security",
    items: [
      "Data privacy and confidentiality.",
      "Risks of entering sensitive business information into public AI tools.",
      "AI-generated errors and misleading responses.",
      "Copyright and intellectual property considerations.",
      "Bias, ethical concerns, human review, and accountability.",
    ],
  },
];

const steps = [
  ["Identify Business Requirements", "Understand which departments and processes could benefit. Marketing may need content support, HR may use AI for learning material, finance may explore report summaries, sales may draft proposals, and operations may organise process documentation."],
  ["Assess Employee Skills and Training Needs", "Evaluate employees' current understanding of AI tools. Some may need basic AI awareness, while others may benefit from advanced prompt engineering and department-specific applications."],
  ["Select Suitable AI Tools", "Identify tools that align with business requirements, existing software, budget, and security policies. Involve relevant IT, information security, and business teams."],
  ["Develop a Structured Training Programme", "Combine foundational knowledge with practical workplace applications. Customise training according to employee roles, skill levels, and business objectives."],
  ["Conduct Hands-On Workshops", "Practise creating structured prompts, drafting emails and reports, summarising sample documents, generating marketing content, and using AI to assist with spreadsheet tasks. Use fictional, anonymised, or explicitly approved information."],
  ["Establish Responsible AI Guidelines", "Explain which AI platforms are approved, what information can be shared, how generated content should be checked, and which tasks require human approval."],
  ["Measure Training Outcomes", "Monitor employee confidence, time taken for selected tasks, quality of AI-assisted work, adoption of approved tools, workflow improvements, and employee feedback. Use regular reviews and refresher sessions."],
];

const industries = [
  ["Banking and Finance", "Report summaries, research assistance, documentation, and spreadsheet support."],
  ["Human Resources", "Job description drafts, learning material, onboarding documents, and internal communication."],
  ["Marketing and Advertising", "Campaign ideas, content drafts, social media planning, and promotional material."],
  ["Education and Training", "Learning resources, lesson outlines, quizzes, and study support."],
  ["Healthcare Administration", "Administrative documentation and non-clinical information organisation, subject to privacy and professional safeguards."],
  ["Manufacturing", "Technical documentation, process instructions, and maintenance knowledge support."],
  ["Retail and E-commerce", "Product descriptions, customer communication drafts, and marketing content."],
  ["IT and Technology", "Coding assistance, documentation, research, and technical support workflows."],
];

const employeeBenefits = [
  "Develop practical AI and digital skills.",
  "Improve confidence in using AI tools.",
  "Learn effective prompt-writing techniques.",
  "Reduce time spent on selected repetitive tasks.",
  "Improve research, writing, and content development workflows.",
  "Adapt to changing workplace technology.",
];

const organisationBenefits = [
  "Encourage responsible AI adoption.",
  "Improve efficiency in selected business processes.",
  "Support innovation and experimentation.",
  "Develop a workforce with relevant digital capabilities.",
  "Identify opportunities for workflow improvement.",
  "Build a stronger foundation for future AI integration.",
];

const whyMarkrich = [
  ["Business-specific learning", "Align training with organisational goals and department requirements."],
  ["Practical applications", "Focus on activities employees can apply to their everyday responsibilities."],
  ["Role-based training", "Adapt learning for different departments and employee skill levels."],
  ["Responsible AI adoption", "Include awareness of data security, accuracy, privacy, and ethical usage."],
  ["Continuous skill development", "Help employees build capabilities as workplace technologies evolve."],
];

const faqs = [
  {
    question: "What is Generative AI Training?",
    answer:
      "Generative AI Training helps individuals and employees understand how generative AI tools work and how to use them for writing, research, content creation, summarisation, and workplace productivity.",
  },
  {
    question: "Why is Generative AI Training important for businesses in India?",
    answer:
      "It helps organisations prepare employees to use AI tools effectively, identify suitable business applications, improve selected workflows, and understand responsible AI practices.",
  },
  {
    question: "Who should attend corporate Generative AI training?",
    answer:
      "Marketing professionals, HR teams, finance employees, sales teams, managers, business leaders, operations professionals, and other employees can benefit from role-relevant training.",
  },
  {
    question: "Do employees need technical knowledge to learn Generative AI?",
    answer:
      "No. Foundational training can be designed for non-technical employees. Advanced technical knowledge is needed only for specialised topics such as AI development and model integration.",
  },
  {
    question: "Which tools are covered in Generative AI training?",
    answer:
      "Depending on the programme, tools may include ChatGPT, Google Gemini, Microsoft Copilot, Canva AI, and other relevant platforms. Actual tool coverage should depend on organisational requirements and approved access.",
  },
  {
    question: "What is prompt engineering?",
    answer:
      "Prompt engineering is the process of writing clear instructions and providing relevant context to guide an AI tool towards a useful response.",
  },
  {
    question: "Can Generative AI be used across different departments?",
    answer:
      "Yes. Generative AI can support activities in marketing, HR, finance, sales, operations, education, and other departments. Applications should be selected according to each department's responsibilities and risk requirements.",
  },
  {
    question: "How can a company implement Generative AI training?",
    answer:
      "A company can identify business requirements, assess employee skills, select approved AI tools, conduct practical workshops, establish responsible-use guidelines, and measure training outcomes.",
  },
  {
    question: "Is Generative AI training suitable for senior management?",
    answer:
      "Yes. Senior managers can benefit from understanding AI capabilities, business applications, governance, risks, and how to plan responsible AI adoption across their organisations.",
  },
  {
    question: "Can Generative AI training be customised for an organisation?",
    answer:
      "Yes. Corporate training can be structured around employee roles, industry requirements, existing technology, learning objectives, and organisational policies.",
  },
];

const CheckList = ({ items }) => (
  <ul className="flex flex-col gap-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 items-start text-[#18181B]">
        <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#F58A07] text-white text-xs flex items-center justify-center">
          ✓
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const GenerativeAITrainingIndia = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <JsonLd data={generativeAiTrainingSchema} />
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
        metaTitle="Generative AI Training India"
        subText="Generative Artificial Intelligence (Generative AI) is changing how businesses operate, communicate, create content, analyse information, and make decisions. From generating reports and presentations to assisting with research, customer communication, and everyday administrative tasks, Generative AI is becoming a valuable tool across industries."
      >
        <span className="text-[#F58A07]">Generative AI Training in India:</span>{" "}
        Preparing Businesses for the Future of Work
      </SectionHero>

      {/* Intro */}
      <section className="px-12 pb-16 lg:px-4">
        <div className="container mx-auto max-w-[900px] flex flex-col gap-6 text-[#18181B] leading-relaxed">
          <p>
            As organisations in India explore the potential of AI, employees
            need more than basic awareness of these technologies. They need
            practical skills to use Generative AI tools effectively, write
            better prompts, evaluate AI-generated information, and understand
            the importance of responsible AI adoption.
          </p>
          <p>
            This is where Generative AI Training in India becomes important.
            Corporate training helps employees understand how Generative AI
            works and how it can be applied to real business situations.
          </p>
          <p>
            Markrich Solutions supports organisations in developing workplace
            capabilities through corporate training focused on practical
            business skills, technology adoption, and professional development.
          </p>
          <div>
            <Button text={CTA_TEXT} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[900px] flex flex-col gap-6">
          <SectionHeading eyebrow="Overview">
            What Is <span className="text-[#F58A07]">Generative AI?</span>
          </SectionHeading>
          <p className="text-[#18181B] leading-relaxed">
            Generative AI is a type of artificial intelligence that can create
            new content based on instructions or prompts provided by users. It
            can generate text, images, summaries, presentations, ideas, code,
            and other forms of digital content.
          </p>
          <p className="text-[#18181B] leading-relaxed">
            Unlike traditional software that mainly follows predefined
            instructions, Generative AI tools can understand natural-language
            prompts and produce responses based on patterns learned from their
            training data.
          </p>
        </div>
      </section>

      {/* Why important */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why it matters">
              Why Is Generative AI Training Important for{" "}
              <span className="text-[#F58A07]">Indian Businesses?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Businesses are increasingly exploring AI to improve productivity
              and adapt to changing workplace requirements. However, simply
              providing employees with access to AI tools does not guarantee
              effective adoption. Employees need to understand how to use these
              tools, where they can add value, and when human judgement is
              necessary.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {whyImportant.map(([title, text], index) => (
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

      {/* Training modules */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Programme">
              What Does Corporate{" "}
              <span className="text-[#F58A07]">Generative AI Training</span>{" "}
              Include?
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              An effective corporate Generative AI programme should focus on
              practical applications rather than only explaining technical
              concepts. Depending on an organisation&apos;s requirements,
              employee roles, and approved technology, training may include:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {modules.map((module) => (
              <div
                key={module.title}
                className="flex flex-col gap-4 bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] md:p-6"
              >
                <h3 className="text-xl font-semibold">{module.title}</h3>
                <ul className="flex flex-col gap-2 list-disc pl-5 text-slate-600 leading-relaxed">
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <Button text={CTA_TEXT} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* Implementation steps */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Step by step">
              How to Implement Generative AI Training in{" "}
              <span className="text-[#F58A07]">Your Organisation</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Introducing Generative AI into a workplace requires a planned
              approach. Businesses should identify where AI can be useful,
              prepare employees to use it responsibly, and measure whether
              training improves workplace performance.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {steps.map(([title, text], index) => (
              <div
                key={title}
                className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]"
              >
                <span className="h-10 w-10 rounded-full bg-[#F58A07] text-white font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries table */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Industries">
              Which Industries Can Benefit from{" "}
              <span className="text-[#F58A07]">Generative AI Training in India?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Generative AI has applications across several industries. Its
              usefulness depends on the nature of the work, the quality of
              available information, and the organisation&apos;s ability to
              manage risks.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-[#F58A07] text-white">
                <tr>
                  <th className="p-4 font-semibold">Industry</th>
                  <th className="p-4 font-semibold">Potential applications</th>
                </tr>
              </thead>
              <tbody>
                {industries.map(([industry, use], index) => (
                  <tr key={industry} className={index % 2 ? "bg-[#FFF7ED]" : "bg-white"}>
                    <td className="p-4 font-semibold text-[#18181B]">{industry}</td>
                    <td className="p-4 text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <SectionHeading eyebrow="Benefits">
            Benefits of Generative AI Training for{" "}
            <span className="text-[#F58A07]">Employees and Organisations</span>
          </SectionHeading>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
            <div className="flex flex-col gap-5 bg-[#F3FBFF] rounded-2xl p-8 md:p-6">
              <h3 className="text-2xl font-semibold">For Employees</h3>
              <CheckList items={employeeBenefits} />
            </div>
            <div className="flex flex-col gap-5 bg-[#FFF7ED] rounded-2xl p-8 md:p-6">
              <h3 className="text-2xl font-semibold">For Organisations</h3>
              <CheckList items={organisationBenefits} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Markrich */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex gap-16 items-start lg:flex-col lg:gap-10">
          <div className="flex flex-col gap-4 max-w-[480px] lg:max-w-none">
            <SectionHeading eyebrow="Markrich">
              Why Choose <span className="text-[#F58A07]">Markrich Solutions</span>{" "}
              for Generative AI Training?
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Successful AI adoption depends on more than access to technology.
              Employees need the knowledge and confidence to apply AI tools to
              real business situations. Markrich Solutions focuses on corporate
              training that connects professional development with practical
              workplace requirements.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-[#FFF7ED] rounded-2xl p-8 w-full md:p-6">
            <LabelList items={whyMarkrich} />
            <p className="text-slate-600 leading-relaxed">
              Training modules, tools, and delivery formats should be finalised
              according to the organisation&apos;s specific requirements.
            </p>
            <div>
              <Button text={CTA_TEXT} highlight link={"/contact-us"} />
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* FAQs */}
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-3xl font-semibold text-black mb-10 text-center">
            Frequently Asked Questions About{" "}
            <span className="text-[#F58A07]">Generative AI Training in India</span>
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
            Prepare Your Workforce for the{" "}
            <span className="text-[#F58A07]">Generative AI Era</span>
          </h2>
          <p className="max-w-[800px] text-[#18181B]">
            Generative AI is creating new possibilities for businesses to
            improve productivity, support innovation, and rethink everyday
            workflows. However, its successful adoption depends on employees who
            know how to use these tools effectively and responsibly.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Investing in Generative AI Training in India can help organisations
            build practical workplace capabilities, encourage informed
            technology adoption, and prepare employees for evolving business
            requirements.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Markrich Solutions aims to support organisations through corporate
            training focused on practical skills, business applications, and
            professional development.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Connect with Markrich Solutions to explore Generative AI training
            for your organisation and help your workforce build the skills
            needed for an AI-enabled workplace.
          </p>
          <div className="flex gap-4 md:flex-col">
            <Button text={CTA_TEXT} highlight link={"/contact-us"} />
            <Link href="/training-solutions" className="self-center text-[#ED3630] font-semibold">
              View all training solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenerativeAITrainingIndia;
