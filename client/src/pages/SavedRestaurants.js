import React, { useState, useEffect, useContext } from "react";
import onlyFoodsLogo from "../images/onlyFoodsLogo.svg";
import SavedCard from "../components/SavedCard";
import RecipeCard from "../components/SavedCard2";
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";
import API from "../utils/Api";
import Navbar from "../components/Navbar";

function SavedRestaurants({history}) {
    const { token } = useContext(UserContext);

    const [allFavorites, setAllFavorites] = useState([]);
    
    useEffect(() => {
        async function setFavorites() {
            let response = await API.getAllRestaurants(token);
            setAllFavorites(response.data)
        }
        setFavorites();
    }, [])

    async function removeFromFavorites(restaurantID) {
        const favorites = await API.removeFromRestaurants(token, restaurantID);
        setAllFavorites(favorites.data);
    }

    return (
        <div>
            <Navbar history={history}/>
            {
                allFavorites.length === 0 ?
                    <div className="d-flex mt-5 justify-content-center">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        <div className="jumbotron logo py-4">
                            <img src={onlyFoodsLogo} height='150' alt="Nood Finder Logo" />
                        </div>
                        <div className="container favorite-recipes">
                            <h1 class="text-center">Saved Restaurants</h1>
                            {allFavorites.map(restaurant => <RecipeCard
                                key={restaurant._id}
                                restaurantID={restaurant._id}
                                hours={restaurant.hours}
                                image_url={restaurant.image_url}
                                name={restaurant.name}
                                rating={restaurant.rating}
                                phone={restaurant.phone}
                                removeFromFavorites={removeFromFavorites}
                            />)}
                        </div>
                    </>
            }
            
            <Footer />

        </div>

    );
}


export default SavedRestaurants;