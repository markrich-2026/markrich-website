import React from "react";
import Button from "./Button";

export const CTA = ({ title, text, link }) => {
  return (
    <>
      <style jsx>{`
        .cta__bg {
          background: linear-gradient(
              100deg,
              #f58a07 0%,
              rgba(245, 138, 7, 0) 100%
            ),
            linear-gradient(125deg, #ed3630 70%, rgba(245, 138, 7, 0) 100%),
            radial-gradient(
              1612.74% 154.83% at 25.3% 86.45%,
              rgba(245, 138, 7, 0.7) 0%,
              rgba(245, 138, 7, 0) 100%
            );
          backdrop-filter: blur(179px);
        }
      `}</style>

      <div className="flex items-center justify-center py-16 lg:px-2">
        <div className="flex flex-col gap-6 items-center justify-center cta__bg min-h-[332px] max-w-6xl rounded-md container lg:px-4 lg:py-12">
          <div className="flex flex-col gap-4 items-center justify-center text-center sm:text-left">
            <h6 className="text-white font-medium sm:text-sm w-full">
              Get in touch
            </h6>
            <h3 className="text-4xl font-semibold tracking-tight text-white md:text-3xl">
              Unparalleled Solutions for Your Needs
            </h3>
          </div>

          <p className="text-white text-center max-w-[800px] font-medium md:text-left">
            Invest in your team's professional development and witness the
            transformation within your organization. Contact us today to discuss
            how our corporate training programs can empower your workforce to
            reach new heights of success.
          </p>
          <Button text={"Get in touch"} />
        </div>
      </div>
    </>
  );
};

export const CTASecondary = ({}) => {
  return (
    <>
      <style jsx>{`
        .cta__bg {
          background: linear-gradient(
              100deg,
              #f58a07 0%,
              rgba(245, 138, 7, 0) 100%
            ),
            linear-gradient(125deg, #ed3630 70%, rgba(245, 138, 7, 0) 100%),
            radial-gradient(
              1612.74% 154.83% at 25.3% 86.45%,
              rgba(245, 138, 7, 0.7) 0%,
              rgba(245, 138, 7, 0) 100%
            );
          backdrop-filter: blur(179px);
        }
      `}</style>

      <div className="flex items-center justify-center py-20 md:py-12">
        <div className=" flex bg-[url('/images/cta-secondary-bg.svg')] flex-col gap-6  justify-center bg-center bg-cover bg-no-repeat  min-h-[332px] max-w-6xl rounded-md container px-24 lg:px-4 lg:py-20">
          <div className="flex flex-col gap-4">
            <h6 className="text-black font-medium">Get in touch</h6>
            <h3 className="text-4xl font-semibold tracking-tight text-black">
              Reach Out and Connect with Us Today!
            </h3>
          </div>

          <p className="text-black   font-medium">
            Have questions, inquiries, or looking for more information? Contact
            us directly to get in touch with our knowledgeable team. We are here
            to assist you and provide the information you need. Reach out to us
            now and let's start a conversation!
          </p>
          <div className="flex gap-4 md:flex-col">
            <Button text={"Get in touch"} />
            <Button text={"Explore Our training services"} highlight />
          </div>
        </div>
      </div>
    </>
  );
};
