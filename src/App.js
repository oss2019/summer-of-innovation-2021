import React from "react";
import "./App.css";
import Main from "./Components/Main.jsx";
import Team from "./Components/Team.jsx";
import Timeline from "./Components/Timeline.jsx";
import Prizes from "./Components/Prizes.jsx";
import Competitive_Coding from "./Components/Result/Competitive_Coding.jsx";
import Login from "./Components/google login/Login"
import { Route } from "react-router-dom";
import "./Components/Timeline.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/timeline" component={Timeline} />
      <Route exact path="/prizes" component={Prizes} />
      <Route exact path="/competitive_coding" component={Competitive_Coding} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
