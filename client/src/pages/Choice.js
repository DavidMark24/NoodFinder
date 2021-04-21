import React from "react";
import OnlyFoodsLogo from "../components/OnlyFoodsLogo"
import dineIn from "../images/dineInSquare.jpg";
import dineInLogo from "../images/dineInLogo.svg";
import eatOut from "../images/eatOutSquare.jpg";
import eatOutLogo from "../images/eatOutLogo.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function Choice() {

    return (
        <div>
            <OnlyFoodsLogo width="50%"/>
            <div class="container">
                <div class="row logo">
                    <Link to = "/dinein">
                        <div class="col-lg-5 col-md-7 col-sm-12 shadow-lg p-3 m-5 rounded tan_bg">
                            <div class="box light_brown_bg p-2 rounded">
                                <img className="rounded" src={dineIn} width='100%' alt=""/>
                            </div>
                            <div class="logo">
                                <img class="mt-2 py-4" src={dineInLogo} width='90%' alt=""/>
                            </div>
                        </div>
                    </Link>
                    <Link to = "/eatout">
                        <div class="col-lg-5 col-md-7 col-sm-12 shadow-lg p-3 m-5 rounded tan_bg">
                            <div class="box light_brown_bg p-2 rounded">
                                <img className="rounded" src={eatOut} width='100%' alt=""/>
                            </div>
                            <div class="logo">
                                <img class="mt-2 py-4" src={eatOutLogo} width='90%' alt=""/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Choice;