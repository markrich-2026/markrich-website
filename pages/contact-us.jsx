import SectionHero from "@/components/Section";
import React, { useState } from "react";
import locationIcon from "@/public/icons/location-icon.svg";
import mailIcon from "@/public/icons/mail-icon.svg";
import phoneIcon from "@/public/icons/phone-icon.svg";
import Button from "@/components/Button";
import contactImage from "@/public/images/contact-image.svg";
import axios from "axios";
const contactInfo = [
  {
    icon: phoneIcon,
    title: "Phone",
    content:
      "Lorem ipsum dolor sit amit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
  },
  {
    icon: mailIcon,
    title: "Mail us",
    content: "mark@markrich.in",
  },
  {
    icon: locationIcon,
    title: "Call us",
    content: "+91-9702551632",
  },
];

const ContactUs = () => {
  let [useInput, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  });
  const [mailSent, setmailSent] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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
            setTimeout(() => {
              setSuccess(false);
              setError(false);
            }, 5000);
          } else {
            setmailSent(false);
            setError(result.data.message);
            setSuccess(false);
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
          console.log("FAILED SENDING");
          setError(true);
        }
        // setInput({
        //   mailSent: result.data.sent,
        // });
      })
      .catch((error) => setError(error.message));
  };

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

              <div>
                <Button text={"Submit"} highlight type={"submit"} />
              </div>
            </form>
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
            <img className="w-full object-fit" src={contactImage.src} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
