import React from "react";
import Header from "../header";
import Bottom from "../Bottom";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBAvatar,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBJumbotron,
} from "mdbreact";
import { Card, Button } from "react-bootstrap";
import "./Result.css";

function Competitive_Coding() {
  return (
    <div>
      <div style={{ backgroundColor: "#0072ff", width: "100%" }}>
        <Header />
      </div>

      <div className="resultmain">
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5 fontcss">
            Competitive Coding Winners
          </h2>
        </MDBContainer>

        <MDBContainer className="text-center my-5 rankcontainercss">
          <MDBRow style={{ maxWidth: "100%" }}>
            <MDBCol md="4 rankcolcss">
              <img className="heightcss" src="./Images/rank.png" />
              <h1 className="rankcssh1">1st Rank</h1>
              <h5
                className="font-weight-bold my-4 rankcssh5"
                style={{ color: "#0072ff" }}
              >
                Pratik Manoj Jain
              </h5>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
              <img className="heightcss" src="./Images/rank.png" />
              <h1 className="rankcssh1">2nd Rank</h1>
              <h5
                className="font-weight-bold my-4 rankcssh5"
                style={{ color: "#0072ff" }}
              >
                Himanshu
              </h5>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
              <img className="heightcss" src="./Images/rank.png" />
              <h1 className="rankcssh1">3rd Rank</h1>
              <h5
                className="font-weight-bold my-4 rankcssh5"
                style={{ color: "#0072ff" }}
              >
                G O Amrutha Praveen
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBJumbotron fluid>
          <MDBContainer className="ovresultcss">
            <h2 className=" text-center display-4 font-bold fontcss">
              CONGRATULATIONS
            </h2>
            {/* lead mx-5 mb-5 //  pccss  */}

            <p className=" text-center lead fontcss" style={{ width: "95%" }}>
              <b>
                Congratulations to all the winners and all the participants. All
                of the participants can collect their certificates using the
                below link. Thank you all for participating in the event.
              </b>
            </p>

            <Button>Collect Here</Button>
          </MDBContainer>
        </MDBJumbotron>
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
    </div>
  );
}

export default Competitive_Coding;
