
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


	const response = await fetch(url, options);
	const result = await response.json();
    setItem(result)
	
 
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
        id="mainImg"
        width={"700"}
        height={"400"}
        src="https://www.mmobomb.com/g/452/thumbnail.jpg"
      />   
      </Carousel.Item>
    <Carousel.Item>
      <img
      style={{marginLeft:"28%"}}
      id="mainImg2"
        width={"700"}
        height={"400"}
        className="d-block "
        src="https://www.mmobomb.com/g/12/thumbnail.jpg"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
       
      className="d-block"
      style={{marginLeft:"28%"}}
      id="mainImg3"
        width={"700"}
        height={"400"}
        src="https://www.mmobomb.com/g/23/thumbnail.jpg"
      />
    </Carousel.Item>
  </Carousel>
  
    <Form  className="d-flex"  onSubmit={datagames} id="Search">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="h"
          id="searchBox"
        />
        <Button id="searchButton" variant="outline-success" type='Submit'>Search</Button>
    </Form>
    
    <div className='map'>
        {item && item.length !=0 ?gamesToDisplay.map(function(Item){
            return(
              <>
              <Card1 image={Item.thumbnail} title={Item.title} short_description={Item.short_description} genre={Item.genre}  showFavorites={true} />
              
              </>
            )
        }
        ):<h3 style={{marginLeft:"40%",marginTop:"2%", color:"white"}}>"Sorry, No searche result"</h3>
        }
        <Pagination size="sm" style={{color:"white", marginLeft:"17.5%", marginBottom:"10%", position:"absolute"}} >{paginationItems}</Pagination>
    </div>
    </>
)
}
export default Arr;