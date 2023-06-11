import React from "react";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-10 md:pt-4 ">
      <div className="flex flex-col justify-center text-center">
        <p className=" text-red-500 underline text-2xl pb-2">Contact Me</p>
        <p className="pb-4">Send me an Email, or give me a call</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-1">
        <div className="flex gap-10 hover:underline decoration-red-500">
          <FaPhoneAlt className="text-red-500" />
          <a href="tel:004712345678">+47 97603084</a>
        </div>
        <div className="flex gap-5 hover:underline decoration-red-500">
          <FaMailBulk className="text-red-500" />
          <a href="mailto:adrian989@me.com">Adrian989@me.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
