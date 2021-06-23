import React from "react";
import Header from "./header";
import Bottom from "./Bottom";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "./Result.css";

function Result() {
  return (
    <div>
      <div style={{ backgroundColor: "#0072ff", width: "100%" }}>
        <Header />
      </div>

      <div className="resultmain">
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            RESULTS
          </h2>
          <MDBRow>
            <MDBCol md="12" className="mb-3">
              <img
                src="./Images/result.jpg"
                className="img-fluid z-depth-1"
                alt=""
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
    </div>
  );
}

export default Result;
