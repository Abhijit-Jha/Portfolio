import background from "../store/image/BackgroundImage.jpg";

export default function Projects() {
  return (
    <div className="m-10 bg-white ">
      <div className="text-4xl font-bold text-center">Projects</div>
      <div className="font-light text-center">Top Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 ml-10">
        <ProjectsTemplate
          title="ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
        <ProjectsTemplate
          title="ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
        <ProjectsTemplate
          title="ChatGpt-4 End to End ChatGpt-4 End to End ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
        <ProjectsTemplate
          title="ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
        <ProjectsTemplate
          title="ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
        <ProjectsTemplate
          title="ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
        <ProjectsTemplate
          title="ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
        <ProjectsTemplate
          title="ChatGpt-4 End to End"
          imageSRC={background}
        ></ProjectsTemplate>
      </div>
    </div>
  );
}

function ProjectsTemplate({ title, imageSRC }) {
  return (
    <div className="shadow-xl rounded-sm">
      <div className="flex justify-center">
        <img src={imageSRC} className="w-full mb-4 cursor-pointer"></img>
      </div>
      <div className="text-center text-purple-400 cursor-pointer font-bold mb-4 hover:underline text-xl m-2">
        {title}
      </div>
    </div>
  );
}
