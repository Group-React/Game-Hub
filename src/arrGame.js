
import Button from 'react-bootstrap/Button';
import Card1 from './card'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
import { useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Carousel from 'react-bootstrap/Carousel';

 function Arr(){

    let [item,setItem]=useState([]);
    let [activePage, setActivePage] = useState(1);
    async function games(){
        const url = 'https://mmo-games.p.rapidapi.com/games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f87c9a307emsh4cdf243b35b30f0p182621jsnf625afbaee4a',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setItem(result)
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
    async function datagames(event){
        event.preventDefault();
        let sh=event.target.h.value;
        const url = 'https://mmo-games.p.rapidapi.com/games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f87c9a307emsh4cdf243b35b30f0p182621jsnf625afbaee4a',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};


	const response = await fetch(url, options);
	const result = await response.json();
    
    let filtergames=result.filter(function(item){return item.title.toLowerCase().includes(sh.toLowerCase())})
	setItem(filtergames)
    }


useEffect (function(){{games()}},[])

let startIndex = (activePage - 1) * 12;

  let endIndex = startIndex + 12;

  let gamesToDisplay = item.slice(startIndex, endIndex);

 

  let totalPages = Math.ceil(item.length / 12);

  let paginationItems = [];

  for (let number = 1; number <= totalPages; number++) {

    paginationItems.push(

      <Pagination.Item

        key={number}

        active={number === activePage}

        onClick={() => setActivePage(number)}

      >

        {number}

      </Pagination.Item>

    );

  }

return(
    <>
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
        <h5>Lost Ark</h5>
        
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
        <h5>PUBG: BATTLEGROUNDS</h5>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
    <Form className="d-flex"  onSubmit={datagames} id="Search" style={{marginRight:"17%",marginLeft:"18%"}}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="h"
        style={{backgroundColor:"", marginRight:"%"}}
        />
        <Button variant="outline-success" type='Submit'>Search</Button>
    </Form>
    
    <div className='map'>
        {item && item.length !=0 ?gamesToDisplay.map(function(Item){
            return(
              <>
              <Card1 image={Item.thumbnail} title={Item.title} descripion={Item.short_description}  showFavorites={true} />
              
              </>
            )
        }
        ):<h3 style={{marginLeft:"40%",marginTop:"10%", color:"white"}}>No searche resolt</h3>
        }
        <Pagination size="sm" style={{marginLeft:"16%", marginBottom:"10%", position:"absolute"}}>{paginationItems}</Pagination>
    </div>
    </>
)
}
export default Arr;