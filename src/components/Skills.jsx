import React from "react";

import Java from "../assets/java.jpeg";
import Python from "../assets/python.jpeg";
import C from "../assets/c.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-[#ff7f50]">
      {}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-[#ff7f50] font-bold inline border-b-4 border-white">
            Skills
          </p>
          <p className="my-4">Technical Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon"></img>
            <p className="my-4">Java</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon"></img>
            <p className="my-4">Python</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={C} alt="C icon"></img>
            <p className="my-4">C</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon"></img>
            <p className="my-4">Git</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
