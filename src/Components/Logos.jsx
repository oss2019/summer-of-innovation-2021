import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Logos = () => {
    return (
        <div>
        <MDBContainer>

        
            <MDBRow className="rcss">
            <MDBCol size="12" lg="4" md="6" sm="6">
             <img src="./Images/technical council.png" style={{width: '80%',height: '80%'}}></img>
            </MDBCol>
            <MDBCol size="12" lg="4" md="6" sm="6">
             <img src="./Images/IICLogo.png" style={{width: '80%',height: '80%'}}></img>
            </MDBCol>
            <MDBCol size="12" lg="4" md="6" sm="6">
             <img src="./Images/codechef.png" style={{width: '100%',height: '80%'}}></img>
            </MDBCol>
            <MDBCol size="12" lg="4" md="6" sm="6">
             <img src="./Images/oss_logo.png" style={{width: '100%',height: '100%'}}></img>
            </MDBCol>
            <MDBCol size="12" lg="4" md="0" sm="0">
                
            </MDBCol>
            <MDBCol size="12" lg="4" md="6" sm="6">
              <img src="./Images/logo.png" style={{width: '100%',height: '90%',marginTop:'20px'}}></img>
            </MDBCol>
            </MDBRow>


        </MDBContainer>
        </div>
    )
}

export default Logos;
