import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function News(data) {
   
  return (
    <>
            <Container>
            <Row>
              <div>
                <img src={data.image}  style={{border:"5px solid #fff", borderRadius:"20px",width:"20%",float:"left",marginTop:"5%"}}></img>
                <h3 style={{color: "#FFC300",marginTop:"13%",marginLeft:"21%"}}>{data.ti}</h3>
                <h6 style={{color: "#FFC300",marginLeft:"21%"}}>{data.description}</h6>
              </div>
              </Row>
          </Container>
    </>
    
  );
}

export default News;