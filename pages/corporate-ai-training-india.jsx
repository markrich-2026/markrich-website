import JsonLd from "@/components/JsonLd";
import { corporateAiTrainingSchema } from "@/lib/schema";
import React, { useState } from "react";
import { NextSeo, FAQPageJsonLd } from "next-seo";
import Link from "next/link";
import SectionHero from "@/components/Section";
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import { SectionHeading } from "@/components/TrainingPage";

const PAGE_URL = "https://www.markrich.in/corporate-ai-training-india/";
const META_TITLE = "Corporate AI Training India | Markrich Solutions";
const META_DESCRIPTION =
  "Corporate AI Training in India by Markrich Solutions. Help employees use Generative AI, prompt engineering and AI tools responsibly to boost productivity.";

const benefits = [
  {
    title: "Improve Workplace Productivity",
    text: "AI tools can help employees complete repetitive tasks, organise information, generate reports, and prepare business documents more efficiently. With the right training, employees can learn how to use AI to simplify everyday responsibilities and focus more on tasks that require human judgement and creativity.",
  },
  {
    title: "Automate Repetitive Business Processes",
    text: "Many business activities involve repetitive administrative work, including data entry, document preparation, report generation, and information management. AI-powered tools can assist with automating suitable tasks, reducing manual effort and allowing employees to focus on higher-value responsibilities.",
  },
  {
    title: "Improve Decision-Making",
    text: "AI can help professionals organise information, identify patterns, summarise reports, and explore business trends. When employees understand how to use AI-generated insights alongside their own expertise, they can make more informed business decisions.",
  },
  {
    title: "Encourage Innovation and Creativity",
    text: "AI can support brainstorming, content development, research, problem-solving, and idea generation. Training employees to use AI effectively encourages experimentation and helps teams explore new approaches to existing business challenges.",
  },
  {
    title: "Build a Future-Ready Workforce",
    text: "As AI continues to influence workplace processes, employees need opportunities to develop relevant digital skills. Corporate AI Training helps organisations prepare their workforce for changing job requirements while encouraging continuous learning and professional development.",
  },
];

const learningAreas = [
  {
    title: "Introduction to Artificial Intelligence",
    items: [
      "Understanding Artificial Intelligence and Machine Learning.",
      "Introduction to Generative AI.",
      "How AI is transforming modern workplaces.",
      "Benefits and limitations of AI applications.",
      "Responsible and ethical AI usage.",
    ],
  },
  {
    title: "Generative AI and Prompt Engineering",
    items: [
      "Understanding Generative AI.",
      "Writing effective AI prompts.",
      "Using AI for research and content creation.",
      "Summarising documents and reports.",
      "Improving the quality and accuracy of AI-generated outputs.",
    ],
  },
  {
    title: "AI Tools for Business Productivity",
    items: [
      "ChatGPT for research, writing, and problem-solving.",
      "Microsoft Copilot for workplace productivity.",
      "Google Gemini for research and content assistance.",
      "AI-powered presentation and document tools.",
      "AI applications for communication and workflow support.",
    ],
  },
  {
    title: "AI for Data Analysis and Reporting",
    items: [
      "Analysing and summarising datasets.",
      "Generating reports with AI assistance.",
      "Identifying trends and patterns.",
      "Supporting business forecasting.",
      "Using AI alongside Excel and business intelligence tools.",
    ],
  },
  {
    title: "AI for Business Automation",
    items: [
      "Identifying tasks suitable for automation.",
      "AI-assisted workflow management.",
      "Automating repetitive administrative processes.",
      "Exploring no-code automation tools.",
      "Understanding human oversight in automated processes.",
    ],
  },
  {
    title: "Responsible AI and Data Security",
    items: [
      "How to identify inaccurate AI-generated information.",
      "Why confidential company information should not be entered into unapproved AI tools.",
      "Data privacy and security considerations.",
      "Copyright and intellectual property awareness.",
      "The importance of human review and accountability.",
    ],
  },
];

const steps = [
  {
    title: "Identify Your Organisation's AI Training Needs",
    text: "Before introducing AI training, understand how your employees currently work and where AI could make a meaningful difference. Identify repetitive tasks, operational challenges, and areas where employees spend significant time on manual activities. For example, marketing teams may spend hours researching topics and preparing content; HR teams may handle repetitive documentation; finance teams may work extensively on reports; and sales teams may spend time preparing proposals. Identifying these requirements helps businesses determine which AI skills would be most useful.",
  },
  {
    title: "Identify the Right AI Tools for Your Employees",
    text: "Not every AI application serves the same purpose. Businesses should select tools based on their operational requirements and the responsibilities of their employees. The objective is to introduce tools that solve relevant business problems rather than encouraging employees to use AI without a clear purpose.",
  },
  {
    title: "Develop a Structured Corporate AI Training Programme",
    text: "Once training requirements are identified, create a learning programme that matches employees' skill levels and responsibilities. It may include AI fundamentals, Generative AI training, prompt engineering, practical tool training, department-specific applications, and responsible AI practices. Training should focus on practical workplace applications rather than theoretical knowledge alone.",
  },
  {
    title: "Conduct Hands-On AI Training Workshops",
    text: "Employees learn more effectively when they can apply concepts to realistic work situations. Organise practical sessions where employees experiment with AI tools and complete tasks relevant to their roles. For example, marketing employees can develop a content calendar, HR employees can draft job descriptions, finance teams can summarise reports, and sales teams can prepare business proposals with AI assistance.",
  },
  {
    title: "Establish AI Usage Guidelines",
    text: "Before implementing AI across the organisation, establish clear guidelines for its use. Employees should understand which tools are approved, what information can be shared, and when human verification is necessary. Policies should address confidential company information, customer and employee data, accuracy, intellectual property, human review, and approved AI platforms.",
  },
  {
    title: "Integrate AI into Everyday Workflows",
    text: "After training, encourage employees to apply their skills to actual workplace responsibilities. Start with small, low-risk applications before expanding AI usage into more complex processes. The objective is to make AI a practical part of everyday work rather than a tool employees use only during training sessions.",
  },
  {
    title: "Monitor Results and Continue Upskilling",
    text: "AI technology continues to evolve, making continuous learning important. Evaluate whether employees are applying their training and whether AI is improving workplace processes. Possible indicators include time spent on repetitive tasks, reporting efficiency, employee confidence, adoption of approved applications, quality of work, and improvements in selected workflows.",
  },
];

const departmentTools = [
  ["Marketing", "Content creation, research, campaign planning, and brainstorming"],
  ["Human Resources", "Job description drafting, recruitment support, and document preparation"],
  ["Finance", "Report summaries, spreadsheet assistance, and financial documentation"],
  ["Sales", "Proposal drafting, customer research, and sales communication"],
  ["Operations", "Workflow support, documentation, and task automation"],
  ["Management", "Research, information summaries, and decision support"],
];

const audiences = [
  ["AI Training for Marketing Teams", "Marketing professionals can use AI to support content planning, market research, campaign brainstorming, audience analysis, and communication."],
  ["AI Training for Human Resources Teams", "HR professionals can explore AI applications for recruitment administration, employee communication, documentation, and workforce reporting."],
  ["AI Training for Finance Teams", "Finance employees can use AI-assisted tools for report summarisation, spreadsheet support, financial documentation, and information organisation."],
  ["AI Training for Sales Teams", "Sales professionals can explore AI for customer research, proposal preparation, sales communication, and lead-related information management."],
  ["AI Training for Managers and Business Leaders", "Managers can develop an understanding of AI capabilities, business applications, implementation opportunities, and the importance of responsible AI adoption."],
];

const reasons = [
  ["Customised Corporate Training", "Every organisation has different business objectives and employee requirements. Training programmes can be aligned with your organisation's specific learning needs."],
  ["Practical and Business-Focused Learning", "Our training approach emphasises real-world applications, helping employees understand how AI can support everyday business activities."],
  ["Training Across Different Business Functions", "AI applications are relevant across marketing, HR, finance, sales, operations, and management. Training can be adapted to suit different departments and professional roles."],
  ["Focus on Workplace Productivity", "The objective is to help employees explore how AI can simplify tasks, support workflows, and improve the way they approach business responsibilities."],
  ["Building Long-Term Capabilities", "AI adoption is an ongoing process. Developing employee capabilities helps organisations adapt to new tools, changing business requirements, and emerging technologies."],
];

const faqs = [
  {
    question: "What is Corporate AI Training?",
    answer:
      "Corporate AI Training is a structured learning programme that helps employees understand and apply Artificial Intelligence tools and technologies in their workplace. It focuses on practical applications such as automation, content creation, data analysis, research, and productivity improvement.",
  },
  {
    question: "Why do companies in India need AI training?",
    answer:
      "Companies in India can use AI training to help employees adapt to changing workplace requirements, improve productivity, and explore opportunities for automation and innovation. Training also helps employees understand the responsible use of AI applications.",
  },
  {
    question: "Is AI training suitable for non-technical employees?",
    answer:
      "Yes. AI training is useful for both technical and non-technical employees. Professionals in marketing, HR, finance, sales, operations, and management can learn to use AI tools without necessarily having a programming background.",
  },
  {
    question: "Which AI tools can employees learn during corporate training?",
    answer:
      "Depending on the programme requirements, employees can explore tools such as ChatGPT, Microsoft Copilot, Google Gemini, and other AI-powered productivity and automation applications.",
  },
  {
    question: "How long does a corporate AI training programme take?",
    answer:
      "The duration depends on the organisation's requirements, employee skill levels, and topics covered. A basic AI awareness workshop may be shorter, while a more comprehensive programme involving practical exercises and department-specific applications may require multiple sessions.",
  },
  {
    question: "How can businesses implement AI training for employees?",
    answer:
      "Businesses can begin by assessing employee skill gaps, identifying relevant AI applications, developing a structured training programme, conducting hands-on workshops, establishing usage guidelines, and monitoring workplace implementation.",
  },
  {
    question: "How can companies measure the effectiveness of AI training?",
    answer:
      "Companies can measure effectiveness through employee assessments, practical exercises, tool adoption, time saved on selected tasks, workflow improvements, and employee feedback.",
  },
  {
    question: "Can Corporate AI Training be customised for different industries?",
    answer:
      "Yes. Training can be adapted to an organisation's industry, business functions, employee responsibilities, and preferred AI applications. The examples and exercises should reflect the organisation's actual working environment.",
  },
  {
    question: "How can we enquire about Corporate AI Training from Markrich Solutions?",
    answer:
      "Businesses interested in developing their employees' AI capabilities can contact Markrich Solutions through the website's enquiry form or contact page to discuss their training requirements.",
  },
];

const CorporateAITrainingIndia = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <JsonLd data={corporateAiTrainingSchema} />
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
        metaTitle="Corporate AI Training India"
        subText="Artificial Intelligence is transforming the way businesses operate. From automating repetitive tasks and analysing information to improving customer experiences and supporting business decisions, AI is becoming an important part of modern workplaces."
      >
        <span className="text-[#F58A07]">Corporate AI Training India:</span>{" "}
        Prepare Your Workforce for the Future of Business
      </SectionHero>

      {/* Intro */}
      <section className="px-12 pb-16 lg:px-4">
        <div className="container mx-auto max-w-[900px] flex flex-col gap-6 text-[#18181B] leading-relaxed">
          <p>
            However, adopting AI technology is only one part of the process.
            Businesses also need employees who understand how to use these
            tools effectively, responsibly, and confidently.
          </p>
          <p className="text-2xl font-semibold tracking-tight md:text-xl">
            This is where{" "}
            <span className="text-[#F58A07]">Corporate AI Training in India</span>{" "}
            becomes essential.
          </p>
          <p>
            At Markrich Solutions, we believe that successful digital
            transformation begins with developing the right skills. Our
            corporate training approach focuses on helping employees understand
            Artificial Intelligence, explore practical AI applications, and
            integrate AI-powered tools into their everyday work.
          </p>
          <p>
            Whether your organisation wants to improve productivity, simplify
            business processes, or build AI-ready teams, investing in employee
            training is an important step towards achieving these goals.
          </p>
          <div>
            <Button text={"Enquire About Corporate AI Training"} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why it matters">
              Why Is Corporate AI Training Important for{" "}
              <span className="text-[#F58A07]">Businesses?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              AI adoption is no longer limited to technology companies.
              Organisations across finance, marketing, human resources, sales,
              operations, and management are exploring ways to incorporate AI
              into their workflows.
            </p>
            <p className="text-[#18181B] leading-relaxed">
              Yet, without proper training, employees may struggle to identify
              suitable applications, use AI tools effectively, or evaluate the
              accuracy of AI-generated information.
            </p>
            <p className="text-[#18181B] font-medium">
              Corporate AI Training in India helps bridge this gap by developing
              practical AI knowledge across different departments.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-4 bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] md:p-6"
              >
                <span className="h-10 w-10 rounded-full bg-[#F58A07] text-white font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Training areas">
              What Does Corporate AI Training in India{" "}
              <span className="text-[#F58A07]">Include?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Effective AI training goes beyond introducing employees to
              different AI applications. It focuses on helping them understand
              how these tools work, where they can be used, and how they can add
              value to business operations.
            </p>
            <p className="text-[#18181B] leading-relaxed">
              At Markrich Solutions, corporate AI training can be structured
              around the following learning areas.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {learningAreas.map((area, index) => (
              <div
                key={area.title}
                className="flex flex-col gap-5 bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] md:p-6"
              >
                <span className="h-10 w-10 rounded-full bg-[#F58A07] text-white font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-semibold text-[#F58A07]">{area.title}</h3>
                <ul className="flex flex-col gap-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[#18181B]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F58A07]" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation steps */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Step by step">
              How to Implement Corporate AI Training in{" "}
              <span className="text-[#F58A07]">Your Organisation</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Implementing Corporate AI Training in India requires more than
              providing employees with access to AI tools. Businesses need a
              structured approach that connects training with actual workplace
              requirements.
            </p>
            <p className="text-[#18181B] leading-relaxed">
              Here is a step-by-step guide to implementing an effective
              Corporate AI Training programme.
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
        </div>
      </section>

      {/* Tools by department */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="At a glance">
              AI Tools by <span className="text-[#F58A07]">Business Department</span>
            </SectionHeading>
            <p className="text-[#18181B]">
              Businesses should select tools based on their operational
              requirements and the responsibilities of their employees.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[#F58A07] text-white">
                <tr>
                  <th className="p-4 font-semibold">Business Department</th>
                  <th className="p-4 font-semibold">Potential AI Applications</th>
                </tr>
              </thead>
              <tbody>
                {departmentTools.map(([department, use], index) => (
                  <tr key={department} className={index % 2 ? "bg-[#FFF7ED]" : "bg-white"}>
                    <td className="p-4 font-semibold text-[#18181B]">{department}</td>
                    <td className="p-4 text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <Button text={"Build Your Organisation's AI Training Plan"} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* Who should be trained */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Who it is for">
              Which Employees Should Receive{" "}
              <span className="text-[#F58A07]">AI Training?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              AI training is relevant across different organisational levels.
              It should not be restricted to IT professionals or employees
              working in technical roles. Different departments can benefit from
              different levels of AI knowledge and practical training.
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
            By introducing role-specific AI training, organisations can ensure
            that employees learn skills relevant to their actual
            responsibilities.
          </p>
        </div>
      </section>

      {/* Why Markrich */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why choose us">
              Why Choose Markrich Solutions for{" "}
              <span className="text-[#F58A07]">Corporate AI Training?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Successful AI adoption requires employees to understand both the
              technology and its practical business applications.
            </p>
            <p className="text-[#18181B] leading-relaxed">
              At Markrich Solutions, our corporate training approach focuses on
              helping organisations develop relevant workplace capabilities
              through structured and application-oriented learning.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {reasons.map(([title, text]) => (
              <div key={title} className="flex flex-col gap-3 bg-[#F3FBFF] rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-[#18181B] font-medium">
            At Markrich Solutions, we believe that investing in employee skills
            is an important part of preparing businesses for the future.
          </p>
          <div>
            <Button text={"Enquire About Markrich Solutions' AI Training"} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* FAQs */}
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-3xl font-semibold text-black mb-10 text-center">
            Frequently Asked Questions About{" "}
            <span className="text-[#F58A07]">Corporate AI Training in India</span>
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
            Prepare Your Workforce for an AI-Driven Future{" "}
            <span className="text-[#F58A07]">with Markrich Solutions</span>
          </h2>
          <p className="max-w-[800px] text-[#18181B]">
            Artificial Intelligence is changing how businesses approach
            productivity, problem-solving, and innovation. However, technology
            alone cannot create meaningful transformation.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Your employees need the knowledge and confidence to use AI
            effectively.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            With Corporate AI Training from Markrich Solutions, organisations
            can explore practical AI applications, develop employee
            capabilities, and build a workforce that is better prepared for
            evolving business demands.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Whether you want to introduce AI to your employees, improve
            workplace productivity, or develop department-specific AI skills,
            the right training programme can help you take the next step.
          </p>
          <p className="max-w-[800px] text-xl font-semibold text-[#18181B]">
            Invest in your people. Embrace AI. Enable business growth.
          </p>
          <div className="flex gap-4 md:flex-col">
            <Button text={"Enquire Now for Corporate AI Training India"} highlight link={"/contact-us"} />
            <Link href="/training-solutions" className="self-center text-[#ED3630] font-semibold">
              View all training solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateAITrainingIndia;
