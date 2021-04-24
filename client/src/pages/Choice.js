import React from "react";
import dineIn from "../images/dineInSquare.jpg";
import dineInLogo from "../images/dineInLogo.svg";
import eatOut from "../images/eatOutSquare.jpg";
import eatOutLogo from "../images/eatOutLogo.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Choice({history}) {
    function chooseGenre(event) {
        event.preventDefault();
        history.push('/recipecuisines')
    }

    return (
        <div>
            <Navbar history={history}/>
            <div class="container">
                <div class="row logo">
                    <div class="col-lg-5 col-md-5 col-sm-12 shadow-lg p-3 m-4 rounded tan_bg">
                    <Link to = {"/recipecuisines"} onClick={(e) => {chooseGenre(e)}}>
                        <div class="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={dineIn} width='100%' alt=""/>
                        </div>
                        <div class="logo">
                            <img class="mt-2 py-4" src={dineInLogo} width='90%' alt=""/>
                        </div>
                    </Link>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 shadow-lg p-3 m-4 rounded tan_bg">
                    <Link to = "/restaurantcuisines">
                        <div class="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={eatOut} width='100%' alt=""/>
                        </div>
                        <div class="logo">
                            <img class="mt-2 py-4" src={eatOutLogo} width='90%' alt=""/>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Choice;