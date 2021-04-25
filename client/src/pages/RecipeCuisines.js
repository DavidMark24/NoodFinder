import React, {useState} from "react";
import genreLogo from "../images/genre.svg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";
import { cuisines } from "../CuisinesData";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

function RecipeCuisines({history}) {
    const [cuisineIndex, setCuisineIndex] = useState(0);

    function chooseSubGenre(event) {
        event.preventDefault();
        history.push(`/meals?genre=${cuisines[cuisineIndex].name}`);
    }

    function changeCuisine(event) {
        event.preventDefault();
        if (cuisineIndex === (cuisines.length - 1)) {
            alert("Choose something already! Take it from the top.")
            setCuisineIndex(0);
        }
        else {setCuisineIndex(cuisineIndex + 1);}
    }

    return (
        <div>
            <Navbar history={history}/>
            <div className="jumbotron logo py-4 mt-4">
                <img src={genreLogo} width='70%' alt="Cuisine Options"/>
            </div>
            <div className="container logo">
            <AnimatePresence>
                <motion.div key={cuisineIndex} animate={{ x: 0, opacity: 1 }} initial={{ x: 0, opacity: 0 }} exit={{ x: -600, opacity: 0 }} className="col-lg-5 col-m-7 col-sm-8 shadow-lg p-3 m-4 my-3 extra-rounded tan_bg">
                    <div className="box light_brown_bg p-2 rounded">
                        <img className="rounded" src={cuisines[cuisineIndex].image} width='100%' alt=""/>
                    </div>
                    <div className="p-3">
                        <div className="row text-center">
                            <h1><strong>{cuisines[cuisineIndex].name}</strong></h1>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col-4">
                                <motion.img key={rejectButton} src={rejectButton} whileHover={{ scale: 1.2 }}  onClick={e => changeCuisine(e)} src={rejectButton} width='100%' alt=""/>
                            </div>
                            <div className="col-4">
                                {/* Empty column */}
                            </div>
                            <div className="col-4">
                                <Link to = '/meal' onClick={(e) => chooseSubGenre(e)}>
                                    <motion.img key={acceptButton} src={acceptButton} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}  id={cuisines[cuisineIndex].id} src={acceptButton} width='100%' alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            </div>
            <Footer />
        </div>
    );
}

export default RecipeCuisines;