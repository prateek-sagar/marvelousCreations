import React, { useState } from "react";
import backgroundImg from "../assets/contactBackground.jpg";
import { FaInstagram, FaFacebook, FaYoutube, FaBlog } from "react-icons/fa6";
import logo from "../assets/Logo.jpeg";
export default function ContactUs() {
  const [formstate, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formstate, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "63490405-8f7f-4850-b5f0-bf39a88a49a6",
      To: "prateeksagar@yopmail.com",
      From: formstate.email,
      Subject: "This is the subject",
      Body: formstate.body,
    };
    if (window.Email) {
      console.log(config);
      window.Email.send(config).then((message) => alert(message));
    }
  };
  return (
    <div
      id="contactUs"
      className="w-full h-full relative bg-stone-500 flex flex-col justify-center"
      style={{
        background: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90" />
      <div className="h-full mx-10 md:mx-[80px] py-4 xl:py-8 2xl:mx-[240px] z-[2]">
        <div className="w-full h-1/5 flex justify-center items-center text-white text-[48px] font-normal font-roboto lg:text-[64px]">
          Contact Us
        </div>
        <div className="flex flex-col md:flex-row h-4/5 justify-between w-full items-start p-1">
          <div className="w-full h-full md:w-2/5 p-1">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formstate.name || ""}
                className="w-1/2 h-2/5 m-1 rounded-md p-2"
                placeholder="Full Name"
                onChange={changeHandler}
              />
              <input
                type="email"
                name="email"
                value={formstate.email || ""}
                className="w-1/2 h-2/5 m-1 rounded-md p-2"
                placeholder="e-mail"
                onChange={changeHandler}
              />
              <input
                type="text"
                name="body"
                value={formstate.body || ""}
                onChange={changeHandler}
                className="w-full h-[163px] m-1 rounded-md p-2"
                placeholder="message"
              />
              <input
                type="submit"
                value="send"
                className="m-1 rounded-lg px-2 py-1 bg-gray-500 "
              />
            </form>
          </div>
          <div className="w-full h-full md:w-3/5 flex px-2">
            <div className="flex flex-col items-end w-1/2 h-full mx-2">
              <div className="w-full flex justify-center items-center">
                <img src={logo} className="max-w-48 w-full rounded-full" />
              </div>
              <div className="text-white text-base font-normal font-roboto">
                8130499979
              </div>
              <div className="text-white text-base font-normal font-roboto">
                marvelouscreations93@gmail.com
              </div>
            </div>
            <div className="w-1/2 h-full mx-2 flex flex-col justify-center items-center">
              <div className="text-white text-3xl md:text-4xl font-normal font-roboto">
                SiteMap
              </div>
              <ul className="list-disc">
                <li className="text-white text-base font-normal font-roboto cursor-pointer">
                  <a href="#home"></a>Home
                </li>
                <li className="text-white text-base font-normal font-roboto cursor-pointer">
                  <a href="#features"></a>Features
                </li>
                <li className="text-white text-base font-normal font-roboto cursor-pointer">
                  <a href=""></a>Pricing
                </li>
                <li className="text-white text-base font-normal font-roboto cursor-pointer">
                  <a href="#aboutUsSection"></a>About Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex h-1/5 justify-evenly w-full items-start my-2">
          <a
            href="https://www.instagram.com/_marvelous_creations?utm_source=qr&igsh=Nndjd3M5M3N4ejBn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} color="white" />
          </a>
          <a
            href="https://www.facebook.com/Marvelous-Creations-108435875336032/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={40} color="white" />
          </a>
          <a
            href="https://youtube.com/@marvelouscreations512"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={40} color="white" />
          </a>
          <a
            href="https://marvelouscreationsart.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog size={40} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
