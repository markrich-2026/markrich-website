import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Partnering with Markrich Solutions has surely been a game changer for us. The Data Analytics workshop was very engaging, with training tailored to our specific needs. The instructors are passionate educators, and the team is extremely responsive.",
    name: "Prajakta S",
    role: "Head HR (Business Services)",
    company: "Hinduja Global Solutions Ltd.",
  },
  {
    quote:
      "I attended the 1-day Generative AI training and it was an excellent learning experience. The session was comprehensive, practical, and well structured. The hands-on use cases gave me the confidence to apply GenAI solutions immediately.",
    name: "Senior Manager",
    role: "Finance",
    company: "BFSI",
  },
  {
    quote:
      "The AI for HR training was truly a game-changer. The facilitator created an engaging environment with practical real-world examples that I can immediately apply.",
    name: "Sr. Group Manager",
    role: "HR",
    company: "BFSI",
  },
  {
    quote:
      "Training was excellent. The clarity of fundamentals was outstanding. This was truly a training with excellence in practice. I polished my Financial Modeling skills.",
    name: "Head Finance",
    role: "Finance",
    company: "Manufacturing",
  },
  {
    quote:
      "Overall a very satisfying learning experience. The live Excel working by the trainer made the session very engaging and helped focus on key topics.",
    name: "GM",
    role: "HR",
    company: "Manufacturing",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          What Our <span className="text-[#F58A07]">Clients Say</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Hear directly from professionals who have experienced our training and
          seen real impact
        </p>
      </div>
      <motion.div
        className="flex"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -100 && index < testimonials.length - 1) {
            setIndex(index + 1);
          }
          if (info.offset.x > 100 && index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        {testimonials.map((item, i) => (
          <div key={i} className="min-w-full flex justify-center px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-4xl border border-orange-500">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                “{item.quote}”
              </p>

              <div className="mt-4">
                <p className="font-semibold text-[#F58A07]">{item.name}</p>
                <p className="text-sm font-semibold text-red-600">
                  {item.role} – {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-[#F58A07] w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
