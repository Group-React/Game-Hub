import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function News(data) {
   
  return (
    <>
            <Container>
            <Row>
              <Col xs={6} md={4} style={{ marginTop:"3%"}}>
                <Image src={data.image} thumbnail/>
              </Col>
              <h3 style={{color: "#FFC300"}}>{data.ti}</h3>
              <h6 style={{color: "#FFC300"}}>{data.description}</h6>
              
      

              </Row>
          </Container>
    </>
    
  );
}

export default News;