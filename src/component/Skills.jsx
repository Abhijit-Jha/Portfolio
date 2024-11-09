import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  return (
    <div className="bg-black p-10" ref={Skills}>
      <div className="text-center text-white text-4xl font-Ubuntu">
        My Skills
      </div>
      <div>
        <div className="text-center text-xs text-red-700 font-bold ">
          what i know
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-10  lg:place-self-center md:ml-2 md:mt-2 space-y-4 md:grid-cols-3 grid-cols-2  transition-all ease-linear delay-150">
        <CircularProgressbarAdder percentage={90} skillName="HTML" />
        <CircularProgressbarAdder percentage={80} skillName="CSS" />
        <CircularProgressbarAdder percentage={95} skillName="JavaScript" />
        <CircularProgressbarAdder percentage={90} skillName="NodeJS" />
        <CircularProgressbarAdder percentage={97} skillName="React" />
        <CircularProgressbarAdder percentage={80} skillName="MongoDB" />
        <CircularProgressbarAdder percentage={95} skillName="Express" />
        <CircularProgressbarAdder percentage={80} skillName="Version Control" />
        <CircularProgressbarAdder percentage={80} skillName="NextJs" />
        <CircularProgressbarAdder percentage={80} skillName="Docker" />
      </div>
    </div>
  );
}

function CircularProgressbarAdder({ percentage, skillName }) {
  return (
    <div className="md:w-40  w-28 space-y-3 place-self-center">
      <CircularProgressbar
        className="md:w-40 w-28 place-self-center"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "red",
          trailColor: "white",
        })}
      />
      <div className="text-white text-center">{skillName}</div>
    </div>
  );
}
