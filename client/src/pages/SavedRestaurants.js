import React, { useState, useEffect, useContext } from "react";
import RecipeCard from "../components/SavedCard2";
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";
import LoadingBar from "../images/loadingBar.svg";
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
                <img className="loading" src={LoadingBar} width="50%" alt="loading" />
            </div>
                    :
                    <>
                        <div className="container favorite-recipes">
                            <h1 class="text-center">Saved Restaurants</h1>
                            {allFavorites.map(restaurant => <RecipeCard
                                key={restaurant._id}
                                restaurantID={restaurant._id}
                                image_url={restaurant.image_url}
                                name={restaurant.name}
                                address_1={restaurant.address_1}
                                address_2={restaurant.address_2}
                                address_3={restaurant.address_3}
                                city={restaurant.city}
                                zipcode={restaurant.zip_code}
                                state={restaurant.state}
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