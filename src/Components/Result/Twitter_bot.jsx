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

function Twitter_bot() {
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
            {"{Twitter Bot}"}
          </h2>
        </MDBContainer>

        <MDBContainer className="text-center my-5 rankcontainercss">
          <MDBRow style={{ maxWidth: "100%" }} className="pcviewcss">
            <MDBCol md="12 rankcolcss rankonecss">
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/Pratik.jpeg"
                alt="Pratik"
              /> */}
              <h3 className="h3-top-margin fontcss ">Harrithha B</h3>
              <h3 className="h3-top-margin fontcss">200010018</h3>
              <h4
                className="font-weight-bold my-4 fontcss"
                style={{ color: "#0072ff" }}
              >
                1st Rank
              </h4>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ maxWidth: "100%" }} className="mobileviewcss">
            <MDBCol md="12 rankcolcss rankonecss" className="h4-margin-top">
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
              <h3 className="h3-top-margin fontcss ">Harrithha B</h3>
              <h3 className="h3-top-margin fontcss">200010018</h3>
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

export default Twitter_bot;
