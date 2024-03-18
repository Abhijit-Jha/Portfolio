import instagram from "../store/image/instagram.png";
import linkedin from "../store/image/linkedin.png";
import github from "../store/image/github.png";
import X from "../store/image/X.png";

export default function Footer() {
  return (
    <>
      <div className="">
        <div className="text-center text-3xl font-semibold m-2">
          Social Media
        </div>
        <div className="flex justify-center space-x-10 m-2 h-10">
          <div>
            <a href="https://www.instagram.com/_jha_abhijeet?igsh=YXNjOWg3aWt3M3lp" target="blank">
            <img
              src={instagram}
              className="h-10 grayscale hover:grayscale-0 cursor-pointer transition-all ease-linear delay-100"
            ></img>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/abhijit-jha-7b1b851b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"
            >
              <img
                src={linkedin}
                className="h-10 grayscale hover:grayscale-0 cursor-pointer transition-all ease-linear delay-100"
              ></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/Abhijit-Jha/" target="blank">
              <img
                src={github}
                className="h-11 grayscale hover:grayscale-0 cursor-pointer transition-all ease-linear delay-100"
              ></img>
            </a>
          </div>
          <div>
            <img
              src={X}
              className="h-10 grayscale hover:grayscale-0 cursor-pointer transition-all ease-linear delay-100"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
