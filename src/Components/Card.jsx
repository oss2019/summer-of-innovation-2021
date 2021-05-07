import React from 'react';
import { Container } from 'react-bootstrap';
import './Card.css';


const Card = props =>{
    return(
      <Container style={{padding:10}}>
          <div class="card cardcss" >
            <img src={props.url} class="card-img-top" alt="No Images" height={250}/>
            <div class="card-body">
             <h6>{props.title}</h6>
             <h7><i class="fas fa-envelope-square"></i> {props.email}</h7>
            </div>
          </div>
          </Container>
    );
}

export default Card;