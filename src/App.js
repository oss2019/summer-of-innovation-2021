import React from 'react';
import './App.css';
import Main from './Components/Main.jsx';
import Team from './Components/Team.jsx';
import Timeline from './Components/Timeline.jsx';
import {Route} from 'react-router-dom';
import './Components/Timeline.css';

function App(){
    return(
        <div>

        <Route exact path="/" component={Main} />
        <Route exact path="/soiteam" component={Team} />
        <Route exact path="/soitimeline" component={Timeline} />
        </div>
    );
}

export default App;