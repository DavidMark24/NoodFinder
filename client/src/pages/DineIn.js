import React, { useState, useEffect, useContext } from "react";
import dineInLogo from "../images/dineInLogo.svg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";
import LoadingBar from "../images/loadingBar.svg";
import API from "../utils/Api";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

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
                    <div className="d-flex mt-5 justify-content-center">
                    <img className="loading" src={LoadingBar} width="50%" alt="loading" />
                </div>
                    :
                    <>
                        <div className="jumbotron logo py-4">
                            <img src={dineInLogo} width='60%' alt="Dine In Logo" />
                        </div>
                        <div className="container logo">
                        <AnimatePresence>
                            <motion.div key={recipeIndex} animate={{ x: 0, opacity: 1 }} initial={{ x: 0, opacity: 0 }} exit={{ x: -600, opacity: 0 }} className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg">
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
                                            <motion.img key={rejectButton} src={rejectButton} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={e => changeRecipe(e)} width='100%' alt="" />
                                        </div>
                                        <div className="col-4">
                                            {/* Empty column */}
                                        </div>
                                        <div className="col-4">
                                            <motion.img key={acceptButton} src={acceptButton} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={e => addToFavorites(e)} width='100%' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            </AnimatePresence>
                        </div>
                    </>
            }
            <Footer />
        </div>
    );
}

export default DineIn;