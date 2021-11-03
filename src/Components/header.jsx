import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import "./header.css";

const Header = (props) => {
  const [collapseID, setcollapseID] = useState(false);
  const toggleCollapse = () => {
    setcollapseID(!collapseID);
  };
  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={toggleCollapse}
    />
  );

  return (
    <div>
      <MDBNavbar
        collapseOnSelect
        scrolling
        dark
        expand="lg"
        style={{
          top: 0,
          paddingLeft: "2%",
          paddingRight: "2%",
          width: "100%",
          fontSize: "1rem",
        }}
      >
        <a href="https://oss2019.github.io/summer-of-innovation-2021/#/">
          <img
            src="./Images/newSoiLogo.png"
            style={{ maxWidth: "70px", maxHeight: "30px" }}
            alt= "Summer of Innovation Logo"
          />
        </a>

        <MDBNavbarToggler onClick={toggleCollapse} className="widthcss" />

        <MDBCollapse
          id="navbarCollapse"
          className={"collapse"}
          isOpen={collapseID}
          navbar
        >
          <MDBNavbarNav right>
            <Nav.Link
              href="https://oss2019.github.io/summer-of-innovation-2021/#/"
              style={textCol}
            >
              {" "}
              HOME
            </Nav.Link>
            <Nav.Link
              href="https://oss2019.github.io/summer-of-innovation-2021/#/team"
              style={textCol}
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="https://oss2019.github.io/summer-of-innovation-2021/#/timeline"
              style={textCol}
            >
              TIMELINE
            </Nav.Link>
            <Nav.Link
              href="https://oss2019.github.io/summer-of-innovation-2021/#/prizes"
              style={textCol}
            >
              PRIZES
            </Nav.Link>
            <Nav.Link
              href="https://oss2019.github.io/summer-of-innovation-2021/#/certificates"
              style={textCol}
            >
              CERTIFICATES
            </Nav.Link>
            <NavDropdown
              title="RESULTS"
              style={textCol3}
              renderMenuOnMount={true}
              className="dropdown-icon-css responsive-results"
            >
              <NavDropdown.Item
                style={textCol2}
                href="https://oss2019.github.io/summer-of-innovation-2021/#/competitive_coding"
              >
                Competitive Coding
              </NavDropdown.Item>

              <NavDropdown.Item
                style={textCol2}
                href="https://oss2019.github.io/summer-of-innovation-2021/#/web_development"
              >
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item
                style={textCol2}
                href="https://oss2019.github.io/summer-of-innovation-2021/#/entrepreneurship"
              >
                Entrepreneurship
              </NavDropdown.Item>
              <NavDropdown.Item
                style={textCol2}
                href="https://oss2019.github.io/summer-of-innovation-2021/#/object_recognition"
              >
                Object Recognition
              </NavDropdown.Item>
              <NavDropdown.Item
                style={textCol2}
                href="https://oss2019.github.io/summer-of-innovation-2021/#/image_recognition"
              >
                Image Classification
              </NavDropdown.Item>
              <NavDropdown.Item
                style={textCol2}
                href="https://oss2019.github.io/summer-of-innovation-2021/#/sentiment_of_text"
              >
                Sentiment of Text
              </NavDropdown.Item>
              <NavDropdown.Item
                style={textCol2}
                href="https://oss2019.github.io/summer-of-innovation-2021/#/twitter_bot"
              >
                IPL Twitter Bot
              </NavDropdown.Item>
            </NavDropdown>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      {collapseID && overlay}
    </div>
  );
};
const textCol = {
  color: "white",
  height: "40px",
  paddingRight: "35px",
  paddingTop: "15px",
  margin: "auto",
  fontSize: "10",
  fontFamily: '"Itim", cursive',
};

const textCol2 = {
  color: "black",
  height: "40px",
  margin: "auto",
  fontSize: "10",
  fontFamily: '"Itim", cursive',
};

const textCol3 = {
  color: "white",
  height: "40px",
  paddingRight: "35px",
  paddingTop: "6px",
  fontSize: "10",
  fontFamily: '"Itim", cursive',
};
export default Header;
