import React, { useState, useEffect, useContext } from "react";
import dineInLogo from "../images/dineInLogo.svg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";
import API from "../utils/Api";
import Navbar from "../components/Navbar";

function DineIn({history}) {
    const { token } = useContext(UserContext);

    const [allRecipes, setAllRecipes] = useState([]);
    const [recipeIndex, setRecipeIndex] = useState(0);

    // You can pass cuisine and type in props, or through url. 
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        // Check for token.
        if (token === '') {
            // Redirect to login page if no token is present.
            window.location.href = '/';
        }
     
        let genre = urlParams.get('genre');
        let subGenre = urlParams.get('subGenre');
        API.getRandomRecipe(genre, subGenre)
            .then(response => {
                let goodRecipes = response.data
                    .map(res => res.recipe)
                    .filter(recipe => recipe.totalTime !== 0)
                    .filter(recipe => recipe.yield !== 0);
                shuffleRecipes(goodRecipes);
                setAllRecipes(goodRecipes);
            });
    }, []);

    function changeRecipe(event) {
        event.preventDefault();
        if (recipeIndex === recipeIndex.length - 1) {
            alert("Choose something already! Take it from the top.");
            setRecipeIndex(0);
        }
        setRecipeIndex(recipeIndex + 1);
    }

    async function addToFavorites(event) {
        event.preventDefault();
        // TODO: Use token instead of email.
        let name = allRecipes[recipeIndex].label;
        let cookTime = allRecipes[recipeIndex].totalTime;
        let servings = allRecipes[recipeIndex].yield;
        let url = allRecipes[recipeIndex].url;
        let image = allRecipes[recipeIndex].image;
        let recipeData = { name, cookTime, servings, url, image};
        const res = await API.addFavoriteRecipe(recipeData, token);
        changeRecipe(event);
    }

    function shuffleRecipes(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return (
        <div>
            <Navbar history={history}/>
            {
                allRecipes[recipeIndex] == null ?
                    // Check out loading.io for cool loading icons.
                    <div className="d-flex mt-5 justify-content-center">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        <div className="jumbotron logo py-4">
                            <img src={dineInLogo} height='150' alt="Nood Finder Logo" />
                        </div>
                        <div className="container logo">
                            <div className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg">
                                <div className="box light_brown_bg p-2 rounded">
                                    <a href={allRecipes[recipeIndex].url}>
                                        <img className="rounded" src={allRecipes[recipeIndex].image} width='100%' alt="" />
                                    </a>
                                </div>
                                <div className="p-3">
                                    <div className="row text-center">
                                        <h2><strong>{allRecipes[recipeIndex].label}</strong></h2>
                                    </div>
                                    <div className="row text-center">
                                        <h3>Preparation Time: {allRecipes[recipeIndex].totalTime}</h3>
                                    </div>
                                    <div className="row text-center">
                                        <h3>Servings: {allRecipes[recipeIndex].yield}</h3>
                                    </div>
                                    <div className="row text-center mt-4">
                                        <div className="col-4">
                                            <img onClick={e => changeRecipe(e)} src={rejectButton} width='100%' alt="" />
                                        </div>
                                        <div className="col-4">
                                            {/* Empty column */}
                                        </div>
                                        <div className="col-4">
                                            <img onClick={e => addToFavorites(e)} src={acceptButton} width='100%' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
            <Footer />
        </div>
    );
}

export default DineIn;