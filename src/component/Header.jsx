

import { useState } from "react";
// import TextTransition, { presets } from "react-text-transition";
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function Menus() {
    if (open === false) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-red-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-red-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      );
    }
  }
  
  return (
    <div className="back ">
      <div className="flex justify-between h-28 font-Ubuntu shadow-md fixed w-full ">
        <div className="text-5xl ml-20 mt-6 mb-6 space-x-4 tracking-widest cursor-pointer text-white h-10">
          Abhijit
        </div>
        <div
          className="md:hidden cursor-pointer mt-9 mr-10"
          onClick={toggleMenu}
        >
          <Menus />
        </div>
        <div
          className={`lg:flex lg:space-x-20 lg:mr-40 lg:mt-10 lg:mb-6 lg:opacity-100 md:flex md:mt-10 md:space-x-14 md:mr-4 transition-all duration-500 ease-in md:text-white text-black font-semibold h-20 shadow-2xl ${
            open
              ? "absolute text-center font-Ubuntu text-6xl space-y-16 top-20 text-white w-screen h-10 ease-in transition-all duration-300 cursor-pointer pt-16 "
              : "hidden"
          } `}
        >
          <div className="lg:hover:text-red-700  ease-in transition-all duration-300 cursor-pointer hover:text-red-700 h-10">
            Home
          </div>
          <div className="md:hover:text-red-700  ease-in transition-all duration-300 cursor-pointer   hover:text-red-700  h-10">
            About
          </div>
          <div className="lg:hover:text-red-700  ease-in transition-all duration-300 cursor-pointer hover:text-red-700 h-10 ">
            Skill
          </div>
          <div className="lg:hover:text-red-700  ease-in transition-all duration-300 cursor-pointer hover:text-red-700  h-10">
            Projects
          </div>
          <div className="lg:hover:text-red-700  ease-in transition-all duration-300 cursor-pointer hover:text-red-700 ">
            Contact
          </div>
        </div>
      </div>
      <div className="z-30">
      {!open && <FrontPage />}
      </div>
    </div>
  );
}

function FrontPage() {
  const TEXTS = ["Coder", "Developer", "Believer"];
  console.log(open)
  
  return (
    <div className="w-screen h-screen text-white  ">
      <div className="lg:absolute lg:left-56 lg:top-80 lg:space-y-5 md:absolute md:left-20 absolute top-1/2 left-20 ">
        <div className={`space-x-5 text-4xl `}>Hello,my name is </div>
        <div className="font-bold text-7xl tracking-wider">Abhijit Jha</div>
        <div className="flex space-x-4  text-4xl">
          <div>And I am a</div>
          <div>
          <TypeAnimation className="text-red-700" sequence={TEXTS} wrapper="div" speed={600} deletionSpeed={150} repeat={Infinity}></TypeAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

