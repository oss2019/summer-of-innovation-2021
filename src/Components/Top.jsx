import React, { useEffect, useState } from 'react';
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./Top.css";
import Event from './Events.jsx';
import Header from './header';
import { Container } from 'react-bootstrap';
import Logos from './Logos.jsx'; 
import moment from 'moment';
import FlipCountdown from '@rumess/react-flip-countdown';

var testDate = "2021-05-11 23:59:59"; 
// moment().utcOffset("+05:30").add(1, 'm').format('YYYY-MM-DD hh:mm:ss');


const eventDate = new Date('May 12, 2021 18:30:00');
// const testDate = new Date('May 8, 2021 7:40:00');
function Top(){
    const [eventDateCheck, setEventDateCheck] = useState(false);
    const [tester,setTester] = useState(1);
      
    useEffect(() => {
      const currDate = new Date();
      console.log(currDate, testDate, currDate.getTime()>moment(testDate).toDate().getTime());
      if(currDate.getTime() > moment(testDate).toDate().getTime()) setEventDateCheck(true);
      setTimeout(() => {
        // setShow(true)
      }, 1000)
      setTester(tester+1);
      return () => {  };
    }, [tester]);
    return(
      <div >
        <div className="topcss">
           <Header />
           <Container style={{paddingTop: '4vh',paddingLeft: 0, marginLeft: 10}}>
           <div className="white3d2"></div> 
           <div className="white3d"></div>
           <h2>Summer of <br />
           Innovation<br />
           2021</h2>

           <h4>This Summer Conquer your <br />fallacies
             
             and carve your finesses.</h4>

           <img src={('./Images/creative.png')} className="imagecss" alt="image not found"></img>
           </Container>
        </div>
        <div style={{maxWidth:'100%', marginTop:50}}>
        { !eventDateCheck?   
           <>
           <h2 className=" text-center display-4 font-bold ovcss">Starts In</h2>
           <FlipCountdown
              theme="light"
              endAt={testDate}
                // endAt={'2021-05-08 7:40:00'} // Date/Time
            /></>:<></>}
        </div>
        <MDBJumbotron fluid>
          <MDBContainer >
           <h2 className=" text-center display-4 font-bold ovcss">Overview</h2>
           {/* lead mx-5 mb-5 //  pccss  */}
          
           <p className=" text-center lead  pccss "  style={{width:'95%'}}><b>The second edition of Summer of Innovation is a platform for honing one’s technical skills and promoting 
           tech culture in our institute. Lasting 3 months, the event comprises of problem statements from multiple 
           domains and the participants are allowed to take part in any number of them. The event is a result of the 
           contribution of about every technical organization involved with tech in our institute. This year, the event 
           shall last from 12th of May to 12th of August, for a period of 3 months allowing the participants to learn the 
           required technical skills from scratch and then implementing them in this period.</b></p>
          </MDBContainer>
        </MDBJumbotron>
        <div style={{maxWidth:'100%'}}>
        <Event />
         
        
        </div>
        <div style={{marginTop: '120px',marginBottom: '80px'}}>
         <h1 className="ovcss" style={{textAlign: "center",marginBottom: "80px"}}> Our Partners</h1>
        <Logos />
        </div>
        
      </div>
    )
  }

  export default Top;