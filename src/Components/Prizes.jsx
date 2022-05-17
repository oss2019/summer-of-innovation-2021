import React from "react";
import Bottom from "./Bottom.jsx";
import "react-vertical-timeline-component/style.min.css";
import PrizeHolder from "./PrizeHolder";
import Header from "./header";
import PrizeLooks from "./PrizeLooks";
import "./Prizes.css";

function Prizes() {
  return (
    <div>
      <div style={{ backgroundColor: "#0072ff" }}>
        <Header />
      </div>
      <div className="prizes-holder-div">
        <hr className="small-hr" />
        <p className="prizes-title">Prizes</p>
        <hr className="small-hr" />
        <PrizeHolder
          event="Space Data Science"
          eventNo="0"
          className="PrizeHolder"
        />
        <PrizeHolder
          event="Artificial Intelligence"
          eventNo="1"
          className="PrizeHolder"
        />
        <PrizeHolder event="Robotics" eventNo="2" className="PrizeHolder" />
        <PrizeHolder
          event="Cometitive Programming*"
          eventNo="3"
          className="PrizeHolder"
        />
        <PrizeHolder event="Finance" eventNo="4" className="PrizeHolder" />
        <p className="cp-prizes">
          * For Competitive Programming
          <br /> First Prize will be given to
          <strong> TOP 3</strong>.<br />
          Second Prize will be given to <strong>NEXT 4</strong>.<br />
          Third Prize will be given to <strong>NEXT 3</strong>.
        </p>
        <PrizeLooks />
      </div>
      <Bottom />
    </div>
  );
}

export default Prizes;
