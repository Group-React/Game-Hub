import Carousel from 'react-bootstrap/Carousel';



function Mainc(Item) {
  return (
    <Carousel data-bs-theme="" style={{marginTop:"4%" }}  >
      <Carousel.Item>
        <img
         
          className="d-block"
          style={{marginLeft:"28%"}}
      
          width={"700"}
          height={"400"}
          src="https://www.mmobomb.com/g/1136/thumbnail.jpg"
          alt="Overwatch 2"
        />
        <Carousel.Caption>
          <h5>"Overwatch 2"</h5>
          <p>{Item.title}</p>
          
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{marginLeft:"28%"}}
      
          width={"700"}
          height={"400"}
          className="d-block "
          src="https://www.mmobomb.com/g/523/thumbnail.jpg"
          alt="Lost Ark"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
        className="d-block"
        style={{marginLeft:"28%"}}
      
          width={"700"}
          height={"400"}
          src="https://www.mmobomb.com/g/1113/thumbnail.jpg"
          alt="PUBG: BATTLEGROUNDS"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mainc;