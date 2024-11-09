import profile from "../store/image/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import CV from "../store/image/resume.pdf"

export default function About() {
  const TEXTS = ["Coder", "Developer", "Believer"];
  return (
    <div className=" p-20 pt-0 bg-white " >
      <div className="lg:text-5xl text-center lg:mt-10  md:text-4xl font-bold text-4xl">
        {" "}
        About me
      </div>
      <div className="text-center">who am i </div>
      <div className="lg:grid lg:grid-cols-2  lg:mt-10 ">
        <div className="">
          <img
            src={profile}
            className="lg:w-3/5 lg:h-full rounded-lg lg:ml-36 md:mt-5 md:w-2/3  md:ml-32 mt-5  "
          ></img>
        </div>
        <div className="mt-10 w-full lg:text-center lg:flex lg:flex-col lg:space-x-3 space-y-3 lg:mr-60 md:ml-20 place-items-start">
          <div className="md:flex space-x-2 ">
            <div className="font-bold lg:text-4xl lg:ml-3 md:text-3xl text-xl whitespace-nowrap">
              Hello Everyone, I am
            </div>
            <div className="font-bold lg:text-4xl md:text-3xl text-xl">
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
          
          <p className="lg:text-left md:w-96 ">
          I’m <b>Abhijit Jha </b>, a passionate <b>Full Stack Developer</b> currently pursuing my degree at <b>TCET '26</b>. Skilled in <b>MERN, C++, Prisma, PostgreSQL, Docker, AWS, TypeScript, and Next.js</b>, I’m dedicated to building innovative and efficient solutions. I take pride in my hard work, punctuality, and attention to detail, ensuring every project is completed on time and to the highest standards. Always eager to learn and grow, I’m <b>actively seeking job opportunities </b>where I can contribute, collaborate, and continue expanding my expertise in the tech industry.
          My journey as a developer is driven by my love for technology and my desire to build products that solve real-world problems. I enjoy tackling complex problems and translating them into simple, user-friendly solutions. Whether working with databases, building scalable backends, or creating dynamic frontends, I approach every task with a meticulous focus on quality.
          </p>
          <div className="md:space-x-5 space-y-5">
            <div>
          <a href={CV} download="Abhijit_CV">
          <button   className=" bg-red-700 w-36 h-12 rounded-lg  font-bold text-white text-center ease-in transition-all duration-300 hover:bg-white hover:text-red-700 border-2 border-red-700" >
            Download CV
          </button>
          </a>
          </div>
          <div>
          <a href="https://drive.google.com/file/d/1ZMN-cpuyR3iSrTwTK8T5VhD0ef7zbiCh/view?usp=drive_link" >
          <button   className=" bg-white w-36 h-12 rounded-lg  font-bold text-red-700 text-center ease-in transition-all duration-300 hover:bg-red-700 hover:text-white border-2 border-red-700" >
            Preview CV
          </button>
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
