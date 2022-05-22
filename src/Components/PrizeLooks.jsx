import React from "react";
import "./PrizeLooks.css";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import { Container } from "react-bootstrap";
import gold from "./Images/gold.png";
import mug from "./Images/mug.png";
import keychain from "./Images/keychain.png";

const PrizeLooks = () => {
  return (
    <div className="headerDiv">
      <hr className="small-hr" />
      <p className="galleryheader">Prize Gallery</p>
      <hr className="small-hr" />
      <div className="prize-pics">
        <div className="t-shirts">
          <div className="img-text">
            <div className="prize-name-head">T-Shirts</div>
            <hr />
            <div className="prize-desc-div">
              Limited Edition <br />
              SOI 2022 <br />
              T-Shirts.
              <br />
              Also Available On <br />
              [Link]
              {/* Also Available On <br />
              [Link] */}
            </div>
          </div>
          <div className="x2">
            <img className="tshirt-image" />
          </div>
        </div>
        <div className="medals">
          <div className="x2">
            <img src={gold} className="medal-image" />
          </div>
          <div className="img-text">
            <div className="prize-name-head">Gold Medals</div>

            <hr />
            <div className="prize-desc-div">
              For The Winners
              <br /> Of Each Track.
              <br />
              All The Team Members Will Be Awarded.
            </div>
          </div>
        </div>
        <div className="mugs">
          <div className="x2">
            <img src={mug} className="mug-image" />
          </div>
          <div className="img-text">
            <div className="prize-name-head">Mugs</div>
            <hr />
            <div className="prize-desc-div">
              Limited Edition <br />
              SOI 2022 Mugs.
              <br />
              Also Available On <br />
              [Link]
              {/* Also Available On <br />
              [Link] */}
            </div>
          </div>
        </div>
        <div className="keychains">
          <div className="img-text">
            <div className="prize-name-head">KeyChains</div>
            <hr />
            <div className="prize-desc-div">
              Limited Edition <br />
              SOI 2022 KeyChains.
              <br />
              Also Available On <br />
              [Link]
              {/* Also Available On <br />
              [Link] */}
            </div>
          </div>
          <div className="x2">
            <img src={keychain} className="keychain-image" />
          </div>
        </div>
      </div>
      <div className="certificates">
        <hr className="small-hr" />
        <p className="certificate-header">CERTIFICATES</p>
        <hr className="small-hr" />
        <br />
        <div className="certificate-grid">
          <div className="certificate-grid-item">
            <MDBIcon icon="certificate" className="fontawesomeicons" />
            <br />
            <h4 className="certificate-head">Certificate of Completion</h4>
            <hr />
            <br />
            <div className="certificate-desc-holder">
              For those who complete all the requirements of the problem
              statement at hand.
            </div>
          </div>
          <div className="certificate-grid-item">
            <MDBIcon icon="trophy" className="fontawesomeicons" />
            <br />
            <h4 className="certificate-head">Certificate of Excellence</h4>
            <hr />
            <br />
            <div className="certificate-desc-holder">
              For top 3 teams in each event.
            </div>
          </div>
          <div className="certificate-grid-item">
            <MDBIcon icon="user-plus" className="fontawesomeicons" />
            <br />
            <h4 className="certificate-head">Certificate of Participation</h4>
            <hr />
            <br />
            <div className="certificate-desc-holder">
              For all those who solve at least one sub part of problem statement
              and have their score above the following mark:
              <br /> Mean – 2*std.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrizeLooks;
