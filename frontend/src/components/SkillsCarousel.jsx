import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaFigma,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiVite,
  SiChakraui,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    image: <FaReact size={100} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    image: <FaJs size={100} className="text-yellow-500" />,
  },
  {
    name: "HTML5",
    image: <FaHtml5 size={100} className="text-orange-500" />,
  },
  {
    name: "CSS3",
    image: <FaCss3Alt size={100} className="text-blue-700" />,
  },
  {
    name: "Tailwind CSS",
    image: <SiTailwindcss size={100} className="text-blue-400" />,
  },
  {
    name: "Node.js",
    image: <FaNodeJs size={100} className="text-green-600" />,
  },
  {
    name: "Express.js",
    image: <SiExpress size={100} className="text-gray-800" />,
  },
  {
    name: "MongoDB",
    image: <SiMongodb size={100} className="text-green-500" />,
  },
  {
    name: "Vite",
    image: <SiVite size={100} className="text-purple-400" />,
  },
  {
    name: "Chakra UI",
    image: <SiChakraui size={100} className="text-teal-400" />,
  },
  {
    name: "Figma",
    image: <FaFigma size={100} className="text-pink-500" />,
  },
  {
    name: "NPM",
    image: <FaNpm size={100} className="text-red-600" />,
  },
];

const SkillsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="p-8 pt-10 mt-10 bg-gradient-to-r from-[rgba(129,209,255,0.4)] rounded-full overflow-hidden shadow-2xl shadow-blue-800">
        <p className=" flex justify-center text-4xl pt-9 pb-8">
          Tools & Libraries <FaReact size={32} className="ml-2 mt-0.5" />
        </p>

        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Render the JSX element directly */}
              <div className="mb-2">{skill.image}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SkillsCarousel;
