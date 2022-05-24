import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Container, Row, Col } from "mdbreact";

const Logos = () => {
  return (
    <div>
      <Container style={{ maxWidth: "100%", margin: "auto" }}>
        <Row className="rcss" style={{ margin: "auto" }}>
          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/technical council.png"
              style={{ width: "100%", height: "100%", padding: 2.5 }}
              alt="Technical Council Logo, IIT Dharwad"
            ></img>
          </Col>
          {/* <Col size="12"xl={2} lg="4" md="6" xs="6" style={{margin:'auto'}}>
             <img src="./Images/IICLogo.png" style={{width: '100%',height: '100%', padding:2.5}} alt="IIC Logo"></img>
            </Col> */}
          {/* <Col size="12"xl={2} lg="4" md="6" xs="6" style={{margin:'auto'}}>
             <img src="./Images/codechef.png" style={{width: '100%',height: '100%'}} alt="Codechef Logo"></img>
            </Col> */}
          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/oss_logo.png"
              style={{ width: "100%", height: "100%", padding: 2.5 }}
              alt="OSS IIT Dharwad Logo"
            ></img>
          </Col>
          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/sds_logo.jpg"
              style={{ width: "100%", height: "100%", padding: 2.5 }}
              alt="Space Data Science IIT Dharwad Logo"
            ></img>
          </Col>
          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/ai_logo.png"
              style={{ width: "100%", height: "100%", padding: 2.5 }}
              alt="AI IIT Dharwad Logo"
            ></img>
          </Col>
          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/robo_logo.png"
              style={{ width: "100%", height: "100%", padding: 2.5 }}
              alt="Robotics IIT Dharwad Logo"
            ></img>
          </Col>
          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/fin_logo.png"
              style={{ width: "100%", height: "100%", padding: 2.5 }}
              alt="Finance IIT Dharwad Logo"
            ></img>
          </Col>
          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/coding_logo.png"
              style={{ width: "100%", height: "100%", padding: 2.5 }}
              alt="Coding IIT Dharwad Logo"
            ></img>
          </Col>

          <Col size="12" xl={2} lg="4" md="6" xs="6" style={{ margin: "auto" }}>
            <img
              src="./Images/logo.png"
              style={{
                width: "100%",
                height: "100%",
                padding: 2.5,
                marginTop: "20px",
              }}
              alt="Summer of Innovation 2022 Logo"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Logos;
