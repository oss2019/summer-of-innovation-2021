import React from 'react';
import {FaEnvelope} from 'react-icons/fa';
import {GoLocation} from 'react-icons/go';
import {AiOutlineInstagram} from 'react-icons/ai'

import "./Bottom.css";

function Bottom(){
    return(
        <div class="bottomcss">
        <div class="logocss">
          <img src="./Images/technical council.png" class="imgbottomcss"></img>
          <h5>Technical Council</h5>
          <h6>IIT Dharwad</h6>
          <h6 style={{marginTop: "10px"}}><a href="https://www.instagram.com/technical.council_iitdh/" style={{textDecoration: "none",color:"white"}}><AiOutlineInstagram />Follow Us</a></h6>
        </div>
        <div class="socialmedia">
        <h3>Social Media</h3>
        <a href="https://oss2019.github.io/" style={{textDecoration: "none",color:"white"}} ><p className="acss">OSS</p></a>
        <a href="https://www.iitdh.ac.in/iic/" style={{textDecoration: "none",color:"white"}} ><p className="acss">IIC</p></a>
        <a href="https://www.iitdh.ac.in/" style={{textDecoration: "none",color:"white"}} ><p className="acss">IIT Dharwad</p></a>
        </div>
        <div class="contactcss">

            <h3><GoLocation class="iconcss" />Contact Info</h3>
            <p>
                Indian Institute of Technology, Dharwad,
                Karnataka 580011
            </p>
            <h3><FaEnvelope class="iconcss" />  Email</h3>
            <p>gstech@iitdh.ac.in</p>

        </div>
        </div>  
    )
  }

  export default Bottom;