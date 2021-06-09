import React from "react";
import Bottom from "./Bottom.jsx";
import "react-vertical-timeline-component/style.min.css";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import Header from "./header";
import "./Prizes.css";

function Prizes() {
  return (
    <div>
      <div style={{ backgroundColor: "#0072ff" }}>
        <Header />
      </div>

      <section className="text-center my-5 ">
        <h1 className="h1-responsive font-weight-bold my-5 ">CERTIFICATES</h1>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon
              icon="certificate"
              size="3x"
              className="red-text"
              style={{ color: "#0072ff" }}
            />
            <h5
              className="font-weight-bold my-4 fontcss"
              style={{ color: "#0072ff" }}
            >
              Certificate of Completion
            </h5>
            <p className="grey-text mb-md-0 mb-5 fontcss">
              For those who complete all the requirements of the problem
              statement at hand.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon
              icon="trophy"
              size="3x"
              className="cyan-text"
              style={{ color: "#0072ff" }}
            />
            <h5
              className="font-weight-bold my-4 fontcss"
              style={{ color: "#0072ff" }}
            >
              Certificate of Excellence:
            </h5>
            <p className="grey-text mb-md-0 mb-5 fontcss">
              For top 3 teams in each event.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon
              icon="user-plus"
              size="3x"
              className="orange-text"
              style={{ color: "#0072ff" }}
            />
            <h5
              className="font-weight-bold my-4 fontcss"
              style={{ color: "#0072ff" }}
            >
              Certificate of participation:
            </h5>
            <p className="grey-text mb-md-0 mb-5 fontcss">
              For all those who solve at least one sub part of problem statement
              and have their score above the following mark:
              <br />
              <b>Mean – 2*std.</b>
            </p>
          </MDBCol>
        </MDBRow>
      </section>

      <MDBContainer>
        <section className="my-5">
          <h1 className="h1-responsive font-weight-bold text-center my-5">
            T-Shirts
          </h1>

          <MDBRow>
            <MDBCol md="4">
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <h3
                    className="font-weight-bold mb-3 fontcss"
                    style={{ color: "#0072ff" }}
                  >
                    Web Development
                  </h3>
                  <h4 className="fontcss">Top Three places in the event</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <h3
                    className="font-weight-bold mb-3 fontcss"
                    style={{ color: "#0072ff" }}
                  >
                    Robotics
                  </h3>
                  <h4 className="fontcss">Top Three places in the event</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <h3
                    className="font-weight-bold mb-3 fontcss"
                    style={{ color: "#0072ff" }}
                  >
                    Competitive Coding
                  </h3>
                  <h4 className="fontcss">Top Three places in the event</h4>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="4" className="text-name">
              <img
                className="prizeimagecss"
                src="./Images/prizeimg3.png"
                alt=""
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <h3
                    className="font-weight-bold mb-3 fontcss"
                    style={{ color: "#0072ff" }}
                  >
                    Entrepreneurship
                  </h3>
                  <h4 className="fontcss">Top Three places in the event</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <h3
                    className="font-weight-bold mb-3 fontcss"
                    style={{ color: "#0072ff" }}
                  >
                    AI Events
                  </h3>
                  <h4 className="fontcss">Top Three places in each AI event</h4>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <MDBContainer>
        <MDBRow className="maxwidthcss">
          <MDBCol xl="2" lg="2" md="1" sm="1" xs="0"></MDBCol>
          <MDBCol xl="4" lg="4" md="5" sm="5" xs="12" className="mb-3">
            <img
              src="./Images/t1.jpg"
              className="img-fluid z-depth-1 tshirtimagecss"
              alt=""
            />
          </MDBCol>
          <MDBCol xl="4" lg="4" md="5" sm="5" xs="12" className="mb-3">
            <img
              src="./Images/t2.jpg"
              className="img-fluid z-depth-1 tshirtimagecss"
              alt=""
            />
          </MDBCol>
          <MDBCol xl="2" lg="2" md="1" sm="1" xs="0"></MDBCol>
        </MDBRow>
      </MDBContainer>

      <h1 className="font-weight-bold text-center my-5">
        Prizes will be distributed only when we return to campus
      </h1>

      <Bottom />
    </div>
  );
}

export default Prizes;
