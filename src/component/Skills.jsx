import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  return (
    <div className="bg-black p-10">
      <div className="text-center text-white text-4xl font-Ubuntu">
        My Skills
      </div>
      <div>
        <div className="text-center text-xs text-red-700 font-bold ">
          what i know
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 ml-60 space-y-4">
        <CircularProgressbarAdder percentage={80} skillName="HTML" />
        <CircularProgressbarAdder percentage={80} skillName="CSS" />
        <CircularProgressbarAdder percentage={85} skillName="JavaScript" />
        <CircularProgressbarAdder percentage={80} skillName="NodeJS" />
        <CircularProgressbarAdder percentage={80} skillName="React" />
        <CircularProgressbarAdder percentage={80} skillName="MongoDB" />
        <CircularProgressbarAdder percentage={80} skillName="Express" />
        <CircularProgressbarAdder percentage={80} skillName="Express" />
      </div>
    </div>
  );
}

function CircularProgressbarAdder({ percentage, skillName }) {
  return (
    <div className="w-40 space-y-3">
      <CircularProgressbar
        className="w-40"
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
