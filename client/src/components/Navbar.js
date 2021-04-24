import React from "react";
import TwoOs from "../images/twoOs.svg";
import AccountIcon from "../images/accountIcon.svg";
import { motion } from "framer-motion";

function Navbar({history}) {
    function toSavedRecipes(event) {
        event.preventDefault();
        history.push('/savedrecipes');
    }

    function toSavedRestaurants(event) {
        event.preventDefault();
        history.push('/savedrestaurants');
    }

    return (
        <div>
            <nav className="navbar navbar-light navbar-color">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="navbar-brand mx-3 my-1" href="/choice">
                    <h1 className="white">Only <strong>F<img src={TwoOs} width="60" alt="" />ds</strong></h1>
                </motion.a>
                <a onClick={(e) => toSavedRecipes(e)} href="/savedrecipes">
                    <motion.img key={AccountIcon} src={AccountIcon} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="navbar-box-right mx-4" width="60" alt="" />
                </a>
                <a onClick={(e) => toSavedRestaurants(e)} href="/savedrestaurants">
                    <img className="navbar-box-right mx-4" src={AccountIcon} width="60" alt="" />
                </a>
            </nav>
        </div>
    );
}

export default Navbar;