import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from './news.json';


function News(data) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
            <Container>
            <Row>
              <Col xs={6} md={4} style={{}}>
                <Image src={data.image} thumbnail style={{width: "100px", height: "100px"}} />
              </Col>
              <h3 style={{color: "#239B56"}}>{data.ti}</h3>
              <Button variant="primary" onClick={handleShow} style={{width: "200px"}}>
              show more
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>{data.description}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
            </Modal.Footer>
            </Modal>
              <p></p>
              </Row>
          </Container>
    </>
    
  );
}

export default News;