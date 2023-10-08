
import Button from 'react-bootstrap/Button';
import Card1 from './card'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
import { useEffect } from 'react';

 function Arr(){
    let [item,setItem]=useState([]);
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
return(
    <>
    <Form className="d-flex"  onSubmit={datagames} id="Search">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="h"
        />
        <Button variant="outline-success" type='Submit'>Search</Button>
    </Form>
    
    <div className='map'>
        {item && item.length !=0 ?item.map(function(Item){
            return(
              <>
              <Card1 image={Item.thumbnail} title={Item.title} descripion={Item.short_description}  showFavorites={true} />
              </>
            )
        }
        ):<h3 style={{marginLeft:"40%",marginTop:"10%"}}>no Searche resolt</h3>
        }
    </div>
    </>
)
}
export default Arr;