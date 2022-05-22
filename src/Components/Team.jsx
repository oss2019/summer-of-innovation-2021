import React from "react";
import Bottom from "./Bottom.jsx";
import Card from "./Card.jsx";
import "./Team.css";
import Header from "./header";
import { Col, Container, Row } from "react-bootstrap";
import ScrollToTopBtn from "./scroll.jsx";

function Team() {
  return (
    <div className="zcss">
      <div style={{ backgroundColor: "#0072ff", width: "100%" }}>
        <Header />
      </div>
      <div class="Teamtopcss">
        <h2 style={{ marginTop: "40px", marginBottom: "0" }}>Our Team</h2>
      </div>
      <Container style={{ maxWidth: "100%", margin: "auto" }}>
        <h3 className="h3class">ORGANIZER :</h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Atul.jpg"
              title="ATUL SINGH"
              email="gstech@iitdh.ac.in"
            />
          </Col>
        </Row>

        <h3 className="h3class">WEB-TEAM: </h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Asish.jpg"
              title="Asish Gokarakonda"
              email="200010017@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/SakshamChhimwal.jpg"
              title="Saksham Chhimwal"
              email="210010046@iitdh.ac.in"
            />
          </Col>
        </Row>

        {/* <h3 className="h3class">DESIGN TEAM:</h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Aasim.jpg"
              title="AASIM ALI KHAN"
              email="190010001@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Chirag.jpg"
              title="CHIRAG J MARAGAL"
              email="190020014@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Sameer.jpg"
              title="MOHAMMAD SAMEER"
              email="190010024@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Samriddha.jpg"
              title="SAMRIDDHA CHATTOPADHYAY"
              email="200020040@iitdh.ac.in"
            />
          </Col>
        </Row> */}

        <h3 className="h3class">SPACE DATA SCIENCE TEAM: </h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Nirmit.jpg"
              title="Nirmit Arora"
              email="200010034@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/SiddharthShankar.png"
              title="Siddharth Shankar"
              email="200030056@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Chidaksh.jpg"
              title="Chidaksh Ravuru"
              email="200010046@iitdh.ac.in"
            />
          </Col>
        </Row>

        <h3 className="h3class">ARTIFICIAL INTELLIGENCE TEAM:</h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Harrithha.jpg"
              title="Harrithha B"
              email="200010018@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/AnandHegde.png"
              title="Anand Hegde"
              email="200020007@iitdh.ac.in"
            />
          </Col>
        </Row>

        <h3 className="h3class">ROBOTICS TEAM:</h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/OmPatil.jpg"
              title="Om Patil"
              email="200010036@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/ShubhAgarwal.JPG"
              title="Shubh Agarwal "
              email="210020047@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/SayaliLokhande.jpeg"
              title="Sayali Lokhande "
              email="200020041@iitdh.ac.in"
            />
          </Col>
        </Row>

        <h3 className="h3class">
          FINANCE TEAM:
        </h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Aryan.JPG"
              title="Aryan D. Trimukhe"
              email="200010053@iitdh.ac.in"
            />
          </Col>
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/JigishuBhadviya.jpg"
              title="Jigishu Bhadviya"
              email="jigeshubhadviya@gmail.com"
            />
          </Col>
        </Row>

        <h3 className="h3class">CODING TEAM:</h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Samriddha.jpg"
              title="Samriddha Chattopadhyay"
              email="200020040@iitdh.ac.in"
            />
          </Col>
        </Row>

        {/* <h3 className="h3class">SENTIMENT OF TEXT PROBLEM STATEMENT TEAM:</h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Harshraj.jpg"
              title="HARSH RAJ"
              email="180010017@iitdh.ac.in"
            />
          </Col>
        </Row>

        <h3 className="h3class">
          IMAGE CLASSIFICATION PROBLEM STATEMENT TEAM:
        </h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Akhilesh.png"
              title="BHARADWAJ AKHILESH"
              email="180010009@iitdh.ac.in"
            />
          </Col>
        </Row>

        <h3 className="h3class">ROBOTICS PROBLEM STATEMENT TEAM:</h3>
        <Row className="row">
          <Col size="12" lg="3" md="4" sm="6" className="column">
            <Card
              url="./Images/Team Images/Sohan.jpg"
              title="SOHAN ANISETTY"
              email="180030040@iitdh.ac.in"
            />
          </Col>
        </Row> */}
      </Container>
      <div style={{ maxWidth: "100%" }}>
        <Bottom />
      </div>
      <ScrollToTopBtn />
    </div>
  );
}
export default Team;
