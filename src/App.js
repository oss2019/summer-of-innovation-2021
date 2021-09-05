import React from "react";
import "./App.css";
import Main from "./Components/Main.jsx";
import Team from "./Components/Team.jsx";
import Timeline from "./Components/Timeline.jsx";
import Prizes from "./Components/Prizes.jsx";
import Competitive_Coding from "./Components/Result/Competitive_Coding.jsx";
import Certificate_main from "./Components/Certificates page/Certificate_main";
import { Route } from "react-router-dom";
import "./Components/Timeline.css";
import Web_development from "./Components/Result/Web_Development";
import Entrepreneurship from "./Components/Result/Entrepreneurship";
import Sentiment_of_text from "./Components/Result/Sentiment_of_text";
import Object_recognition from "./Components/Result/Object_recognition";
import Twitter_bot from "./Components/Result/Twitter_bot";
import Image_recognition from "./Components/Result/Image_recognition";

function App() {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/timeline" component={Timeline} />
      <Route exact path="/prizes" component={Prizes} />
      <Route exact path="/competitive_coding" component={Competitive_Coding} />
      <Route exact path="/web_development" component={Web_development} />
      <Route exact path="/entrepreneurship" component={Entrepreneurship} />
      <Route exact path="/sentiment_of_text" component={Sentiment_of_text} />
      <Route exact path="/object_recognition" component={Object_recognition} />
      <Route exact path="/image_recognition" component={Image_recognition} />
      <Route exact path="/twitter_bot" component={Twitter_bot} />
      <Route exact path="/certificates" component={Certificate_main} />
    </div>
  );
}

export default App;
