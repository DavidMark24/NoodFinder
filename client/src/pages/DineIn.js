import React, { useState, useEffect } from "react";
import dineInLogo from "../images/dineInLogo.svg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";
import API from "../utils/Api";

function DineIn(props) {
    const [allRecipes, setAllRecipes] = useState([]);
    const [recipeIndex, setRecipeIndex] = useState(0);

    useEffect(() => {
        API.getRandomRecipe("mexican", "lunch")
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
        setRecipeIndex(recipeIndex + 1);
    }

    function shuffleRecipes(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    console.log("allRecipes:", allRecipes);
    return (
        <div>
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
                                    <img className="rounded" src={allRecipes[recipeIndex].image} width='100%' alt="" />
                                </div>
                                <div className="p-3">
                                    <div className="row text-center">
                                        <h1><strong>{allRecipes[recipeIndex].label}</strong></h1>
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
                                            <img onClick={e => changeRecipe(e)} src={acceptButton} width='100%' alt="" />
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