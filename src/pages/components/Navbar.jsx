import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
export default function Navbar() {
  const [menuLink, setmenuLink] = useState(false);
  const menuOptions = [
    { id: 1, value: "Home", linkTo: "#home" },
    { id: 2, value: "Works", linkTo: "#work" },
    { id: 3, value: "About Us", linkTo: "#aboutUs" },
    { id: 4, value: "Pricing", linkTo: "#pricing" },
    { id: 5, value: "Contact Us", linkTo: "#contactUs" },
  ];
  const menuBar = menuOptions.map(({ id, value, linkTo }) => (
    <li
      className="px-1 py-1 w-fit text-2xl font-normal cursor-pointer font-roboto"
      key={id}
    >
      <a href={linkTo}>{value}</a>
    </li>
  ));
  function handleVerticalNavElements() {
    setmenuLink(!menuLink);
  }
  if (window.innerWidth <= 768) {
    return (
      <div className="fixed bg-black top-0 w-full flex items-center h-10 py-2 px-4 justify-between z-10">
        <div
          onClick={handleVerticalNavElements}
          className="text-gray-200 pr-4 z-20 cursor-pointer"
        >
          {menuLink ? (
            <FaX size={25} color="white" />
          ) : (
            <FaBars size={25} color="white" />
          )}
        </div>
        {menuLink && (
          <ul className="flex flex-col text-white bg-gradient-to-b from-black to-gray-800 absolute items-center justify-center w-full h-screen top-0 left-0">
            {menuBar}
          </ul>
        )}
      </div>
    );
  } else {
    return (
      <ul className="h-fit flex min-w-[640px] text-black max-w-[1072px] flex-row justify-evenly relative">
        {menuBar}
      </ul>
    );
  }
}
