import { useState,React } from 'react';
import {Alert} from 'react-bootstrap'
import GoogleLogin from 'react-google-login';
import certificateData from "../certificateData.json";
import Header from "../header";
import Bottom from "../Bottom";
import {
  MDBContainer,
  MDBJumbotron,
} from "mdbreact";
import { Card, Button } from "react-bootstrap";
import "./getCertificate.css"



const GetCertificate=(props)=>{
  const [show, setShow] = useState(false);



  const responseGoogle = (response) => {
    const profile = response.getBasicProfile();
    var common_address="https://github.com/oss2019/summer-of-innovation-2021/raw/main/src/Components/Certificates/";
    var obj=certificateData[profile.getEmail()];
    if(obj!==undefined){   
      var link=common_address+obj.event+obj.link_name;
      var pdf=document.getElementById("certificate_link");
      pdf.setAttribute("href",link);
      pdf.click();
  }else{
    setShow(true);
  }
  }

    return(
        <>
         <MDBJumbotron fluid>
          <MDBContainer className="main-div">
            <h1 className=" text-center display-4 font-bold fontcss getCertificate-class">
             THANK YOU ALL!
            </h1>
         
            <p className=" text-center lead fontcss getCertificate-lowerClass" style={{ width: "95%" }}>
              <b>
              Dear participants,
              We really value and admire your streneous efforts and cooperation throughout this event making it a great success and hence, we provide you the certificate of participation as a token of gratitude from our side. All the best for your future endeavours.
              </b>
              <p className=" text-right lead fontcss getCertificate-lowerClass">~Team SOI 2021</p>
            </p>
            
            <GoogleLogin
          clientId="395487705466-q34cuc7cn1j863fmtv44tsvh95a71sln.apps.googleusercontent.com"
          render={renderProps => (
      <Button className="login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Get Certificate</Button>
    )}
          buttonText="Get Your Certificate"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
          </MDBContainer>
        </MDBJumbotron>
      <a href="https://oss2019.github.io/summer-of-innovation-2021/#/" download="Certificate.pdf" id="certificate_link" style={{display:"none"}}> Certificate</a>
      
     {show&&
     <div className="alert-box">
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! Certificate not found!</Alert.Heading>
        <p>
          It seems that there is no certificate linked to your gmail id. Contact General Technical Secretary 
          for futher details.
        </p>
        <p>Contact: gstech@iitdh.ac.in</p>
      </Alert>
      </div>
     }
     </>
    );
};

export default GetCertificate;
  