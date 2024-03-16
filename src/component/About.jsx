import background from "../store/image/BackgroundImage.jpg";
import { TypeAnimation } from "react-type-animation";
export default function About() {
  const TEXTS = ["Coder", "Developer", "Believer"];
  return (
    <div className=" p-20 pt-0 bg-white ">
      <div className="lg:text-5xl text-center lg:mt-10  md:text-4xl font-bold text-4xl">
        {" "}
        About me
      </div>
      <div className="text-center">who am i </div>
      <div className="lg:grid lg:grid-cols-2  lg:mt-10 ">
        <div className="">
          <img
            src={background}
            className="lg:w-3/5 lg:h-auto rounded-lg lg:ml-36 md:mt-5 md:w-2/3 md:ml-32 mt-5 "
          ></img>
        </div>
        <div className="mt-10 lg:text-center lg:flex lg:flex-col lg:space-x-3 space-y-3 lg:mr-60 md:ml-40 place-items-start">
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
          <p className="lg:text-left md:w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            accusamus? Numquam obcaecati at iste odit debitis maiores voluptates
            corporis iusto, nostrum deleniti, molestias itaque accusamus quis.
            Rerum eos facilis veritatis ut optio! Nostrum, porro nobis
            perferendis ipsum suscipit sequi facere? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat optio maiores, mollitia sit
            dicta nam id et excepturi tempora voluptate animi ad minus inventore
            expedita ullam dolore quod error nesciunt.lorem20 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, temporibus. Animi, saepe quas aspernatur iure maiores adipisci dignissimos labore tempore?
          </p>
          <button className=" bg-red-700 w-36 h-12 rounded-lg  font-bold text-white text-center ease-in transition-all duration-300 hover:bg-white hover:text-red-700 border-2 border-red-700">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
