import React from "react";

import Java from "../assets/java.jpeg";
import Python from "../assets/python.jpeg";
import C from "../assets/c.png";
import GitHub from "../assets/github.png";
import Rust from "../assets/rust.png";
import OCaml from "../assets/ocaml.jpeg";
import CSS from "../assets/css.png";
import Racket from "../assets/racket.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Assembly from "../assets/mips.png";
import MatLab from "../assets/matlab.jpeg";
import R from "../assets/Rlogo.png";
import TailwindCSS from "../assets/tailwind.png";
import rea from "../assets/react.png";



const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#FA8072] text-[black]">
      { }
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-[black] font-bold inline">
            Languages-Tools-Frameworks
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-white">
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
            <img className="w-20 mx-auto" src={Rust} alt="Rust icon"></img>
            <p className="my-4">Rust</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={OCaml} alt="OCaml icon"></img>
            <p className="my-4">OCaml</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Racket} alt="Racket icon"></img>
            <p className="my-4">Racket</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon"></img>
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon"></img>
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon"></img>
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Assembly} alt="JavaScript icon"></img>
            <p className="my-4">MIPS Assembly</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MatLab} alt="JavaScript icon"></img>
            <p className="my-4">MATLAB</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={R} alt="JavaScript icon"></img>
            <p className="my-4">R</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={rea} alt="JavaScript icon"></img>
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TailwindCSS} alt="JavaScript icon"></img>
            <p className="my-4">Tailwind CSS</p>
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
