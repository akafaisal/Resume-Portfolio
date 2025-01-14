import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Ensure styles are imported

import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineLibrary } from "react-icons/hi";
const EducationTimeline = () => {
  return (
    <>
      <div className=" lg:rounded-br-[50%] rounded-tl-[40%] bg-gradient-to-l from-[rgba(129,209,255,0.4)]  md-rounded-[60%] w-full overflow-hidden shadow-2xl shadow-blue-800 ">
        <p className=" flex justify-center text-4xl pt-9 pb-4 ">
          My Education <HiOutlineLibrary size={32} className="mt-1 ml-2" />
        </p>
        <VerticalTimeline className="bg-slate-10 rounded-2xl">
          {/* Bharati Vidyapeeth’s College of Engineering */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date={
              <span style={{ color: "rgb(33, 150, 243)" }}>2021 – 2025</span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Bharati Vidyapeeth’s College of Engineering, New Delhi
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.Tech. in Computer Science Engineering
            </h4>
            <p>Scored 73% (up to sixth semester)</p>
          </VerticalTimelineElement>

          {/* Bal Bhavan Public School - XII */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date={
              <span style={{ color: "rgb(33, 150, 243)" }}>2019 – 2020</span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Bal Bhavan Public School, Mayur Vihar II, East Delhi
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Class XII</h4>
            <p>Scored 96%</p>
          </VerticalTimelineElement>

          {/* Bal Bhavan Public School - X */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(100, 150, 243)" }}
            date={
              <span style={{ color: "rgb(33, 150, 243)" }}>2017 – 2018</span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Bal Bhavan Public School, Mayur Vihar II, East Delhi
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Class X</h4>
            <p>Scored 92%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default EducationTimeline;
