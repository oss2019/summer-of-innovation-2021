import React from "react";
import Bottom from "./Bottom.jsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import {GrWorkshop as WorkIcon} from 'react-icons/gr'
import { GiMaterialsScience } from "react-icons/gi";
// import {MdEventAvailable} from 'react-icons/md'
import { BiCheck, BiCodeAlt, BiBrain } from "react-icons/bi";
// import {BsTrophy} from 'react-icons/bs'
import { SiProbot } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
// import {AiOutlineLink} from 'react-icons/ai';
// import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "./Timeline.css";
import Header from "./header";

const Timeline = () => {
  return (
    <div className="backgroundcss">
      <div style={{ backgroundColor: "#0072ff" }}>
        <Header />
      </div>

      <div className="timelinecss">
        <h1 className="h1-responsive font-weight-bold my-5 ">TIMELINE</h1>

        <VerticalTimeline className={"check"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="23rd Of May"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<GiMaterialsScience className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Space Data Science Event Begins
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="12th of June"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<GiMaterialsScience className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss fontcss"
              style={{ color: "white" }}
            >
              Space Data Science Event Ends
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="13th of June"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<BiBrain className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Artificial Intelligence Event Begins
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="26th of June"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<BiBrain className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Artificial Intelligence Event Ends
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="27th of June"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<SiProbot className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Robotics Event Begins
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="31st of August"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<SiProbot className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Robotics Event Ends
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="18th of July"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<FaMoneyCheckAlt className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Finance Club Event Begins
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="21st of July"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<BiCodeAlt className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Coding Event Begins
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="18th of August"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<FaMoneyCheckAlt className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Finance Club Event Ends
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#0072ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #0072ff" }}
            date="18th of August"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<BiCodeAlt className="colorcss" />}
          >
            <h4
              className="vertical-timeline-element-title fontcss"
              style={{ color: "white" }}
            >
              Coding Event Ends
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <h3 className="fontcss">
          *All updates shall also be given on the Instagram handle for the
          event.
        </h3>
      </div>
      <Bottom />
    </div>
  );
};

export default Timeline;
