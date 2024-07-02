import React from "react";
import { MdSchool } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="container education mx-auto" id="education">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h1>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Creative It Institute
            </h4>
            <h2 className="cgpa">Running</h2>

            <a className="sbtn" href="https://www.creativeitinstitute.com/">
              Read more
              <FaArrowRightLong />
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma In Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sherpur polytechnic Institute
            </h4>

            <h2 className="cgpa">Result = CGPA : 3.30 - 4.00</h2>
            <a
              className="sbtn"
              href="https://www.facebook.com/sherpurpoly.edu.bd/"
            >
              Read more
              <FaArrowRightLong />
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2014 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">S.S.C</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hirannoyee High School
            </h4>

            <h2 className="cgpa">Result = GPA : 4.06 - 5.00</h2>
            <a className="sbtn" href="https://hhsc.edu.bd/">
              Read more
              <FaArrowRightLong />
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
