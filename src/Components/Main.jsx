import React from 'react';
import Top from './Top.jsx';
import Bottom from './Bottom';
import ScrollToTopBtn from "./scroll.jsx";

function Main(){
    return(
        <div>
        <Top />
        <Bottom />
        <ScrollToTopBtn />
        </div>
    );
}

export default Main;