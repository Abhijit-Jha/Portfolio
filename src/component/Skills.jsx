import { CircularProgressbar,  buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  return (
    <div>
      <div className="text-center text-4xl font-Ubuntu mt-10">My Skills</div>
      <div>
        <div className="text-center text-xs text-red-700 font-bold ">
          what i know
        </div>
      </div>
      <div className="flex justify-evenly m-20 ">
        <CircularProgressbar className="w-28" value={80} text="CSS" styles={buildStyles({
          textColor: "black",
          pathColor: "red",
          trailColor: "white"
        })}/>
        <CircularProgressbar className="w-28" value={10} text="CSS" />
        <CircularProgressbar className="w-28" value={28} text="CSS" />
        <CircularProgressbar className="w-28" value={10} text="CSS" />
      </div>
    </div>
  );
}
