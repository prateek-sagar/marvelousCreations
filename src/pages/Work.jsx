import React, { useState } from "react";
import workBg from "../assets/workBackground.jpg";
import work1 from "../assets/works/orderWork1.jpeg";
import work2 from "../assets/works/orderWork2.jpeg";
import work3 from "../assets/works/orderWork3.jpeg";
import work4 from "../assets/works/orderWork4.jpeg";
import work5 from "../assets/works/orderWork5.jpeg";
import work6 from "../assets/works/SelfWork1.jpeg";
import ImageShow from "./components/ImageShow";

export default function Work() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const openImage = (event) => {
    setCurrentImage(event);
    setShowImageModal(true);
  };
  const handleClose = () => {
    setShowImageModal(!showImageModal);
  };
  return (
    <div
      id="work"
      style={{
        backgroundImage: `url(${workBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full min-h-screen h-[880px] relative bg-neutral-200 flex flex-col"
    >
      <div className="h-full mx-10 md:mx-[80px] py-4 xl:py-8 2xl:mx-[240px]">
        <div className="w-24 h-10 bg-cyan-600 rounded-full flex justify-center items-center cursor-pointer py-4 top-4 right-10 md:right-[80px] 2xl:right-[240px] hover:scale-125 duration-300 absolute">
          <p className="text-white text-sm font-bold font-roboto">Order Now</p>
        </div>

        <div className="w-full h-[10%] flex flex-col md:flex-row items-center">
          {/* heading and button */}
          <div className="w-full h-full flex justify-center items-center my-2 text-black text-[48px] lg:text-[64px] font-bold font-roboto">
            Works
          </div>
        </div>
        {/* work gallery */}
        <div className="h-[90%] max-h-[720px] my-10">
          {/* section 1 */}
          <div className="w-full h-1/2 relative flex justify-center">
            <div className="w-2/5 h-4/5 bg-neutral-600 overflow-hidden rounded-[10px] left-0 hover:scale-105 duration-300 absolute cursor-pointer z-[2] hover:z-10">
              <img
                onClick={() => {
                  openImage(work1);
                }}
                src={work1}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-2/5 h-4/5 bg-neutral-400 overflow-hidden rounded-[10px] top-10 hover:scale-105 duration-300 absolute cursor-pointer z-[4] hover:z-10">
              <img
                onClick={() => {
                  openImage(work2);
                }}
                src={work2}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-2/5 h-4/5 bg-neutral-600 overflow-hidden rounded-[10px] right-0 hover:scale-105 duration-300 absolute cursor-pointer z-[2] hover:z-10">
              <img
                onClick={() => {
                  openImage(work4);
                }}
                src={work4}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className="w-full h-1/2 flex justify-center relative">
            <div className="w-2/5 h-4/5 bg-neutral-600 overflow-hidden rounded-[10px] left-0 hover:scale-105 duration-300 absolute cursor-pointer z-[2] hover:z-10 flex justify-center items-center">
              <img
                onClick={() => {
                  openImage(work3);
                }}
                src={work3}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-2/5 h-4/5 bg-neutral-400 overflow-hidden rounded-[10px] top-10 hover:scale-105 duration-300 absolute cursor-pointer z-[4] hover:z-10">
              <img
                onClick={() => {
                  openImage(work5);
                  showImageModal(true);
                }}
                src={work5}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-2/5 h-4/5 bg-neutral-600 overflow-hidden rounded-[10px] right-0 hover:scale-105 duration-300 absolute cursor-pointer z-[2] hover:z-10">
              <img
                onClick={() => {
                  openImage(work6);
                }}
                src={work6}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <ImageShow
        onClose={handleClose}
        visible={showImageModal}
        image={currentImage}
      />
    </div>
  );
}
