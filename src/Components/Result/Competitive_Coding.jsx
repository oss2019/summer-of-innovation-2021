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
// import GetCertificate from "../Certificates page/getCertificate";
import { Alert } from "react-bootstrap";

function Competitive_Coding() {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <div style={{ backgroundColor: "#0072ff", width: "100%" }}>
        <Header />
      </div>
      {/* {show&&
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className="fontcss">Get Your Certificate</Alert.Heading>
        <p className="fontcss">
         You can get your Certificate by going down this page.
        </p>
      </Alert>
      } */}

      <div className="resultmain">
        <MDBContainer>
          <h1 className="h1-responsive font-weight-bold text-center my-5 fontcss">
            Result
          </h1>
          <h2 className="h2-responsive font-weight-bold text-center my-5 fontcss">
            {"{Competitive Coding}"}
          </h2>
        </MDBContainer>

        <MDBContainer className="text-center my-5 rankcontainercss">
          <MDBRow style={{ maxWidth: "100%" }} className="pcviewcss">
            <MDBCol md="4 rankcolcss ranktwocss">
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/himanshu.jpeg"
                alt="Himanshu"
              /> */}

              <h3 className="h3-top-margin fontcss">Himanshu</h3>
              <h3 className="h3-top-margin fontcss">180020013</h3>
              <h4
                className="font-weight-bold my-4 fontcss"
                style={{ color: "#0072ff" }}
              >
                2nd Rank
              </h4>
            </MDBCol>
            <MDBCol md="4 rankcolcss rankonecss">
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/Pratik.jpeg"
                alt="Pratik"
              /> */}
              <h3 className="h3-top-margin fontcss ">Pratik Manoj Jain</h3>
              <h3 className="h3-top-margin fontcss">190010034</h3>
              <h4
                className="font-weight-bold my-4 fontcss"
                style={{ color: "#0072ff" }}
              >
                1st Rank
              </h4>
            </MDBCol>
            <MDBCol md="4 rankcolcss rankthreecss">
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/amrutha.jpeg"
                alt="Amrutha"
              /> */}
              <h3 className="h3-top-margin fontcss">G O Amrutha Praveen</h3>
              <h3 className="h3-top-margin fontcss">190030015</h3>
              <h4
                className="font-weight-bold my-4 fontcss"
                style={{ color: "#0072ff" }}
              >
                3rd Rank
              </h4>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ maxWidth: "100%" }} className="mobileviewcss">
            <MDBCol md="4 rankcolcss rankonecss" className="h4-margin-top">
              <h4
                className="font-weight-bold my-4 fontcss"
                style={{ color: "#0072ff" }}
              >
                1st Rank
              </h4>
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/Pratik.jpeg"
                alt="Pratik"
              /> */}
              <h3 className="h3-top-margin fontcss">Pratik Manoj Jain</h3>
              <h3 className="h3-top-margin fontcss">190010034</h3>
            </MDBCol>
            <MDBCol md="4 rankcolcss" className="h4-margin-top">
              <h4
                className="font-weight-bold my-4 fontcss"
                style={{ color: "#0072ff" }}
              >
                2nd Rank
              </h4>
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/himanshu.jpeg"
                alt="Himanshu"
              /> */}
              <h3 className="h3-top-margin fontcss">Himanshu</h3>
              <h3 className="h3-top-margin fontcss">180020013</h3>
              {/* <h3 className="h3-top-margin fontcss">1800</h3> */}
            </MDBCol>
            <MDBCol md="4 rankcolcss" className="h4-margin-top">
              <h4
                className="font-weight-bold my-4 fontcss"
                style={{ color: "#0072ff" }}
              >
                3rd Rank
              </h4>
              {/* <img
                className="resultimgcss fontcss"
                src="./Images/Result images/CP/amrutha.jpeg"
                alt="Amrutha"
              /> */}
              <h3 className="h3-top-margin">G O Amrutha Praveen</h3>
              <h3 className="h3-top-margin fontcss">190030015</h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* <GetCertificate id="Certificate-section" /> */}
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
    </div>
  );
}

export default Competitive_Coding;
