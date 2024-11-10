import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
      <img
        src="src/assets/Header.png"
        alt="Monco"
        className="w-full sm:w-3/4 lg:w-1/2 rounded shadow-md"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-4 tracking-widest text-center">
        KRISANAPONG JARUENJANPORN
      </h1>
      <p className="text-gray-500 text-justify my-6 indent-8 max-w-prose">
        Hi, I'm Jame from Thailand. I'm an indie backend developer who's
        familiar with developing various platforms. Someday I hope I will
        become a platform developer and do something useful to the community.
      </p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://github.com/Krianapong"
          className="text-gray-700 hover:text-black"
        >
          <FaGithub size={40} className="sm:size-50" />
        </a>
        <a
          href="https://www.linkedin.com/in/krisanapong-jaruenjanporn/"
          className="text-gray-700 hover:text-black"
        >
          <FaLinkedin size={40} className="sm:size-50" />
        </a>
        <a
          href="https://www.youtube.com/@ajax_jinny2659"
          className="text-gray-700 hover:text-black"
        >
          <FaYoutube size={40} className="sm:size-50" />
        </a>
        <a
          href="https://www.instagram.com/moncocs/"
          className="text-gray-700 hover:text-black"
        >
          <FaInstagram size={40} className="sm:size-50" />
        </a>
      </div>
    </div>
  );
};

export default About;
