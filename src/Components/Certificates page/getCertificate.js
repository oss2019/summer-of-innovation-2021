import { useState, React, useEffect } from "react";
import { Alert } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import certificateData from "../Certificates.json/certificateData.json";
import CertificateModale from "./certificateModale";
import Header from "../header";
import Bottom from "../Bottom";
import { MDBContainer, MDBJumbotron } from "mdbreact";
import { Card, Button } from "react-bootstrap";
import "./getCertificate.css";

const GetCertificate = (props) => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [obj,updateobj]=useState({
    events: {
    event1: {
        eventName: "",
    }}});

  const responseGoogle = (response) => {
    const profile = response.getBasicProfile();
    updateobj(certificateData[profile.getEmail()]);
    if (obj !== undefined) {
      setModalShow(true);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <MDBJumbotron fluid>
        <MDBContainer className="main-div">
          <h1 className="h1-responsive font-weight-bold text-center my-5 fontcss getCertificate-class">
            THANK YOU ALL!
          </h1>

          <p
            className=" text-center lead fontcss getCertificate-lowerClass"
            style={{ width: "95%" }}
          >
            <b>
              Dear participants, We really value and admire your streneous
              efforts and cooperation throughout this event making it a great
              success and hence, we provide you the certificate of participation
              as a token of gratitude from our side. All the best for your
              future endeavours.
            </b>
            <p className=" text-right lead fontcss getCertificate-lowerClass">
              ~Team SOI 2021
            </p>
          </p>

          <GoogleLogin
            clientId="395487705466-q34cuc7cn1j863fmtv44tsvh95a71sln.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className="login-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Get Certificate
              </Button>
            )}
            buttonText="Get Your Certificate"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </MDBContainer>
      </MDBJumbotron>
      <CertificateModale show={modalShow} onHide={() => setModalShow(false)} object={obj} />
      <a
        href="https://oss2019.github.io/summer-of-innovation-2021/#/"
        download="Certificate.pdf"
        id="certificate_link"
        style={{ display: "none" }}
      >
        {" "}
        Certificate
      </a>

      {show && (
        <div className="alert-box">
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! Certificate not found!</Alert.Heading>
            <p>
              It seems that there is no certificate linked to your gmail id.
              Contact General Technical Secretary for futher details.
            </p>
            <p>Contact: gstech@iitdh.ac.in</p>
          </Alert>
        </div>
      )}
    </>
  );
};

export default GetCertificate;
