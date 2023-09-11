import React, { useState } from "react";
import Logo from "../assets/jp.jpeg";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] bg-transparent text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="school" smooth={true} duration={500}>
            School
          </Link>
        </li>


        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="school" smooth={true} duration={500}>
            School
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/JAYURL"
              target="_blank"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/JAYURL"
              target="_blank"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:j012.patel@gmail.com?subject = Feedback&body = Message"
              target="_blank"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="_blank"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;