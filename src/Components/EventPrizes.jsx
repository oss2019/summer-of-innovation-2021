import React from "react";
import "./EventPrizes.css";
import gold from "./Images/gold.png";
import silver from "./Images/silver.png";
import bronze from "./Images/bronze.png";

const EventPrizes = (props) => {
  const PrizeList = [
    {
      eventName: "Space Data Science",
      First: ["T-Shirts", "Medals", "Certificates"],
      Second: ["Mugs", "Certificates"],
      Third: ["Key Chains", "Certificates"],
    },
    {
      eventName: "Artificial Intelligence",
      First: ["T-Shirts", "Medals", "Certificates"],
      Second: ["Mugs", "Certificates"],
      Third: ["Key Chains", "Certificates"],
    },
    {
      eventName: "Robotics",
      First: ["T-Shirts", "Medals", "Certificates"],
      Second: ["Mugs", "Certificates"],
      Third: ["Key Chains", "Certificates"],
    },
    {
      eventName: "Competitive Programming*",
      First: ["T-Shirts", "Medals", "Certificates"],
      Second: ["Mugs", "Certificates"],
      Third: ["Key Chains", "Certificates"],
    },
    {
      eventName: "Finance",
      First: ["T-Shirts", "Medals", "Certificates"],
      Second: ["Mugs", "Certificates"],
      Third: ["Key Chains", "Certificates"],
    },
  ];
  const indexOfEvent = parseInt(props.eventNo);
  const nameOfEvent = PrizeList[indexOfEvent].eventName;
  const first = PrizeList[indexOfEvent].First;
  const second = PrizeList[indexOfEvent].Second;
  const third = PrizeList[indexOfEvent].Third;
  return (
    <div className="prize-template-div">
      <div className="x1 name-of-event-div">{nameOfEvent}</div>
      <div className="x2 places-holder-div">
        <div className="y1 places-prize-holder-div">
          <div className="z1">
            First<img src={gold} className="medal-images"></img>
          </div>
          {first.map((prize) => (
            <div className="z1 prizename">{prize}</div>
          ))}
        </div>
        <div className="places-prize-holder-div">
          <div className="z1">
            Second<img src={silver} className="medal-images"></img>
          </div>
          {second.map((prize) => (
            <div className="z1 prizename">{prize}</div>
          ))}
        </div>
        <div className="y1 places-prize-holder-div">
          <div className="z1">
            Third<img src={bronze} className="medal-images"></img>
          </div>
          {third.map((prize) => (
            <div className="z1 prizename">{prize}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EventPrizes;
