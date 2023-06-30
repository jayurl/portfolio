import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] flex items-center">
      <div className="max-width-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ff7f50]">Welcome, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ff7f50] ">
          Jay Patel
        </h1>
        <p className="text-[#ff7f50] py-4 max-w-[700px]">
          I am a computer science student at the University of Maryland-College
          Park s pecializing in software develop in addtition to artificial
          intelligence. I am interesting in the fintech industry.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-text-[#ff7f50] hover:border-text-[#ff7f50]">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
