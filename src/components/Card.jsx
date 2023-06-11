import React from "react";

export default function Card({ data }) {
  return (
    <div>
      <div>
        <img src={data.img} alt="CMS Website" className="w-60 h-[380px] rounded-lg" />
      </div>
      <div className="max-w-[250px] pt-4">
        <p className="text-red-400 text-xl pb-2 underline">{data.title}</p>
        <p className="min-h-[150px]">{data.description}</p>
        <div className="flex justify-around mt-2">
          <a href={data.github} className="">
            <button className="w-24 h-8 bg-red-500">Github</button>
          </a>
          <a href={data.liveSite} className="">
            <button className="w-24 h-8 bg-red-500">Live Site</button>
          </a>
        </div>
      </div>
    </div>
  );
}
