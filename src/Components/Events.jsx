import React,{useState}  from 'react'
import './Events.css';
import { Button, Modal} from 'react-bootstrap';

function Event(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if(props.eventIsHere) return;
    setShow(true);
  }

  
   return (
    <div class="Event-section">

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "#0072ff",fontFamily: "Itim, cursive"}}>COMING SOON !!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontFamily: "Itim, cursive"}}>Details about the event will be soon convyed.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

            <h1 className="h1css">Events</h1>

            <div class="cards">
                <div onClick={handleShow} class="card event-card">
                  <div class="card-body event-card-body aimg_css">
                  <a  href={props.eventIsHere?"https://drive.google.com/file/d/1jCTkicELyVrQ0xBch_2voio9e_qU2u3I/view?usp=sharing":"#"} className="Nodeco">
                    <h2>Web Development</h2>
                    <div class="line">
                      <p> </p>
                    </div>
                      <p>Know more</p>
                    </a>
                  </div>
            </div>

            <div class="card event-card">
              <div class="card-body event-card-body cimg_css">
              <a onClick={handleShow} href={props.eventIsHere?"https://drive.google.com/file/d/1lzfwBidFNqHcZe0h7VmcO0yfGVNnop4R/view?usp=sharing":"#"} className="Nodeco">
                <h2>Robotics</h2>
                <div class="line">
                  <p> </p>
                </div>
                  <p>Know more</p>
                </a>
              </div>
            </div>

            <div class="card event-card">
              <div class="card-body event-card-body dimg_css">
              <a onClick={handleShow} href="#" className="Nodeco">
                <h2>Competitive Coding</h2>
                <div class="line">
                  <p> </p>
                </div>
                  <p>Know more</p>
                </a>
              </div>
            </div>
    
            <div class="card event-card">
              <div class="card-body event-card-body eimg_css ">
              <a onClick={handleShow} href={props.eventIsHere?"https://drive.google.com/file/d/1FWNufsz-9NF7cJP6DDoaz9THsRoadS2p/view?usp=sharing":"#"} className="Nodeco">
                <h2>Entrepreneurship</h2>
                <div class="line">
                  <p> </p>
                </div>
                  <p>Know more</p>
                </a>
              </div>
            </div>
    
            <div class="card event-card">
             <div class="card-body event-card-body fimg_css ">
               <a onClick={handleShow} href={props.eventIsHere?"https://drive.google.com/file/d/1yoao6aUrhrg-tosqISDSUGTqHsY-hxG-/view?usp=sharing":"#"} className="Nodeco">
               <h2>Object Recognition (AI)</h2>
                <div class="line">
                  <p></p>
                </div>
                  <p>Know more</p>
                </a>
               </div>
             </div>
           
              <div class="card event-card">
                <div class="card-body event-card-body gimg_css ">
                <a onClick={handleShow} href={props.eventIsHere?"https://drive.google.com/file/d/1-G5Zd2W5wLao6Fe2UeaToTLg15fFNxHK/view?usp=sharing":"#"} className="Nodeco">
                  <h2>Sentiment of text (AI)</h2>
                  <div class="line">
                    <p> </p>
                  </div>
                    <p>Know more</p>
                  </a>
                </div>
              </div>

              <div class="card event-card">
                <div class="card-body event-card-body himg_css ">
                <a onClick={handleShow} href={props.eventIsHere?"https://drive.google.com/file/d/1EUQN-M2uQxgn97m0meQLec5EsyiE247I/view?usp=sharing":"#"} className="Nodeco">
                  <h2>Twitter bot for IPL updates (AI)</h2>
                  <div class="line">
                    <p> </p>
                  </div>
                    <p>Know more</p>
                  </a>
                </div>
              </div>

              <div class="card event-card">
                <div class="card-body event-card-body iimg_css ">
                <a onClick={handleShow} href={props.eventIsHere?"https://drive.google.com/file/d/1qvlegWxG1g5g6v73hrdSjlf5BbL_febr/view?usp=sharing":"#"} className="Nodeco">
                  <h2>Image Classification (AI)</h2>
                  <div class="line">
                    <p> </p>
                  </div>
                    <p>Know more</p>
                  </a>
                </div>
              </div>

    </div>
  </div>
   );
}

export default Event;