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
          <h1 className="h1-responsive font-weight-bold text-center my-5 fontcss">
            Result
          </h1>
          <h2 className="h2-responsive font-weight-bold text-center my-5 fontcss">
            Competitive Coding
          </h2>
        </MDBContainer>

        <MDBContainer className="text-center my-5 rankcontainercss">
          <MDBRow style={{ maxWidth: "100%" }} className="pcviewcss">
            <MDBCol md="4 rankcolcss ranktwocss">
              <img
                className="resultimgcss"
                src="./Images/Result images/CP/himanshu.jpeg"
              />

              <h3 className="h3-top-margin">Himanshu</h3>
              <h4
                className="font-weight-bold my-4"
                style={{ color: "#0072ff" }}
              >
                2nd Rank
              </h4>
            </MDBCol>
            <MDBCol md="4 rankcolcss rankonecss">
              <img
                className="resultimgcss"
                src="./Images/Result images/CP/Pratik.jpeg"
              />
              <h3 className="h3-top-margin">Pratik Manoj Jain</h3>
              <h4
                className="font-weight-bold my-4"
                style={{ color: "#0072ff" }}
              >
                1st Rank
              </h4>
            </MDBCol>
            <MDBCol md="4 rankcolcss rankthreecss">
              <img
                className="resultimgcss"
                src="./Images/Result images/CP/amrutha.jpeg"
              />
              <h3 className="h3-top-margin">G O Amrutha Praveen</h3>
              <h4
                className="font-weight-bold my-4"
                style={{ color: "#0072ff" }}
              >
                3rd Rank
              </h4>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ maxWidth: "100%" }} className="mobileviewcss">
            <MDBCol md="4 rankcolcss rankonecss">
              <img
                className="resultimgcss"
                src="./Images/Result images/CP/Pratik.jpeg"
              />
              <h3 className="h3-top-margin">Pratik Manoj Jain</h3>
              <h4
                className="font-weight-bold my-4"
                style={{ color: "#0072ff" }}
              >
                1st Rank
              </h4>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
              <img
                className="resultimgcss"
                src="./Images/Result images/CP/himanshu.jpeg"
              />
              <h3 className="h3-top-margin">Himanshu</h3>
              <h4
                className="font-weight-bold my-4 "
                style={{ color: "#0072ff" }}
              >
                2nd Rank
              </h4>
            </MDBCol>
            <MDBCol md="4 rankcolcss">
              <img
                className="resultimgcss"
                src="./Images/Result images/CP/amrutha.jpeg"
              />
              <h3 className="h3-top-margin">G O Amrutha Praveen</h3>
              <h4
                className="font-weight-bold my-4 "
                style={{ color: "#0072ff" }}
              >
                3rd Rank
              </h4>
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
