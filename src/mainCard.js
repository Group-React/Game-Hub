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
          src={Item.image}
          alt={Item.title}
        />
        <Carousel.Caption>
          <h5>{Item.title}</h5>
          <p>{Item.title}</p>
          
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{marginLeft:"28%"}}
      
          width={"700"}
          height={"400"}
          className="d-block "
          src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Second slide"
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
          src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Third slide"
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