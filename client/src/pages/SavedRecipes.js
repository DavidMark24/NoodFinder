import React, { useState, useEffect, useContext } from "react";
import RecipeCard from "../components/SavedCard";
import Footer from "../components/Footer";
import API from "../utils/Api";
import UserContext from "../utils/UserContext";
import Navbar from "../components/Navbar";
import LoadingBar from "../images/loadingBar.svg";
import "../App.css";
import jwt from "jwt-simple";

function SavedRecipes({ history }) {
    const { token } = useContext(UserContext);
    const [allFavorites, setAllFavorites] = useState([]);

    useEffect(() => {
        async function setFavorites() {
            let response = await API.getAllFavorites(token);
            setAllFavorites(response.data)
        }
        setFavorites();
    }, [])

    async function removeFromFavorites(recipeID) {
        const favorites = await API.removeFromFavorites(token, recipeID);
        setAllFavorites(favorites.data);
    }

    return (
        <div>
            <Navbar history={history} />
            {
                allFavorites.length === 0 ?
                    <div className="d-flex mt-5 justify-content-center">
                        <img className="loading" src={LoadingBar} width="50%" alt="loading" />
                    </div>
                    :
                    <>
                        <div className="container favorite-recipes">
                            <h1 class="text-center">Saved Recipes</h1>
                            {allFavorites.map(recipe => <RecipeCard
                                key={recipe._id}
                                recipeID={recipe._id}
                                cookTime={recipe.cookTime}
                                image={recipe.image}
                                name={recipe.name}
                                servings={recipe.servings}
                                url={recipe.url}
                                removeFromFavorites={removeFromFavorites}
                            />)}
                        </div>
                    </>
            }
            <Footer />
        </div>
    );
}

export default SavedRecipes;