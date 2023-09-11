import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#FA8072] flex items-center">
      <div className="max-width-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[black]">Welcome, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[black] text-italic">
          Jay Patel
        </h1>
        <p className="text-[black] py-4 max-w-[700px]">
          I am a computer science major with a business minor at the University of Maryland-College
          Park pursuing the field of software engineering
          with a profound passion for crafting sophisticated applications.
          Beyond the realm of technology, I maintain a profound appreciation
          for sports, namely football, basketball, and UFC, as they provide
          me with an avenue to unwind and stay physically engaged.
          In addition to my technical pursuits, I'm deeply committed to
          staying well-informed about global affairs, including politics
          and world news. Furthermore, I hold a particular interest in the
          intricate web of business-related matters, keeping a vigilant eye
          on the ever-evolving stock market landscape and the dynamic sphere
          of startups. My passion extends to developing applications that are
          not only technologically innovative but also deeply useful to
          both myself and those around me. I believe in the power of
          technology to enhance our daily lives. Additionally, I'm actively
          pursuing knowledge in the realm of quantitative trading, eager to
          explore the intricacies of financial markets and investment
          strategies. In my journey, I am dedicated to bridging the gap
          between cutting-edge technology and real-world solutions,
          striving to contribute positively to both the technological
          landscape and the broader community.
        </p>
        {/* <div>
          <button className="text-black group border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-text-[black] hover:border-text-[black]">
            Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
