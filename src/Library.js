import { useEffect, useState } from "react";
import Card1 from "./card";
import Pagination from 'react-bootstrap/Pagination';
import { useAuth0 } from '@auth0/auth0-react';


function Favorit (){
    let [activePage, setActivePage] = useState(1);
    let {isAuthenticated,user,isLoading}=useAuth0()
    console.log(user)
    let Favorites = localStorage.getItem("favorites");
    let favorites = JSON.parse(Favorites);
    let [favoritesState, setFavoritesState] = useState(favorites)

    function handleDelete (index) {

     

      favorites.splice(index, 1)

      let favoritesCopy = [...favorites]

      let filteredData = favoritesCopy.filter(function(item){

        return user.email === item.email})

        setFavoritesState(filteredData)

       

      // setFavoritesState(favoritesCopy)

      let Data = JSON.stringify(favoritesCopy)

      localStorage.setItem("favorites", Data)

    }
      function favoritData (){
        console.log(isAuthenticated)
        if (isAuthenticated){
          let filteredData = favorites.filter(function(item){
          return user.email === item.email})
          setFavoritesState(filteredData)
        }
      }
      useEffect(() => {

        if (!isLoading) {
    
          favoritData();
    
        }
    
      }, [isLoading]);
    


    return(
        <>
        <div className="map">
    {isAuthenticated && favoritesState.length !==0 
    ? favoritesState.map(function(item, index){
            return(
              <>
                <Card1 image={item.image} title={item.title} short_description={item.short_description} showFavorites={false}  index = {index} 
                handleDelete={()=>{handleDelete(index)}} key={index} email={user.email} showDelete={true}/>
                
                </>
            )
        }
    )
     
    : <><h3 style={{color:'white',marginLeft:"40%" , marginTop:"10%",marginBottom:"10%"}}>No Game in Library</h3>
        </>}
    </div>
        </>
    )
}

export default Favorit;