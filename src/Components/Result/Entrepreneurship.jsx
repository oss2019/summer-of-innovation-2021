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

function Entrepreneurship() {
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
            {"{Case Study}"}
          </h2>
        </MDBContainer>

        <MDBContainer className="text-center my-5 rankcontainercss">
          <h4
            className="font-weight-bold my-4 fontcss mtcss pcviewcss"
            style={{
              color: "#0072ff",
              marginTop: "500px",
              marginBottom: "-50px",
            }}
          >
            1st Rank
          </h4>
          <MDBRow style={{ marginBottom: "100px" }} className="pcviewcss">
            <MDBCol md="4 rankcolcss rankonecss">
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/Pratik.jpeg"
                alt="Pratik"
              /> */}
              <h3 className="h3-top-margin fontcss ">Huzaif</h3>
              <h3 className="h3-top-margin fontcss">190030028</h3>
            </MDBCol>

            <MDBCol md="4 rankcolcss rankonecss">
              <h3 className="h3-top-margin fontcss ">Prajwal Paloju</h3>
              <h3 className="h3-top-margin fontcss">190030030</h3>
            </MDBCol>

            <MDBCol md="4 rankcolcss rankonecss">
              <h3 className="h3-top-margin fontcss ">Siddharth Patra</h3>
              <h3 className="h3-top-margin fontcss">190030039</h3>
            </MDBCol>
          </MDBRow>
          <h4
            className="font-weight-bold my-4 fontcss mtcss pcviewcss"
            style={{
              color: "#0072ff",
              marginTop: "500px",
              marginBottom: "-50px",
            }}
          >
            2nd Rank
          </h4>
          <MDBRow
            style={{ maxWidth: "100%" }}
            className="pcviewcss"
            style={{ marginBottom: "100px" }}
          >
            <MDBCol md="4 rankcolcss ranktwocss">
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/himanshu.jpeg"
                alt="Himanshu"
              /> */}
              <h3 className="h3-top-margin fontcss">Abhinav Soni</h3>
              <h3 className="h3-top-margin fontcss">190030002</h3>
            </MDBCol>
            <MDBCol md="4 rankcolcss ranktwocss">
              <h3 className="h3-top-margin fontcss">Akshat</h3>
              <h3 className="h3-top-margin fontcss">190030003</h3>
            </MDBCol>
            <MDBCol md="4 rankcolcss ranktwocss">
              <h3 className="h3-top-margin fontcss">Nir Bavariya</h3>
              <h3 className="h3-top-margin fontcss">190010028</h3>
            </MDBCol>
          </MDBRow>
          <h4
            className=" fontcss mtcss font-weight-bold my-4 pcviewcss"
            style={{
              color: "#0072ff",
              marginTop: "500px",
              marginBottom: "-50px",
            }}
          >
            3rd Rank
          </h4>
          <MDBRow className="pcviewcss">
            <MDBCol md="4 rankcolcss rankthreecss">
              {/* <img
                className="resultimgcss"
                src="./Images/Result images/CP/amrutha.jpeg"
                alt="Amrutha"
              /> */}
              <h3 className="h3-top-margin fontcss">Mayank Mittal</h3>
              <h3 className="h3-top-margin fontcss">190030026</h3>
            </MDBCol>
            <MDBCol md="4 rankcolcss rankthreecss"></MDBCol>
            <MDBCol md="4 rankcolcss rankthreecss">
              <h3 className="h3-top-margin fontcss">Aadil Khan</h3>
              <h3 className="h3-top-margin fontcss">200030001</h3>
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
              <h3 className="h3-top-margin fontcss ">Huzaif</h3>
              <h3 className="h3-top-margin fontcss">190030028</h3>

              <h3 className="h3-top-margin fontcss ">Prajwal Paloju</h3>
              <h3 className="h3-top-margin fontcss">190030030</h3>

              <h3 className="h3-top-margin fontcss ">Siddharth Patra</h3>
              <h3 className="h3-top-margin fontcss">190030039</h3>
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
              <h3 className="h3-top-margin fontcss">Abhinav Soni</h3>
              <h3 className="h3-top-margin fontcss">190030002</h3>

              <h3 className="h3-top-margin fontcss">Akshat</h3>
              <h3 className="h3-top-margin fontcss">190030003</h3>

              <h3 className="h3-top-margin fontcss">Nir Bavariya</h3>
              <h3 className="h3-top-margin fontcss">190010028</h3>
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
              <h3 className="h3-top-margin fontcss">Mayank Mittal</h3>
              <h3 className="h3-top-margin fontcss">190030026</h3>

              <h3 className="h3-top-margin fontcss">Aadil Khan</h3>
              <h3 className="h3-top-margin fontcss">200030001</h3>
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

export default Entrepreneurship;
