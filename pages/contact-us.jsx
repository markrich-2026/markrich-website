import SectionHero from "@/components/Section";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useRef } from "react";
import locationIcon from "@/public/icons/location-icon.svg";
import mailIcon from "@/public/icons/mail-icon.svg";
import phoneIcon from "@/public/icons/phone-icon.svg";
import Button from "@/components/Button";
import contactImage from "@/public/images/contact-image.svg";
import axios from "axios";
import Image from "next/image";
const contactInfo = [
  {
    icon: phoneIcon,
    title: "Phone",
    content: "+91-9702551632",
  },
  {
    icon: mailIcon,
    title: "Mail us",
    content: "mark@markrich.in",
  },
  {
    icon: locationIcon,
    title: "Reach us at",
    content: "Mumbai",
  },
];

const ContactUs = () => {
  let [useInput, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
    token: "",
  });
  const [mailSent, setmailSent] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const captchaRef = useRef(null);

  // const [isChecked, setChecked] = useState(false);
  const handleChange = (event) => {
    setInput({ ...useInput, [event.target.name]: event.target.value });
  };
  // const handleCaptchaChange = (token) => {
  //   console.log(token);
  //   console.log(isToken);
  //   if (!token) {
  //     setTokenerror("You must verify the captcha");
  //     return;
  //   }
  //   console.log(token.length);
  //   if (token.length > 0) {
  //     setToken(token);
  //     console.log(isToken);
  //     // const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"}&token=${token}`;
  //     // const response = await axios.post(googleVerifyURL)
  //     // const {sucess} = response.data
  //     // if(sucess) {
  //     //   return res.json({sucess: true})
  //     // }
  //     setDisabled(false);
  //   }
  //   setTokenerror("");
  // };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    useInput.token = token;
    console.log(useInput);

    axios({
      method: "post",
      url: `${process.env.API_PATH}`,
      headers: { "content-type": "application/json" },
      data: useInput,
    })
      .then((result) => {
        console.log(result, "THIS IS WHAT YOU GET AFTER PHP ENDPOINT HIT");
        if (result.status === 200) {
          console.log("SENTTT MAILLL");
          if (result.data.sent) {
            setmailSent(true);
            setSuccess(result.data.message);
            setError(false);
            setLoading(false);
            setTimeout(() => {
              setSuccess(false);
              setError(false);
            }, 5000);
          } else {
            setmailSent(false);
            setError(result.data.message);
            setSuccess(false);
            setLoading(false);
            setTimeout(() => {
              setSuccess(false);
              setError(false);
            }, 5000);
          }
          setInput({
            fname: "",
            lname: "",
            email: "",
            message: "",
            number: "",
          });
        } else {
          // console.log("FAILED SENDING");
          setLoading(false);
          setError(true);
        }
        // setInput({
        //   mailSent: result.data.sent,
        // });
      })
      .catch((error) => setError(error.message));
  };
  function onChange(value) {
    // console.log("Captcha value:", value);
  }
  return (
    <>
      <section className="min-h-[70vh] flex items-center justify-center px-12 py-20 lg:px-2">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-20 px-2 items-center lg:flex-col">
          <div className="flex flex-col gap-8 max-w-[670px] w-full lg:max-w-none">
            {/* hero content */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[#ED3630] font-medium md:text-sm">
                Contact us
              </h6>
              <h1 className="text-6xl font-semibold tracking-tighter md:text-4xl">
                Reach Out and{" "}
                <span className="text-[#F58A07]">Connect with Us </span>
                Today! Success
              </h1>
            </div>
            <p className="text-slate-500">
              At Markrich Solutions LLP. we pride ourselves on our streamlined
              and efficient approach to delivering exceptional results. Our
              proven process ensures that every project we undertake is executed
              with precision and professionalism.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-full max-w-[400px] lg:max-w-none">
            {contactInfo.map((ele, ind) => (
              <div
                className="flex items-center gap-6 sm:items-start sm:gap-5"
                key={ind}
              >
                <div className="bg-[#fee5c852] rounded-full p-4">
                  <img
                    className="max-w-[30px] sm:max-w-[20px]"
                    src={ele.icon.src}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-md font-medium">{ele.title}</h5>
                  <p className="text-sm text-slate-500">{ele.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-[70vh] flex items-center justify-center px-12 py-20 lg:px-2">
        <div className="container mx-auto max-w-[1200px] flex justify-between gap-20 px-2 items-center md:flex-col">
          <div className="flex flex-col gap-8 max-w-[670px] w-full lg:max-w-none">
            {/* hero content */}
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl font-semibold tracking-tighter md:text-4xl">
                Get in touch
              </h1>
            </div>
            <p className="text-slate-500">
              We are here to assist you and provide the information you need.
            </p>
            {/* form */}
            <form
              action=""
              method="post"
              className="flex flex-col gap-6"
              onSubmit={handleFormSubmit}
            >
              <div className="flex gap-5 justify-between sm:flex-col">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="first-name"
                    className="text-gray-700 text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    value={useInput.fname}
                    id="fname"
                    name="fname"
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-xs w-full"
                    placeholder="First name"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="last-name"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    value={useInput.lname}
                    type="text"
                    id="lname"
                    name="lname"
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-xs w-full"
                    placeholder="Last name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  value={useInput.email}
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-xs w-full"
                  placeholder="test@gmail.com"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="number"
                  className="text-gray-700 text-sm font-medium"
                >
                  Number
                </label>
                <input
                  value={useInput.number}
                  type="tel"
                  id="number"
                  name="number"
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-xs w-full text-slate-300"
                  placeholder="Put your demo number"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-gray-700 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  value={useInput.message}
                  id="message"
                  name="message"
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-xs w-full min-h-[100px]"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <ReCAPTCHA
                sitekey="6LfBF5knAAAAADFYohGAocEtFlrUZQQ8-l8QbQzN"
                onChange={onChange}
                ref={captchaRef}
              />
              <div>
                <Button text={"Submit"} highlight type={"submit"} />
              </div>
            </form>
            {loading && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
            {success && (
              <div
                className={`w-full px-2 py-3 bg-lime-100 text-lime-600 rounded-md text-sm`}
              >
                <p>{success}</p>
              </div>
            )}
            {error && (
              <div className="w-full px-2 py-3 bg-red-100 text-red-600 rounded-md text-sm">
                <p>{error}</p>
              </div>
            )}
          </div>
          <div className="flex w-full md:hidden">
            <Image className="w-full object-fit" src={contactImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
