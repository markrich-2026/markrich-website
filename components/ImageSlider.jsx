import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const ImageSlider = () => {
  const images = [
    "/certificates/certificate1.jpg",
    "/certificates/certificate2.jpg",
    "/certificates/certificate3.jpg",
    "/certificates/certificate5.jpg",
  ];

  const trackRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const width = trackRef.current.scrollWidth / 2;

    const controls = animate(x, [0, -width], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
    });

    return () => controls.stop();
  }, []);

  return (
    <section className="py-20 px-12 lg:px-6 bg-[#FFF7ED]">
      <div className="container mx-auto max-w-[1200px] flex flex-col gap-10">
        {/* Upper Text */}
        <div className="flex flex-col gap-4 max-w-[700px]">
          <h6 className="text-[#ED3630] font-medium text-sm">
            Our Achievers
          </h6>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#18181B]">
            Certified <span className="text-[#F58A07]">Professionals</span>
          </h2>

          <p className="text-[#18181B]">
            Learners who successfully completed our programs and received
            certifications.
          </p>
        </div>

        {/* Smooth Infinite Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            style={{ x }}
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100%/3-1rem)] bg-orange-300 rounded-[24px] p-2 shadow-sm"
              >
                <img
                  src={img}
                  alt="Certified learner"
                  className="w-full h-64 object-cover rounded-[18px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
