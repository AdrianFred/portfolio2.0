import React from "react";
import Card from "../components/Card";
import Epari from "../components/images/Epari.png";
import Holidaze from "../components/images/Holidaze.png";
import AuctionHouse from "../components/images/AuctionHouse.png";

const Experience = () => {
  const data = [
    {
      img: Holidaze,
      title: "Holidaze Booking",
      description: "Website for booking venues around the world. Exam 2023 at Noroff",
      github: "https://github.com/AdrianFred/project-exam2023",
      liveSite: "https://holidaze-adrian.netlify.app/",
    },
    {
      img: Epari,
      title: "Epari Webshop",
      description: "A fully functional webshop made with React and tailwind",
      github: "https://github.com/AdrianFred/webshop",
      liveSite: "https://illustrious-palmier-be84fb.netlify.app/",
    },
    {
      img: AuctionHouse,
      title: "Auction House",
      description: "An auction website made with Nextjs and tailwind, made for exam 2022 at Noroff",
      github: "https://github.com/AdrianFred/projectexam2022",
      liveSite: "https://auction-houses.netlify.app",
    },
  ];

  return (
    <div name="experience" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-14 text-red-500 underline text-2xl text-center">
          <p>My Projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-14 md:gap-24">
          {data.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
