import React from "react";
import { useState } from "react";
import Section from "@/components/Section";
import { CTASecondary } from "@/components/CTA";
import CertifiedProfessionalsCarousel from "@/components/ImageSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";

const GalleryPage = () => {
  const faqs = [
    {
      question: "What types of corporate training do you offer?",
      answer:
        "We deliver customized programs in Finance, Generative AI, Analytics and Business Excellence—designed for real workplace application.",
    },
    {
      question: "Do you conduct customized trainings?",
      answer:
        "Yes, we customize our training solutions to address your organization’s requirements. We even customize the trainings based on the roles of the participants. Get in touch with us to understand how our training solutions can be tailored to your needs.",
    },
    {
      question: "What is the duration of the training?",
      answer:
        "Depending on the content covered, our trainings range from 4 hours to 2 days. Almost all our trainings include a lot of hands-on practice, case studies and activities.",
    },
    {
      question: "What delivery formats do you support?",
      answer:
        "We offer Onsite, Virtual Instructor-Led Training (VILT), and Hybrid delivery. We recommend the best format based on audience size, duration, and hands-on requirements.",
    },
    {
      question: "Do you provide post-training support or resources?",
      answer:
        "Yes. Depending on the engagement, we provide handouts, practice exercises, optional assignments, and a post-training Q&A or clinic to support implementation.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* Page Header / Hero */}
      <Section
        background
        // metaTitle={"Gallery"}
        subText={
          "Explore moments from our training programs, workshops, and corporate engagements that reflect our commitment to excellence and continuous learning."
        }
      >
        <span className="text-[#F58A07]">Our</span> Gallery
      </Section>

      {/* Gallery Section */}
      <section className="py-24 px-12 lg:px-6">
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
          {/* Section Heading */}
          <div className="text-left flex flex-col gap-3">
            <h6 className="text-[#ED3630] font-medium text-sm">
              Glimpse of Our Trainings
            </h6>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#18181B]">
              Training at Markrich Solutions -{" "}
              <span className="text-[#F58A07]">
                Learning that Builds Leaders
              </span>
            </h2>
            <p>
              Meet the passionate professionals driving excellence and shaping
              success at Markrich Solutions.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-4 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {[
              "/team/team1.jpg",
              "/team/team2.jpg",
              "/team/team3.jpg",
              "/team/team4.jpg",
              "/team/team5.jpg",
              "/team/team6.jpg",
              "/team/team7.jpg",
              "/team/team8.jpg",
              "/training/training1.png",
              "/training/training2.png",
              "/training/training3.jpg",
              "/training/training4.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-500 hover:shadow-lg"
              >
                <img
                  src={img}
                  alt={`Life at Markrich ${index + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      <CertifiedProfessionalsCarousel />

      <CTASecondary />

      <section className="py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-10 text-center">
            Frequently Asked <span className="text-[#F58A07] ">Questions</span>
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
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-[#F58A07]"
                        : "text-[#18181B]"
                    }`}
                  >
                    {faq.question}
                  </span>
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
    </>
  );
};

export default GalleryPage;
