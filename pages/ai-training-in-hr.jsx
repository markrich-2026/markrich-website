import React, { useState } from "react";
import { NextSeo, FAQPageJsonLd } from "next-seo";
import Link from "next/link";
import SectionHero from "@/components/Section";
import Button from "@/components/Button";
import GoogleReviews from "@/components/GoogleReviews";
import { LabelList, SectionHeading } from "@/components/TrainingPage";

const PAGE_URL = "https://www.markrich.in/ai-training-in-hr/";
const META_TITLE = "AI Training in HR Teams | Markrich Solutions";
const META_DESCRIPTION =
  "Discover AI training in HR from Markrich Solutions, focused on recruitment, employee support, responsible HR workflows, and train your team with us.";
const CTA_TEXT = "Enquire About AI Training HR";

const whyAI = [
  ["Smarter Recruitment and Talent Acquisition", "AI-powered recruitment tools can screen resumes, identify relevant skills, shortlist candidates, and assist in matching applicants with job requirements. This helps recruiters save time and manage large volumes of applications."],
  ["Automated HR Administration", "AI can assist with routine activities such as answering employee queries, preparing HR documents, organising employee records, and managing leave-related requests."],
  ["Improved Employee Engagement", "AI-powered chatbots and employee feedback tools can help HR teams understand employee concerns, respond to common questions, and identify areas where workplace satisfaction can improve."],
  ["Data-Driven Performance Management", "AI can help HR professionals analyse performance trends, identify skill gaps, and support employee development through data-driven insights."],
  ["Workforce Planning and Predictive Analytics", "AI can analyse workforce data to identify potential staffing requirements, forecast employee turnover risks, and support long-term workforce planning."],
  ["Personalised Learning and Development", "AI can recommend training programmes based on employee roles, existing skills, and career development requirements."],
];

const applications = [
  ["Recruitment", "Resume screening and candidate matching"],
  ["Onboarding", "Automated documentation and employee assistance"],
  ["Payroll", "Data processing and error identification"],
  ["Employee Engagement", "Feedback analysis and employee surveys"],
  ["Performance Management", "Performance trend analysis"],
  ["Learning & Development", "Personalised training recommendations"],
  ["Workforce Planning", "Predictive analytics and resource forecasting"],
  ["HR Operations", "Chatbots and workflow automation"],
];

const tools = [
  ["ChatGPT", "Helps draft job descriptions, prepare interview questions, create HR policies, write employee communications, and develop training material."],
  ["Microsoft Copilot", "Assists with summarising HR reports, analysing workforce data in Excel, preparing presentations, and drafting professional communications."],
  ["Power BI", "Helps HR teams analyse workforce data, monitor employee trends, and create interactive HR dashboards."],
];

const steps = [
  {
    title: "Identify HR Processes That Can Benefit from AI",
    text: "Begin by evaluating existing HR operations. Identify repetitive and time-consuming activities such as resume screening, employee query management, report preparation, and workforce data analysis.",
  },
  {
    title: "Assess the Existing Skill Gap",
    text: "Understand the current level of AI awareness among HR professionals. Identify whether employees need basic AI knowledge, practical tool training, or advanced data analytics skills.",
  },
  {
    title: "Select Relevant AI Tools",
    text: "Choose AI tools based on the organisation's requirements. For example, ChatGPT and Microsoft Copilot can assist with content creation and administrative work, while specialised HR platforms can support recruitment and workforce management.",
  },
  {
    title: "Conduct Practical Corporate AI Training",
    text: "Organise structured training sessions that demonstrate how AI can be applied to real HR activities. Include practical exercises such as creating job descriptions, analysing employee feedback, preparing interview questions, and generating HR reports.",
  },
  {
    title: "Establish AI Governance and Data Privacy Guidelines",
    text: "HR departments handle sensitive employee information. Employees must understand data privacy, confidentiality, bias in AI-generated recommendations, and the importance of human review before making employment-related decisions.",
  },
  {
    title: "Monitor Performance and Measure Results",
    text: "Evaluate the effectiveness of AI implementation by measuring improvements in recruitment turnaround time, administrative efficiency, employee satisfaction, and overall HR productivity.",
  },
];

const indiaBenefits = [
  "Improve recruitment and talent acquisition processes.",
  "Reduce time spent on repetitive administrative activities.",
  "Strengthen employee learning and development.",
  "Make more informed workforce decisions.",
  "Improve HR productivity and operational efficiency.",
  "Prepare employees for an AI-driven workplace.",
];

const markrichSkills = [
  "Understand the fundamentals of artificial intelligence.",
  "Use AI tools for recruitment and talent management.",
  "Automate routine HR activities.",
  "Apply AI for workforce data analysis.",
  "Improve employee communication and engagement.",
  "Adopt responsible and ethical AI practices.",
];

const faqs = [
  {
    question: "Do HR professionals need coding skills to learn AI?",
    answer:
      "No, HR professionals do not need coding or technical skills to use AI. Corporate AI training covers no-code, plain-English tools like ChatGPT, Microsoft Copilot, and built-in HRMS analytics that work through simple text prompts.",
  },
  {
    question: "Which AI tools are covered in HR AI training?",
    answer:
      "Training typically covers ChatGPT, Microsoft Copilot and Power BI. These tools help HR teams draft job descriptions, screen resumes, summarise reports, automate employee queries, and build workforce dashboards.",
  },
  {
    question: "How does AI improve recruitment and talent acquisition?",
    answer:
      "AI accelerates hiring by automating resume screening, skill matching, and interview scheduling. This reduces manual administrative work, allowing recruiters to focus on candidate interviews, cultural fit, and final hiring decisions.",
  },
  {
    question: "How are employee data privacy and AI bias managed?",
    answer:
      "Training establishes strict privacy rules and human-review guidelines to protect employee data and prevent bias. HR teams learn to anonymise sensitive records, comply with Indian data privacy laws (such as the DPDP Act), and verify all AI outputs before making people decisions.",
  },
  {
    question: "Why do Indian businesses need AI training for HR?",
    answer:
      "Indian businesses need AI-trained HR teams to handle high-volume hiring, cut administrative overhead, and lead workplace digital transformation. Upskilling HR improves workforce planning, boosts productivity, and ensures responsible AI adoption across the company.",
  },
  {
    question: "How do companies measure the ROI of HR AI training?",
    answer:
      "Organisations measure ROI through faster recruitment turnaround times, fewer hours spent on manual tasks, and improved HR service accuracy. Key metrics include reduced time-to-hire, lower administrative workload, and higher adoption of AI workflows.",
  },
  {
    question: "How does Markrich Solutions conduct AI training for HR?",
    answer:
      "Markrich Solutions delivers hands-on, application-oriented corporate training tailored to real HR workflows. Participants practice using AI tools on actual HR tasks—like writing policies, analysing feedback, and creating reports—so they can apply skills immediately at work.",
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

const AITrainingInHR = () => {
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
        metaTitle="AI Training in HR"
        subText="Artificial Intelligence (AI) is transforming the way businesses manage their workforce. From recruitment and employee engagement to performance management and workforce planning, AI is helping HR departments become more efficient, data-driven, and strategic."
      >
        <span className="text-[#F58A07]">AI Training in HR:</span>{" "}
        Transforming Human Resource Management Through Artificial Intelligence
      </SectionHero>

      {/* Intro */}
      <section className="px-12 pb-16 lg:px-4">
        <div className="container mx-auto max-w-[900px] flex flex-col gap-6 text-[#18181B] leading-relaxed">
          <p>
            Traditionally, HR professionals spent a considerable amount of time
            on repetitive administrative tasks such as screening resumes,
            scheduling interviews, managing employee records, processing
            attendance, and preparing reports. With the introduction of
            AI-powered tools, many of these processes can now be automated,
            allowing HR teams to focus more on employee development,
            organisational culture, and strategic decision-making.
          </p>
          <p>
            As Indian businesses continue to adopt digital technologies, AI
            training in HR is becoming increasingly important. Corporate AI
            training equips HR professionals with the knowledge and practical
            skills required to use artificial intelligence effectively in their
            daily operations.
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
            What Is <span className="text-[#F58A07]">AI Training in HR?</span>
          </SectionHeading>
          <p className="text-[#18181B] leading-relaxed">
            AI training in HR refers to educating human resource professionals
            on how to use artificial intelligence tools and technologies to
            improve HR functions.
          </p>
          <p className="text-[#18181B] leading-relaxed">
            It involves understanding AI-powered applications, learning how to
            automate repetitive tasks, analysing employee data, improving
            recruitment processes, and using predictive analytics for better
            workforce management.
          </p>
          <p className="text-[#18181B] leading-relaxed">
            Corporate AI training helps HR teams understand how to integrate AI
            into existing systems while maintaining the human element that is
            essential to people management.
          </p>
        </div>
      </section>

      {/* Why AI in HR */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Why it matters">
              Why Is AI Important in{" "}
              <span className="text-[#F58A07]">Human Resource Management?</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              AI is changing HR from a largely administrative function into a
              more strategic business department.
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

      {/* Applications table */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Applications">
              Key Applications of <span className="text-[#F58A07]">AI in HR</span>
            </SectionHeading>
            <p className="text-[#18181B]">
              Businesses can integrate AI across several human resource
              functions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-[#F58A07] text-white">
                <tr>
                  <th className="p-4 font-semibold">HR Function</th>
                  <th className="p-4 font-semibold">Application of AI</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(([fn, use], index) => (
                  <tr key={fn} className={index % 2 ? "bg-[#FFF7ED]" : "bg-white"}>
                    <td className="p-4 font-semibold text-[#18181B]">{fn}</td>
                    <td className="p-4 text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex gap-16 items-start lg:flex-col lg:gap-10">
          <div className="flex flex-col gap-4 max-w-[480px] lg:max-w-none">
            <SectionHeading eyebrow="Tools">
              AI Tools Every{" "}
              <span className="text-[#F58A07]">HR Professional</span> Should
              Know
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              HR professionals do not necessarily need technical or programming
              knowledge to begin using AI. Several accessible tools can support
              everyday HR activities.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-[#FFF7ED] rounded-2xl p-8 w-full md:p-6">
            <LabelList items={tools} />
            <p className="text-slate-600 leading-relaxed">
              The objective of AI training is not simply to introduce employees
              to these tools, but to teach them how to apply them responsibly to
              real business situations.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation steps */}
      <section className="px-12 py-20 bg-[#FAFAFA] lg:px-4">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <SectionHeading eyebrow="Step by step">
              How to Implement AI Training in{" "}
              <span className="text-[#F58A07]">HR Departments</span>
            </SectionHeading>
            <p className="text-[#18181B] leading-relaxed">
              Introducing AI into an HR department requires more than
              purchasing software. Organisations need a structured training
              approach that helps employees understand, adopt, and apply AI
              effectively.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
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

          <p className="text-[#18181B]">
            A continuous learning approach ensures that HR professionals stay
            updated as AI technologies evolve.
          </p>
          <div>
            <Button text={CTA_TEXT} highlight link={"/contact-us"} />
          </div>
        </div>
      </section>

      {/* India + Markrich */}
      <section className="px-12 py-20 lg:px-4">
        <div className="container mx-auto max-w-[1200px] grid grid-cols-2 gap-8 lg:grid-cols-1">
          <div className="flex flex-col gap-5 bg-[#F3FBFF] rounded-2xl p-8 md:p-6">
            <SectionHeading eyebrow="India">
              Why Businesses in India Need{" "}
              <span className="text-[#F58A07]">AI Training for HR</span>
            </SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              India&apos;s corporate sector is experiencing rapid digital
              transformation. Organisations across banking, IT, manufacturing,
              retail, consulting, and other industries are increasingly
              exploring AI to improve operational efficiency.
            </p>
            <p className="text-slate-600 leading-relaxed">
              HR departments play an important role in this transformation
              because they manage the people responsible for adopting new
              technologies.
            </p>
            <p className="font-medium">
              Investing in AI training for HR professionals can help Indian
              organisations:
            </p>
            <CheckList items={indiaBenefits} />
            <p className="text-slate-600 leading-relaxed">
              Organisations that invest in workforce upskilling today can build
              HR teams that are better prepared for the changing demands of the
              business environment.
            </p>
          </div>

          <div className="flex flex-col gap-5 bg-[#FFF7ED] rounded-2xl p-8 md:p-6">
            <SectionHeading eyebrow="Markrich">
              How <span className="text-[#F58A07]">Markrich Solutions</span>{" "}
              Can Help
            </SectionHeading>
            <p className="text-slate-600 leading-relaxed">
              At Markrich Solutions, we understand that successful digital
              transformation begins with developing the right skills within an
              organisation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our corporate AI training programmes are designed to help
              professionals understand emerging technologies and apply them to
              real-world business functions.
            </p>
            <p className="font-medium">
              Through practical, application-oriented learning, organisations
              can equip their HR teams with the skills required to:
            </p>
            <CheckList items={markrichSkills} />
            <p className="text-slate-600 leading-relaxed">
              Our training approach focuses on connecting technology with
              practical business applications, helping professionals move
              beyond theoretical knowledge.
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
            Equip Your HR Team for the Future with{" "}
            <span className="text-[#F58A07]">Corporate AI Training</span>
          </h2>
          <p className="max-w-[800px] text-[#18181B]">
            Artificial Intelligence is reshaping the future of Human Resource
            Management. From recruitment and employee engagement to workforce
            planning and performance analysis, AI is helping HR professionals
            work more efficiently and make informed decisions.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            However, successful AI adoption depends on more than technology. It
            requires employees who understand how to use these tools
            effectively, responsibly, and strategically.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            Investing in AI training in HR is an important step towards building
            a smarter, more productive, and future-ready workforce.
          </p>
          <p className="max-w-[800px] text-[#18181B]">
            With the right corporate AI training, organisations can empower HR
            professionals to embrace innovation while keeping people at the
            centre of business decisions.
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

export default AITrainingInHR;
