import React from "react";
import profileImg from "../assets/profile.jpeg";

export default function Testmonials() {
  return (
    <div
      id="aboutUs"
      className="w-full h-fit relative bg-zinc-300 flex flex-col justify-center"
    >
      <div className="h-full mx-10 md:mx-[80px] py-4 xl:py-8 2xl:mx-[240px]">
        <div className="w-full flex justify-center items-center text-black text-[48px] font-bold font-roboto">
          Testimonials
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row justify-between items-center">
          <div className="min-w-[200px] w-1/2 h-1/3 rounded-full bg-neutral-400 flex justify-center items-center overflow-hidden md:w-1/3">
            <img src={profileImg} className="h-full w-full object-cover" />
          </div>
          <div className="w-full flex flex-col items-center md:p-8">
            <div className="w-full py-4 text-black text-xl font-bold font-roboto flex text-start md:text-justify">
              Lorem ipsum dolor sit amet consectetur. Orci lectus blandit
              porttitor elit habitasse. Consequat arcu consequat quis euismod
              bibendum gravida at tempor mauris. Et nunc sit morbi pellentesque
              est. Amet at porttitor pulvinar egestas.
            </div>
            <div className="w-fit h-fit px-4 py-3 bg-neutral-500 rounded-full flex justify-center items-center">
              <div className=" text-white text-base font-bold font-roboto">
                Know More About
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
