import React from "react";
import Header from "../header";
import Bottom from "../Bottom";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
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
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
    </div>
  );
}

export default Competitive_Coding;
