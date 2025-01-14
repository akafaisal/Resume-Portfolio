import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const SkillBar = ({ skill, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="my-4">
      {/* Skill Name */}
      <div className="text-xl font-semibold mb-2">{skill}</div>

      {/* Progress Bar with animation */}
      <div className="relative ">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-sm font-medium">{level}%</span>
        </div>

        <motion.div
          className="bg-gradient-to-r from-blue-300 to-blue-600 h-2 rounded-full cursor-pointer"
          initial={{ width: 0 }} // Start at 0% width initially
          animate={{ width: isHovered ? "0%" : `${level}%` }} // On hover, animate to 0%. On hover end, animate to level%
          transition={{
            duration: 1, // Animation duration
            ease: "easeInOut", // Smooth easing
          }}
          onHoverStart={() => setIsHovered(true)} // On hover start, set hover to true
          onHoverEnd={() => setIsHovered(false)} // On hover end, set hover to false
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="p-8 pt-10 mt-10 mb-20 ml-20 pl-20 bg-gradient-to-r from-[rgba(129,209,255,0.4)] mr-10   lg: rounded-tl-[40%]  rounded-bl-[20%]  md-rounded-[60%] pb-20  mr-20  shadow-xl shadow-blue-800 ">
      <p className=" flex justify-center text-4xl pt-9 pr-20 pb-4 ">
        My Skills <FaTools size={24} className="ml-3 mt-2" />
      </p>

      <div className="   p-5  ">
        {/* Skills Bars */}
        <SkillBar skill="Python" level={85} />
        <SkillBar skill="C++" level={75} />
        <SkillBar skill="JavaScript" level={90} />
        <SkillBar skill="React" level={80} />
        <SkillBar skill="HTML & CSS" level={95} />
      </div>
    </div>
  );
};

const Skillbar = ({ skill, level }) => {};

export default SkillsSection;
