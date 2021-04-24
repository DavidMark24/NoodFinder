import React, { useState, useEffect, useContext } from "react";
import onlyFoodsLogo from "../images/onlyFoodsLogo.svg";
import RecipeCard from "../components/SavedCard";
import Footer from "../components/Footer";
import API from "../utils/Api";
// import UserContext from "../utils/UserContext";

function SavedRecipes() {
    // const { token } = useContext(UserContext);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFua3VzaGNoYWxsYUBnbWFpbC5jb20ifQ.sI89oeO8rtRDIJmXFYLqsl3kb4qB1fNmW3p2iIvYIM0'
    // console.log("token:", token);
    const [allFavorites, setAllFavorites] = useState([]);

    useEffect(() => {
        async function setFavorites() {
            let response = await API.getAllFavorites(token);
            setAllFavorites(response.data)
        }
        setFavorites();
    }, [])

    console.log("all favorites:", allFavorites);
    return (
        <div>
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
                        <div className="container">
                            <h1 class="text-center">Saved Recipes</h1>
                            {allFavorites.map(recipe => <RecipeCard
                                key={recipe._id}
                                recipeID={recipe._id}
                                cookTime={recipe.cookTime}
                                image={recipe.image}
                                name={recipe.name}
                                servings={recipe.servings}
                                url={recipe.url}
                            />)}
                        </div>
                    </>
            }
            <Footer />

        </div>

    );
}

export default SavedRecipes;