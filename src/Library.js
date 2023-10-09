import { useEffect, useState } from "react";
import Card1 from "./card";
import Pagination from 'react-bootstrap/Pagination';
import { useAuth0 } from '@auth0/auth0-react';


function Favorit (){
    let [activePage, setActivePage] = useState(1);
    let {isAuthenticated,user}=useAuth0()
    console.log(user)
    let Favorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(Favorites);
    let [favoritesState, setFavoritesState] = useState(favorites)

    function handleDelete (index) {

        favorites.splice(index, 1)
        let favoritesCopy = [...favorites]
        setFavoritesState(favoritesCopy)
        let Data = JSON.stringify(favoritesCopy)
        localStorage.setItem("favorites", Data)
      }
    function favoritData(){
        if(isAuthenticated){
         let filterfavorit=favorites.fiter(function(item){
         return user.email === item.email})
         setFavoritesState(filterfavorit)
        }
       
    }
    useEffect(function(){favoritData()},[])
    let startIndex = (activePage - 1) * 12;

    let endIndex = startIndex + 12;
  
    let gamesToDisplay = favoritesState.slice(startIndex, endIndex);
  
   
  
    let totalPages = Math.ceil(favoritesState.length / 12);
  
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
        <div className="map">
    {isAuthenticated && favoritesState.length !==0 
    ? gamesToDisplay.map(function(item, index){
            return(
              <>
                <Card1 image={item.image} title={item.title} descripion={item.short_description} showFavorites={false}  index = {index} 
                handleDelete={()=>{handleDelete(index)}} key={index} email={user.email} showDelete={true}/>
                </>
            )
        }
    ) : <h3 style={{color:'white'}}>No Game in Library</h3>}
    <Pagination size="sm" style={{marginLeft:"16%", position:"",}}>{paginationItems}</Pagination>
    </div>
        </>
    )
}

export default Favorit;