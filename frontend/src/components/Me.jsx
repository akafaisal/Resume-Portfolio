import FrontM from "../assets/Frontman.jpg";
import Typewriter from "typewriter-effect";
import { FaPlay, FaPause } from "react-icons/fa"; // Import Play and Pause icons
import sevennation from "../assets/seven.mp3";
import { useState, useEffect } from "react";
import {
  ClockLoader,
  GridLoader,
  BounceLoader,
  HashLoader,
} from "react-spinners";

const Me = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audio] = useState(new Audio(sevennation));

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audio.pause();
      setIsAudioPlaying(false);
    } else {
      audio.play();
      setIsAudioPlaying(true);
    }
  };

  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="flex justify-center items-center gap-8 pt-5 ">
        {/* GridLoader */}
        <div className="flex justify-center items-center">
          <GridLoader size={20} />
        </div>

        {/* BounceLoader */}
        <div className="flex justify-center items-center rotate-180">
          <BounceLoader size={100} />
        </div>

        {/* Image */}
        <div className="w-48 h-50 overflow-hidden rounded-xl">
          <img
            src={FrontM}
            className="w-full h-full rounded-xl transform hover:scale-[1.3] hover:rotate-[-4deg] transition-all duration-500"
          />
        </div>

        {/* HashLoader */}
        <div className="flex justify-center items-center">
          <HashLoader size={100} />
        </div>
        <div className="flex justify-center items-center">
          <ClockLoader size={100} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <button
            onClick={toggleAudio}
            className="p-4 text-3xl bg-transparent border-none cursor-pointer"
          >
            {isAudioPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
        <span className="mr-2">I AM</span>

        <div className="flex text-7xl text-blue-500">
          <Typewriter
            options={{
              strings: ["FAISAL AYUB", "WEB DEV."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Me;
