import React from "react";
import { Skill } from "./Skill";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import JS from "../../assets/JavaScript.png";
import Bootstrap from "../../assets/Bootstrap.png";
import TailWind from "../../assets/Tailwind.png";
import REACT from "../../assets/React.png";
import NODEJS from "../../assets/NodeJS.png";
import EXPRESS from "../../assets/Expressjs.png";
import PHP from "../../assets/PHP.png";
import MYSQL from "../../assets/MySQL.png";
import MongoDB from "../../assets/MongoDB.png";
import Figma from "../../assets/Figma.webp";
import VsCode from "../../assets/Vscode.png";
import Ps from "../../assets/Ps.png";
import Ai from "../../assets/Ai.png";
import VN from "../../assets/VN.jpeg";
import OBS from "../../assets/OBS.png";
import PostMan from "../../assets/PostMan.png";
import FireCamp from "../../assets/firecamp.png";
import Sass from "../../assets/Sass.png";
import PostCss from "../../assets/PostCSS.png";
import Redux from "../../assets/redux.png";
import Electron from "../../assets/Electron.png";
import { useParams } from "react-router-dom";
export function Tools() {
  const { name } = useParams();

  return (
    <div className="">
      {name === "frontend" && (
        <div className=" grid grid-cols-1  p-5 gap-5 md:grid-cols-4">
          <Skill HTML={HTML} name={"HTML"} rate="Experienced" time={0.1} />
          <Skill HTML={CSS} name={"CSS"} rate="Intermediate" time={0.2} />
          <Skill HTML={JS} name={"JavaScript"} rate="Experienced" time={0.3} />
          <Skill
            HTML={Bootstrap}
            name={"Bootstrap"}
            rate="Experienced"
            time={0.4}
          />
          <Skill
            HTML={TailWind}
            name={"TailWind"}
            rate="Experienced"
            time={0.5}
          />
          <Skill HTML={Sass} name={"Sass"} rate="Basic" time={0.6} />
          <Skill HTML={PostCss} name={"PostCSS"} rate="Basic" time={0.7} />
          <Skill HTML={REACT} name={"React"} rate="Experienced" time={0.8} />
          <Skill HTML={Redux} name={"Redux"} rate="Intermediate" time={0.9} />
          <Skill HTML={Electron} name={"Electron Js"} rate="Basic" time={1} />
        </div>
      )}
      {name === "backend" && (
        <div className=" grid grid-cols-1  p-5 gap-5 md:grid-cols-4">
          <Skill
            HTML={NODEJS}
            name={"Note Js"}
            rate="Intermediate"
            time={0.1}
          />
          <Skill
            HTML={EXPRESS}
            name={"Express Js"}
            rate="Intermediate"
            time={0.2}
          />
          <Skill HTML={MYSQL} name={"React"} rate="Basic" time={0.3} />
          <Skill
            HTML={MongoDB}
            name={"Mongodb"}
            rate="Intermediate"
            time={0.4}
          />
          <Skill HTML={PHP} name={"PHP"} rate="Basic" time={0.5} />
        </div>
      )}
      {name === "design-tools" && (
        <div className=" grid grid-cols-1  p-5 gap-5 md:grid-cols-4">
          <Skill HTML={Figma} name={"figma"} rate="Experienced" time={0.1} />
          <Skill HTML={Ps} name={"PhotoShop"} rate="Basic" time={0.2} />
          <Skill HTML={Ai} name={"Ai"} rate="Basic" time={0.3} />
        </div>
      )}
      {name === "others-tools" && (
        <div className=" grid grid-cols-1  p-5 gap-5 md:grid-cols-4">
          <Skill HTML={VsCode} name={"vscode"} rate="Experienced" time={0.1} />
          <Skill HTML={VN} name={"VN"} rate="Intermediate" time={0.2} />
          <Skill HTML={OBS} name={"OBS"} rate="Intermediate" time={0.3} />
          <Skill
            HTML={FireCamp}
            name={"firecamp"}
            rate="Intermediate"
            time={0.4}
          />
          <Skill
            HTML={PostMan}
            name={"post man"}
            rate="Intermediate"
            time={0.5}
          />
        </div>
      )}
    </div>
  );
}
