import { useEffect, useState, useRef } from "react";
// import TextTransition, { presets } from "react-text-transition";
import { TypeAnimation } from "react-type-animation";
import { CompleteFrontPage } from "../App";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const HomeRef = useRef();
  function toggleMenu() {
    setOpen(!open);
  }
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Scrolling
  function handleScrollTo(element) {
    console.log(element);
    window.scrollTo({ top: element.current.offsetTop, behavior: "smooth" });
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
    <div className="back" ref={HomeRef}>
      <div
        className={`flex justify-between h-22 font-Ubuntu shadow-md  w-screen fixed ease-in transition-all duration-300 ${
          scroll ? "bg-red-700" : ""
        }`}
      >
        <div className="text-5xl md:ml-20 ml-12 mt-6 mb-6 space-x-4 tracking-widest cursor-pointer text-white h-10">
          Abhijit
        </div>
        <div
          className="md:hidden cursor-pointer mt-9 mr-10"
          onClick={toggleMenu}
        >
          <Menus />
        </div>
        <div
          className={`lg:flex lg:space-x-20 lg:mr-40 lg:mt-10 lg:mb-6 lg:opacity-100 md:flex md:mt-10 md:space-x-14 md:mr-4 transition-all duration-500 ease-in  md:text-white text-black font-semibold  ${
            open
              ? "absolute text-center font-Ubuntu text-6xl space-y-16 top-20 text-white  ease-in transition-all duration-300 cursor-pointer pt-16 h-screen w-screen bg-black"
              : "hidden"
          }
           `}
        >
          <div
            className={` ${
              scroll ? "" : "hover:text-red-700"
            }  ease-in transition-all duration-300 cursor-pointer h-10`}
            onClick={() => handleScrollTo(HomeRef)}
          >
            Home
          </div>
          <div
            className={` ${
              scroll ? "" : "hover:text-red-700"
            }  ease-in transition-all duration-300 cursor-pointer h-10`}
            onClick={() => {
              handleScrollTo();
            }}
          >
            About
          </div>
          <div
            className={` ${
              scroll ? "" : "hover:text-red-700"
            }  ease-in transition-all duration-300 cursor-pointer h-10`}
          >
            Skill
          </div>
          <div
            className={` ${
              scroll ? "" : "hover:text-red-700"
            }  ease-in transition-all duration-300 cursor-pointer h-10`}
          >
            Projects
          </div>
          <div
            className={` ${
              scroll ? "" : "hover:text-red-700"
            }  ease-in transition-all duration-300 cursor-pointer h-10`}
          >
            Contact
          </div>
        </div>
      </div>
      <div className="">
        <FrontPage open={open} />
      </div>
    </div>
  );
}

function FrontPage({ open }) {
  const TEXTS = ["Coder", "Developer", "Believer"];
  

  return (
    <div className="w-screen h-screen text-white overflow-x-hidden z-50">
      <div
        className={`absolute lg:top-80  lg:left-36 md:top-72 md:left-32 top-72 left-12 space-y-2 transition-all ease-in delay-75 ${
          open ? "hidden" : ""
        }`}
      >
        <div className={`space-x-5 md:text-4xl text-2xl `}>
          Hello,my name is{" "}
        </div>
        <div className="font-bold md:text-7xl text-5xl tracking-wider">
          Abhijit Jha
        </div>
        <div className="flex space-x-4  md:text-4xl text-2xl">
          <div className="whitespace-nowrap">And I am a</div>
          <div>
            <TypeAnimation
              className="text-red-700"
              sequence={TEXTS}
              wrapper="div"
              speed={600}
              deletionSpeed={150}
              repeat={Infinity}
            ></TypeAnimation>
          </div>
        </div>
        <div>
          <button
            onClick={function () {
              window.open(
                "https://www.linkedin.com/in/abhijit-jha-7b1b851b8/",
                "_blank"
              );
            }}
            className="bg-red-700 w-36 h-12 rounded-lg text-xl font-bold text-white text-center ease-in transition-all duration-300 hover:bg-transparent  border-2 border-red-700"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
