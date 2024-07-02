import React from 'react'
import "./Work.css"
import { FaNetworkWired } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Work = () => {
  return (
    <>
      <div className="container work" id='work'>
        <div className="work-exp">
          <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Working Experience
          </h1>
          <hr />
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2020"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaNetworkWired />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2021"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaNetworkWired />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2022"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaNetworkWired />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2023"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaNetworkWired />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Work