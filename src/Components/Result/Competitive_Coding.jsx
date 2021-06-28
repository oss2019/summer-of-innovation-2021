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
import GetCertificate from "../Certificates page/getCertificate";

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
              <img
                className="heightcss"
                src="./Images/Result Images/Pratik.jpeg"
              />
              <h1 className="rankcssh1">1st Rank</h1>
              <h5
                className="font-weight-bold my-4 rankcssh5"
                style={{ color: "#0072ff" }}
              >
                Pratik Manoj Jain
              </h5>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
              <img className="heightcss" src="" />
              <h1 className="rankcssh1">2nd Rank</h1>
              <h5
                className="font-weight-bold my-4 rankcssh5"
                style={{ color: "#0072ff" }}
              >
                Himanshu
              </h5>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
              <img className="heightcss" src="" />
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
        <GetCertificate />
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
    </div>
  );
}

export default Competitive_Coding;
