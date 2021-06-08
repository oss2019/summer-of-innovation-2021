import React from 'react';
import {FaEnvelope} from 'react-icons/fa';
import {GoLocation} from 'react-icons/go';
import {AiOutlineInstagram} from 'react-icons/ai'

import "./Bottom.css";
import { Col, Container, Row } from 'react-bootstrap';
function Bottom(){
    return(
        <div class="bottomcss">
            <Container style={{padding:10, maxWidth:'100%', margin:'auto'}}>
            <Row style={{margin:'auto', textAlign:'center'}}>
                <Col xs={12} xl={3} md={3} style={{margin:'auto', padding:20}}>
                <Row style={{margin:'auto'}}>
                <img src="./Images/technical council.png" class="imgbottomcss" style={{maxWidth:250, margin:'auto'}}/>
                </Row>
                <Row style={{margin:'auto', marginTop:10}}>
                <h6 style={{margin:'auto', textAlign:'center'}}>Technical Council</h6><br/>
                </Row>
                <Row style={{margin:'auto', marginTop:0}}>
                <h7 style={{margin:'auto', textAlign:'center'}}>IIT Dharwad</h7>
                </Row>
                <Row style={{margin:'auto'}}>
                <p style={{margin:'auto',marginTop: "10px", fontSize:15, textAlign:'center'}}><a href="https://www.instagram.com/technical.council_iitdh/" style={{textDecoration: "none",color:"white"}}><AiOutlineInstagram />Follow Us</a></p>
                </Row >
                </Col>

                <Col xl={4} md={3} xs={12} style={{margin:'auto', padding:20}}>
                    <Row style={{margin:'auto', textAlign:'center'}}>
                    <h2 style={{margin:'auto', textAlign:'center'}}>Other Links</h2>
                    </Row>
                    <Row style={{margin:'auto'}}>
                    <a href="https://oss2019.github.io/" style={{textDecoration: "none",color:"white",margin:'auto'}} ><p className="acss" style={{margin:'auto', textAlign:'center', marginTop: '5px'}}>OSS</p></a>
                    </Row>
                    <Row style={{margin:'auto'}}>
                    <a href="https://www.iitdh.ac.in/iic/" style={{textDecoration: "none",color:"white",margin:'auto'}} ><p className="acss" style={{margin:'auto', textAlign:'center', marginTop: '5px'}}>IIC</p></a>
                    </Row>
                    <Row style={{margin:'auto'}}>
                    <a href="https://www.iitdh.ac.in/" style={{textDecoration: "none",color:"white",margin:'auto'}} ><p className="acss" style={{margin:'auto', textAlign:'center', marginTop: '5px'}}>IIT Dharwad</p></a>
                    </Row>
                </Col>
                <Col xl={5} md={6} xs={12} style={{margin:'auto', padding:20}}>
                    <Row style={{margin:'auto', textAlign:'center'}}>
                        <h2 style={{margin:'auto',textAlign:'center'}}><GoLocation class="iconcss" />Contact Info</h2>
                    </Row>
                    <Row style={{margin:'auto',textAlign:'center'}}>
                    <p style={{margin:'auto', textAlign:'center'}}>
                        Indian Institute of Technology, Dharwad,
                        Karnataka 580011
                    </p>   
                    </Row >
                    <Row style={{margin:'auto', padding:5, textAlign:'center', marginTop: '10px'}}>
                        <h2 style={{margin:'auto', textAlign:'center'}}><FaEnvelope class="iconcss" />  Email</h2>
                    </Row>
                    <Row style={{margin:'auto', textAlign:'center'}}>
                        <p style={{margin:'auto', textAlign:'center'}}>gstech@iitdh.ac.in</p>
                    </Row>
                </Col>
            </Row>
            </Container>
        </div>  
    )
  }

  export default Bottom;