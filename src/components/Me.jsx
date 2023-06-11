import React from "react";
import addi from "../components/images/addi.jpg";

export default function Me() {
  return (
    <div className="py-6 flex justify-center">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-x-12 lg:gap-x-52 px-8 gap-y-6 max-w-[1000px]">
        <div className="flex flex-col gap-y-1 mx-auto">
          <p className="text-red-500">Hello there, my name is</p>
          <h1 className="text-2xl md:text-4xl">Adrian Fredriksen</h1>
          <p className=" text-red-300 text-lg max-w-[500px]">
            Welcome to my frontend web development portfolio! I'm dedicated to crafting captivating user experiences through clean code and stunning
            designs. Explore my work and let's bring your ideas to life on the web!
            <br />
            Focusing on Next.js and TailwindCSS for the moment.
          </p>
        </div>
        <img className="w-72 rounded-lg mx-auto" src={addi} alt="test" />
      </div>
    </div>
  );
}
