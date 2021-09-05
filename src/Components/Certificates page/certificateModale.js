import { React, useState } from "react";
import { Modal, Container, Button, Row, Col } from "react-bootstrap";

const fun = (obj, common_address) => {
  let array = [];
  Object.entries(obj).forEach(([key, value]) => {
    array.push({
      Name: value.eventName,
      link: common_address + value.name + value.link_name,
    });
  });
  return array;
};
const CertificateModal = (props) => {
  const common_address =
    "https://github.com/oss2019/summer-of-innovation-2021/raw/main/src/Components/Certificates/";
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title className="fontcss" id="contained-modal-title-vcenter">
          Get your Certificate(s)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {fun(props.object["events"], common_address).map((elem) => {
            console.log(elem.link)
            return (
              <Row style={{marginTop:"5px"}}>
                <Col className="fontcss" xs={12} md={8}>
                  {elem.Name}
                </Col>
                <Col xs={6} md={4}>
                  <Button className="fontcss download-button" href={elem.link}>
                      Download
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="fontcss" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CertificateModal;
