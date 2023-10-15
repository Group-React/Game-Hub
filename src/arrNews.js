import info from './news.json';
import News from './news';
import { useState } from 'react';
import { useEffect } from 'react';

function Information (){

    let [item,setItem]=useState([]);

    async function description (){
        const url = 'https://mmo-games.p.rapidapi.com/latestnews';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${process.env.REACT_APP_APIKEY}`,
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setItem(result);
	console.log(result);
} catch (error) {
	console.error(error);
}
    }

    useEffect (function(){{description()}},[])
    
    return(
        <>

        {item.map (function (Item){
            return(
                <>
                <News image={Item.thumbnail} ti={Item.title} description={Item.short_description} />                
                </>
                )
        })}
        </>


    )
}

export default Information;