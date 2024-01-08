import React, { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import workBg from "../assets/slider_image_2.jpg";
import work1 from "../assets/works/orderWork1.jpeg";
import work2 from "../assets/works/orderWork2.jpeg";
import work3 from "../assets/works/orderWork3.jpeg";
import work4 from "../assets/works/orderWork4.jpeg";
import work5 from "../assets/works/orderWork5.jpeg";
import work6 from "../assets/works/SelfWork1.jpeg";
import ImageShow from "./components/ImageShow";
const HorizontalScroll = (props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  console.log(scrollYProgress);
  const x =
    window.innerWidth < 640
      ? useTransform(scrollYProgress, [0, 1], ["1%", "-240%"])
      : window.innerWidth < 1040
      ? useTransform(scrollYProgress, [0, 1], ["1%", "-100%"])
      : useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
  const img_display = props.display.map(({ id, value }) => (
    <img
      src={value}
      key={id}
      className="w-auto min-h-[60vh] md:h-[300px] object-cover rounded-lg shadow-lg shadow-black"
    />
  ));
  return (
    <section ref={targetRef} className="relative h-[200dvh]">
      <div className="sticky top-36 md:top-32 my-4 h-fit flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex justify-between gap-4 w-[200vw] my-4 overflow-visible"
        >
          {img_display}
        </motion.div>
      </div>
    </section>
  );
};
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
  ];
  const section_two = [
    {
      id: 1,
      value: work4,
    },
    {
      id: 2,
      value: work5,
    },
    {
      id: 3,
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
  const features = [
    {
      id: 1,
      value: "Works",
      _top: "0vh",
    },
    {
      id: 2,
      value: "Different type of work",
      _top: "80vh",
    },
    {
      id: 3,
      value: "Perfect gift for anyone",
      _top: "170vh",
    },
    {
      id: 4,
      value: "Ontime Delivery",
      _top: "330vh",
    },
  ];
  const featuresShow = features.map(({ id, value, _top }) => (
    <div
      style={{
        top: _top,
        WebkitTextStroke: "2px black",
      }}
      className="w-full text-white flex justify-start md:justify-center items-center overflow-hidden absolute text-[62px] md:text-[104px] font-black font-roboto z-[2]"
      key={id}
    >
      {value}
    </div>
  ));

  return (
    <div id="work" className="w-full min-h-screen relative flex flex-col">
      <div className="absolute -z-[1] bg-black w-full h-full"></div>

      <div className="h-full mx-10 py-4 xl:py-8 sticky top-20">
        {featuresShow}
        {/* work gallery */}
        <HorizontalScroll display={section_one} />
        <HorizontalScroll display={section_two} />
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
