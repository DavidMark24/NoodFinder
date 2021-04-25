import React from "react";
import subgenreLogo from "../images/subgenre.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Meals({history}) {
    function getRecipes(subGenre) {
        const urlParams = new URLSearchParams(window.location.search);
        let genre = urlParams.get('genre');
        history.push(`/dinein?genre=${genre}&subGenre=${subGenre}`)
    }
    
    return (
        <div>
            <Navbar history={history}/>
            <div className="jumbotron logo py-4">
                <img src={subgenreLogo} width='80%' alt="Meal Type Options" />
            </div>
            <div className="container">
                <div className="row">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}  onClick={() => getRecipes("breakfast")} className="text-center m-4 meal-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Breakfast</strong></h2>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}  onClick={() => getRecipes("brunch")} className="text-center m-4 meal-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Brunch</strong></h2>
                    </motion.div>
                </div>
                <div className="row">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}  onClick={() => getRecipes("lunch")} className="text-center m-4 meal-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Lunch</strong></h2>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}  onClick={() => getRecipes("dinner")} className="text-center m-4 meal-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Dinner</strong></h2>
                    </motion.div>
                </div>
                <div className="row">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}  onClick={() => getRecipes("dessert")} className="text-center m-4 meal-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Dessert</strong></h2>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}  onClick={() => getRecipes("snacks")} className="text-center m-4 meal-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Snacks</strong></h2>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Meals;