import Mainc from "./mainCard";

import { useState } from 'react';

function Arr(){
    let [item,setItem]=useState([]);
    async function Meal(){
        let api=await fetch('https://www.mmobomb.com/api1/games')
        let data=await api.json();
        setItem(data.meals)
    }     
    
    
    
    return(
        <>
        <div className='map'>
            {item.map(function(Item){
                return(
                  <>
                  <Mainc image={Item.thumbnail} title={Item.title} descripion={Item.strInstructions}  />
                  </>
                )
            }
            )
        }
            
        </div>
        </>
    )
}
export default Arr;