import React, { useState } from "react";
import "./PrizeHolder.css";
import EventPrizes from "./EventPrizes";
import { Animated } from "react-animated-css";
const PrizeHolder = (props) => {
  const [show, setShow] = useState(false);
  const eventButtonClickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="event-button-holder">
      <button className="event-name-button" onClick={eventButtonClickHandler}>
        {props.event}
      </button>
      {show ? (
        <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={show}>
          <EventPrizes eventNo={props.eventNo} />
        </Animated>
      ) : null}
    </div>
  );
};

export default PrizeHolder;
