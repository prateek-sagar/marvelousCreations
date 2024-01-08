import React, { useState } from "react";
import work1 from "../assets/works/orderWork1.jpeg";
import work2 from "../assets/works/orderWork2.jpeg";
import work3 from "../assets/works/orderWork3.jpeg";
import work4 from "../assets/works/orderWork4.jpeg";
import work5 from "../assets/works/orderWork5.jpeg";
import work6 from "../assets/works/SelfWork1.jpeg";
import work7 from "../assets/works/orderWork6.jpeg";
import ImageShow from "./components/ImageShow";

export default function Work() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const section_one = [
    {
      id: 1,
      value: work1,
    },
    {
      id: 2,
      value: work2,
    },
    {
      id: 3,
      value: work3,
    },
    {
      id: 4,
      value: work7,
    },
    {
      id: 5,
      value: work5,
    },
    {
      id: 6,
      value: work4,
    },
    {
      id: 7,
      value: work6,
    },
  ];
  const openImage = (event) => {
    setCurrentImage(event);
    setShowImageModal(true);
  };
  const handleClose = () => {
    setShowImageModal(!showImageModal);
  };

  const imagesShow_1 = section_one.map(({ id, value }) => (
    <div className="h-full flex justify-center items-center">
      <img key={id} src={value} className="rounded-lg my-2 max-h-[500px]" />
    </div>
  ));

  return (
    <div id="work" className="w-full min-h-screen relative flex0 flex-col">
      <div className="absolute -z-[1] bg-black w-full h-full"></div>

      <div className="h-full mx-10 md:mx-[80px] py-4 xl:py-8 2xl:mx-[240px] sticky top-10">
        <h1 className="text-white w-full text-[64px] md:text-[96px] font-roboto font-black grid text-center">
          Work
        </h1>
        {/* work gallery */}
        <div className="auto-grid">{imagesShow_1}</div>
        <div className="w-full h-10  rounded-full flex justify-center items-center">
          <div className="text-white bg-cyan-600 rounded-full h-full w-24 text-sm flex justify-center items-center font-bold font-roboto cursor-pointer hover:scale-125 duration-300">
            Order Now
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
