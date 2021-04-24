import React from "react";
import dineIn from "../images/dineInSquare.jpg";
import eatOut from "../images/eatOutSquare.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import eateries from "../images/eateries.svg";
import recipes from "../images/recipes.svg";
import saved from "../images/saved.svg";

function Choice({history}) {
    function toSavedRecipes(event) {
        event.preventDefault();
        history.push('/savedrecipes');
    }

    return (
        <div>
            <Navbar history={history}/>
            <div className="container">
                <div class="logo">
                    <img className="mt-2 py-4" src={saved} width='50%' alt=""/>
                </div>
                <div className="row logo mt-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="col-lg-5 col-md-5 col-sm-12 shadow-lg p-3 m-4 rounded tan_bg">
                        <Link onClick={(e) => toSavedRecipes(e)} href="/savedrecipes">
                            <div className="box light_brown_bg p-2 rounded">
                                <img classNameName="rounded" src={dineIn} width='100%' alt=""/>
                            </div>
                            <div className="logo">
                                <img className="mt-2 py-4" src={recipes} width='90%' alt=""/>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="col-lg-5 col-md-5 col-sm-12 shadow-lg p-3 m-4 rounded tan_bg">
                        <Link to = "/savedrestaurants">
                            <div className="box light_brown_bg p-2 rounded">
                                <img className="rounded" src={eatOut} width='100%' alt=""/>
                            </div>
                            <div className="logo">
                                <img className="mt-2 py-4" src={eateries} width='90%' alt=""/>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            <Footer />
            </div>
        </div>
    );
}

export default Choice;