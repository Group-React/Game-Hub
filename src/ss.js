import { useEffect, useState } from "react";
import CardComp from "./card";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {

  let {isAuthenticated, user} = useAuth0()
  console.log(user)
  let stringedFavorites = localStorage.getItem("favorites");
  let favorites = JSON.parse(stringedFavorites);
  let [favoritesState, setFavoritesState] = useState(favorites);

  function handleDelete(index) {
    favorites.splice(index, 1);
    let favoritesCopy = [...favorites];
    setFavoritesState(favoritesCopy);
    let storedData = JSON.stringify(favoritesCopy);
    localStorage.setItem("favorites", storedData);
  }

  function filterByEmail (){
    console.log(isAuthenticated)
    if (isAuthenticated){
      let filteredData = favorites.filter(function(item){
      return user.email === item.email})
      setFavoritesState(filteredData)
    }
  }

  useEffect(function(){filterByEmail()},[])


  return (
    <>
      <div className="cardcontainer">
        {isAuthenticated && favoritesState.length !== 0
          ? favoritesState.map(function (item, index) {
              return (
                <CardComp
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  showFavorites={false}
                  index={index}
                  handleDelete={() => handleDelete(index)}
                  key={index}
                  email= {user.email}
                  showDelete={true}
                />
              );
            })
          : <h3>No search results</h3>}
      </div>
    </>
  );
}

export default Profile;