import background from "../store/image/BackgroundImage.jpg";
import { projects } from "../store/project.js";
export default function Projects() {
  return (
    <div className="m-10" ref={Projects}>
      <div className="text-4xl font-bold text-center">Projects</div>
      <div className="font-light text-center">Top Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 md:ml-10">
        {projects.map((project) => {
          return (
            <ProjectsTemplate
              imageSRC={project.image}
              title={project.title}
              Link={project.source_code}
              description={project.description}
              liveURl={project.live_Link}
            />
          );
        })}
      </div>
      <div className="flex justify-center m-8">
        <button className="flex  pl-5 pt-2  bg-purple-500 w-40 h-12 hover:bg-white text-xl hover:text-purple-500 transition-all ease-in delay-150  border-2 rounded-lg border-black " onClick={()=>window.open("https://github.com/Abhijit-jha","_blank")}>
          View More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mt-1 ml-2 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ProjectsTemplate({ title, imageSRC, Link, description,liveURl }) {
  return (
    <div className="shadow-xl rounded-sm" onClick={() => window.open(Link, "_blank")}>
      <div className="flex justify-center" >
        <img src={imageSRC} className="w-32 mb-4 cursor-pointer h-32"></img>
      </div>
      <div
        className="text-center text-purple-400 cursor-pointer font-bold mb-4 hover:underline text-xl m-2"
      >
        {title}
      </div>
      <div className="text-left p-2 font-extralight mb-4 text-sm">
        {description.length > 100
          ? description.substring(0, 100) + "..."
          : description}
      </div>
      <div
        className="cursor-pointer text-right p-2 hover:text-gray-500 w-fit"
        onClick={() => window.open(liveURl, "_blank")}
      >
        Live Preview
      </div>
    </div>
  );
}
