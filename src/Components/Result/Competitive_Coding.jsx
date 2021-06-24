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
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Competitive Coding
          </h2>

          <MDBRow>
            <img src="./Images/result.png" className="mx-auto d-block" alt="" />
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="text-center my-5 rankcontainercss">
          <MDBRow style={{ maxWidth: "100%" }}>
            <MDBCol md="4 rankcolcss">
              <h1 className="rankcssh1">1st Rank</h1>
              <h5
                className="font-weight-bold my-4 rankcssh5"
                style={{ color: "#0072ff" }}
              >
                Pratik Manoj Jain
              </h5>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
              <h1 className="rankcssh1">2nd Rank</h1>
              <h5
                className="font-weight-bold my-4 rankcssh5"
                style={{ color: "#0072ff" }}
              >
                Himanshu
              </h5>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
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

        <Card>
          <Card.Body>
            <Card.Title>Collect your certificate here</Card.Title>
            <Button variant="primary">Certificate</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
    </div>
  );
}

export default Competitive_Coding;
