import React from "react";
import Navbar from "./components/Navbar";
// import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";
import slide_image_1 from "../assets/slider_image_1.jpg";
import slide_image_2 from "../assets/slider_image_2.jpg";
import logo from "../assets/Logo.jpeg";

export default function Home() {
  const heroSectionImages = [{ url: slide_image_1 }, { url: slide_image_2 }];

  return (
    <>
      <div className="w-full h-fit relative" id="home">
        <div
          style={{
            background: `url(${heroSectionImages[0].url})`,
            backgroundSize: "cover",
          }}
          alt="Pencil Sketch"
          className="w-full h-full left-0 top-0 bg-zinc-300 absolute"
        />
        <div className="h-full mx-10 md:mx-[80px] py-4 xl:py-8 2xl:mx-[240px]">
          {/* header */}
          <div className="w-full h-fit flex flex-col items-center justify-between lg:flex-row">
            <Navbar />
            <div className="w-fit mt-10 lg:mt-0 h-fit flex justify-center items-center bg-white relative rounded-full overflow-hidden">
              <img src={logo} width={200} />
            </div>
          </div>
          <div className="relative my-12">
            <h1 className=" text-black text-[40px] md:text-[50px] font-bold lg:text-[80px] stroke-white">
              Vaishnavee Verma
            </h1>
            <h2 className=" text-black text-3xl md:text-4xl lg:text-5xl font-medium">
              The artist
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
