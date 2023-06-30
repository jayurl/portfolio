import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#ff7f50]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white text-[#ff7f50]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Jay, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
                I am passionate about topics relating technological innovation
                in addition to creating software/apps that improves the lives of those around me.
                Currently, I am focusing on pursuing artificial intelligence specialization along 
                with being a full stack developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
