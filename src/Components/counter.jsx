import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Reveal from "react-reveal/Reveal";
import CountUp from "react-countup";
import "./counter.css";
function Counter(props) {
  const [countvis, updatecount] = React.useState(true);

  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        return (
          <Reveal effect="animation">
            <div className="counter-div ">
              <div className="counter-text">
                <CountUp
                  start={isVisible && countvis ? (0, updatecount(false)) : -1}
                  end={props.end}
                  duration={2.5}
                />
                <container>
                  <p className="responsive-counter-font">No of Participants</p>{" "}
                </container>
              </div>
            </div>
          </Reveal>
        );
      }}
    </VisibilitySensor>
  );
}

export default Counter;
