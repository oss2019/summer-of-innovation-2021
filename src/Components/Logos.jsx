import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import { Container, Row, Col } from "mdbreact";

const Logos = () => {
    return (
        <div>
        <Container style={{maxWidth:'100%', margin:'auto'}}>
            <Row className="rcss" style={{margin:'auto'}}>
            <Col size="12" xl={2} lg="4" md="6" xs="6" style={{margin:'auto'}}>
             <img src="./Images/technical council.png" style={{width: '100%',height: '100%', padding:2.5}}></img>
            </Col>
            <Col size="12"xl={2} lg="4" md="6" xs="6" style={{margin:'auto'}}>
             <img src="./Images/IICLogo.png" style={{width: '100%',height: '100%', padding:2.5}}></img>
            </Col>
            <Col size="12"xl={2} lg="4" md="6" xs="6" style={{margin:'auto'}}>
             <img src="./Images/codechef.png" style={{width: '100%',height: '100%'}}></img>
            </Col>
            <Col size="12"xl={2} lg="4" md="6" xs="6" style={{margin:'auto'}}>
             <img src="./Images/oss_logo.png" style={{width: '100%',height: '100%', padding:2.5}}></img>
            </Col>
            <Col size="12"xl={2} lg="4" md="6" xs="6" style={{margin:'auto'}}>
              <img src="./Images/logo.png" style={{width: '100%',height: '100%', padding:2.5,marginTop:'20px'}}></img>
            </Col>
            </Row>


        </Container>
        </div>
    )
}

export default Logos;
