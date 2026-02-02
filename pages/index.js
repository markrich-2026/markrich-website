import Image from "next/image";
import { NextSeo } from "next-seo";
import heroImg from "@/public/images/hero-image-small.webp";
import trainingIcon from "@/public/icons/training-icon.svg";
import analyticsIcon from "@/public/icons/analytics-icon.svg";
import behaviouralIcon from "@/public/icons/behavioural-icon.svg";
import trainersIcon from "@/public/icons/trainers-icon.svg";
import approachIcon from "@/public/icons/approach-icon.svg";
import interactiveIcon from "@/public/icons/interactive-icon.svg";
import { Card, FeatureCard } from "@/components/Card";
import { TabsComponent } from "@/components/Tabs";
import Link from "next/link";
import LogoCarousel from "@/components/LogoCarousel";

const trainingAreas = [
  {
    icon: trainingIcon,
    title: "Finance Training",
    text: "Empower your workforce: Finance training from business acumen to bond mathematics, tailored solutions to enhance Financial Acumen and meet your needs.",
  },
  {
    icon: analyticsIcon,
    title: "Analytics Training",
    text: "Tailor-made Finance training covering business acumen, cost optimization, stochastic calculus, and more. Fulfill your workforce's needs with our solutions.",
  },
  {
    icon: behaviouralIcon,
    title: "Behavioural Training",
    text: "Enhance organizational development through behavioral/cultural change: Negotiation, Leadership, First-Time Managers, Communication, Accountability, Presentation, and more training programs available.",
  },
];
const features = [
  {
    icon: trainersIcon,
    title: "Expert Trainers",
    text: "Benefit from industry professionals with extensive experience in their domains. ",
  },
  {
    icon: approachIcon,
    title: "Customized Approach",
    text: "Our customized training programs are tailored to your specific needs, ensuring maximum relevance and effectiveness.",
  },
  {
    icon: interactiveIcon,
    title: "Interactive Learning",
    text: "Experience interactive and experiential training sessions that foster active participation and knowledge retention.",
  },
];
const titles = [
  {
    title: "Finance Solutions",
    value: "tab1",
  },
  {
    title: "Analytics solutions",
    value: "tab2",
  },
  {
    title: "Leadership development solutions",
    value: "tab3",
  },
];

const tabData = [
  {
    tab: "tab1",
    data: [
      {
        title: "Finance for Non-Finance",
        link: "",
      },
      {
        title: "Cost optimization and management",
        link: "",
      },
      {
        title: "Working capital management",
        link: "",
      },
      {
        title: "Personal finance",
        link: "",
      },
      {
        title: "Investment banking",
        link: "",
      },
      {
        title: "Treasury management",
        link: "",
      },
      {
        title: "Ind As, US GAAP, IFRS",
        link: "",
      },
      {
        title: "Taxation",
        link: "",
      },
      {
        title: "Corporate finance",
        link: "",
      },
      {
        title: "Risk management, compliance",
        link: "",
      },
      {
        title: "Bond mathematics, stochastic calculus",
        link: "",
      },
      {
        title: "Trade life cycle",
        link: "",
      },
      {
        title: "SOX, COSCO framework",
        link: "",
      },
      {
        title: "Financial Markets/ Asset Classes",
        link: "",
      },
    ],
  },
  {
    tab: "tab2",
    data: [
      {
        title: "Business analytics",
        link: "",
      },
      {
        title: "Data visualization",
        link: "",
      },
      {
        title: "Power BI, Tableau",
        link: "",
      },
      {
        title: "Analytics for HR professionals",
        link: "",
      },
      {
        title: "Customer analytics",
        link: "",
      },
      {
        title: "Machine learning",
        link: "",
      },
      {
        title: "Advanced MS Excel training",
        link: "",
      },
    ],
  },
  {
    tab: "tab3",
    data: [
      {
        title: "First time manager training",
        link: "",
      },
      {
        title: "Handling difficult conversations",
        link: "",
      },
      {
        title: "Accountability",
        link: "",
      },
      {
        title: "Communication skills",
        link: "",
      },
      {
        title: "Team building workshops",
        link: "",
      },
      {
        title: "Campus to corporate",
        link: "",
      },
      {
        title: "Business communications",
        link: "",
      },
      {
        title: "Team off-site activities",
        link: "",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* hero section */}
      <NextSeo
        title="Empower Your Team with Markrich Solutions - Enhance Financial Acumen, Data-Driven Decision-Making, and Positive Work Culture"
        description="Equip your employees with essential skills to thrive in today's competitive environment. Enhance financial acumen, leverage data-driven decision-making, and foster a positive work culture with Markrich Solutions."
        canonical="https://markrich.in"
        openGraph={{
          url: "https://markrich.in",
          title:
            "Empower Your Team with Markrich Solutions - Enhance Financial Acumen, Data-Driven Decision-Making, and Positive Work Culture",
          description:
            "Equip your employees with essential skills to thrive in today's competitive environment. Enhance financial acumen, leverage data-driven decision-making, and foster a positive work culture with Markrich Solutions.",
          images: [
            {
              url: "https://cdn.discordapp.com/attachments/451417960196603906/1136557885766258688/og-thumb.jpg",
              width: 1200,
              height: 600,
              alt: "Markrich company header",
              type: "image/jpg",
            },
          ],
          siteName: "Markrichsolutions",
        }}
        twitter={{
          handle: "@handle",
          site: "@markrichsolutions",
          cardType: "summary_large_image",
        }}
      />
      <main
        className={`flex min-h-[90vh] px-12 py-6 lg:px-2 items-center justify-center bg-[url('/images/section-background-2.svg')]`}
      >
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-12 px-2 items-center lg:flex-col-reverse md:flex-col  lg:items-center lg:justify-center">
          <div className="flex flex-col gap-8 max-w-[600px] lg:max-w-none">
            {/* hero content */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[#ED3630] font-medium md:text-sm">
                Finance , AI, Analytics and Business Excellence Training
              </h6>
              <h1 className="text-6xl font-semibold tracking-tighter md:tracking-tight md:leading-[1.1]  md:text-[2.3rem]">
                Welcome to <span className="text-[#F58A07]">Markrich</span>{" "}
                Solutions
              </h1>
            </div>
            <p className="text-[#18181B]">
              Equip your employees with essential skills to thrive in
              today&apos;s competitive environment. Enhance financial acumen,
              leverage data-driven decision-making, and foster a positive work
              culture with Markrich Solutions.
            </p>
            <hr />

            <button className="text-[#ED3630] font-semibold max-w-fit">
              <Link href={"/about-us"}>
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
          <div className="lg:max-h-[600px] sm:max-h-[300px] flex">
            {/* Hero image */}
            <img src={heroImg.src} className="w-full object-contain" />
          </div>
        </div>
      </main>


      <section className="w-full px-12 py-20 bg-[#FAFAFA] lg:px-2">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
            {/* Metric 1 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              {/* <img
                src="/logos/feedback.jpg"
                alt="Participant Feedback"
                className="h-18 w-18 mb-4"
              /> */}
              <h3 className="text-4xl font-semibold text-[#F58A07]">4.8 / 5</h3>
              <p className="mt-2 text-lg font-medium">
                Average Participant Feedback
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Consistently high ratings across training programs
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              {/* <img
                src="/icons/learners.png"
                alt="Learners Upskilled"
                className="h-14 w-14 mb-4"
              /> */}
              <h3 className="text-4xl font-semibold text-[#F58A07]">3000+</h3>
              <p className="mt-2 text-lg font-medium">Learners Upskilled</p>
              <p className="mt-1 text-sm text-gray-500">
                Professionals trained through hands-on programs
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              {/* <img
                src="/logos/industry.jpg"
                alt="Multi Industry Presence"
                className="h-18 w-18 mb-4"
              /> */}
              <h3 className="text-4xl font-semibold text-[#F58A07]">Multi-Industry</h3>
              <p className="mt-2 text-lg font-medium">Training Experience</p>
              <p className="mt-2 text-sm text-gray-500">
                Manufacturing, BFSI, Media, IT, Printing & Chemicals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* areas of work */}
      <section className="flex min-h-[80vh] px-12 py-6 pb-24 items-center justify-start lg:px-2 lg:min-h-[50vh] md:py-24">
        <div className="container mx-auto max-w-[1200px] flex flex-col justify-start gap-[4rem] px-2 items-center">
          <div className="flex flex-col gap-4 items-center">
            {/* <h6 className="text-[#ED3630] font-medium md:text-sm">
              Training areas
            </h6> */}
            <h2 className="text-5xl font-semibold tracking-tighter text-center md:text-4xl">
              Our Core
              <span className="text-[#F58A07]"> training</span> areas
            </h2>
          </div>
          <div className="flex gap-10 w-full items-center justify-center md:flex-col md:text-center">
            {trainingAreas.map((ele, ind) => (
              <Card
                key={ind}
                title={ele.title}
                icon={ele.icon}
                text={ele.text}
                align={"md:items-center"}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* features section why choose us */}
      <section className="flex min-h-screen bg-[url('/images/features-bg.svg')] bg-cover bg-no-repeat px-12 py-6 lg:px-2">
        <div className="container mx-auto max-w-[1200px] flex flex-col justify-center gap-[5rem] px-2 ">
          <div className="flex flex-col gap-8 max-w-[650px]">
            {/* hero content */}
            <div className="flex flex-col gap-4 ">
              <h6 className="text-[#ED3630] font-medium md:text-sm">
                Why Choose Us?
              </h6>
              <h2 className="text-5xl font-semibold tracking-tight leading-tight md:text-4xl">
                Unlock your team&apos;s potential with our{" "}
                <span className="text-[#F58A07]"> training expertise </span>
              </h2>
            </div>
            {/* <p className="text-[#18181B]">
              Equip your employees with essential skills to thrive in today's
              competitive environment. Enhance financial acumen, leverage
              data-driven decision-making, and foster a positive work culture
              with markrichsolutions.
            </p> */}
          </div>
          <div className="flex gap-10 w-full lg:flex-col">
            {features.map((ele, ind) => (
              <FeatureCard
                key={ind}
                title={ele.title}
                icon={ele.icon}
                text={ele.text}
              />
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel/>

      {/* tabs view training areas */}
      {/* <section className="flex min-h-[100vh] py-20 px-12 lg:px-2">
        <div className="container mx-auto max-w-[1200px] flex flex-col justify-center gap-[4rem] px-2 items-center ">
          <div className="flex flex-col gap-4 items-center">
            <h6 className="text-[#ED3630] font-medium">Training areas</h6>
            <h2 className="text-5xl font-semibold tracking-tighter text-center leading-11 max-w-[700px] md:text-4xl">
              A collection of our{" "}
              <span className="text-[#F58A07]"> Training Solutions</span>
            </h2>
          </div>
          <TabsComponent titles={titles} tabData={tabData} />
        </div>
      </section> */}
      {/* contact us section */}
    </>
  );
}
