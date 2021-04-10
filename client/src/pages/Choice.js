import React from "react";
import NoodLogo from "../components/NoodLogo"
import dineIn from "../images/dineInSquare.jpg";
import dineInLogo from "../images/dineInLogo.svg";
import eatOut from "../images/eatOutSquare.jpg";
import eatOutLogo from "../images/eatOutLogo.svg";

function Choice() {
    return (
        <div>
            <NoodLogo />
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-sm-12 shadow-lg p-3 m-5 rounded tan_bg">
                        <div class="box light_brown_bg p-2 rounded">
                            <img src={dineIn} width='100%' alt=""/>
                        </div>
                        <div class="logo">
                            <img class="mt-2 py-4" src={dineInLogo} width='90%' alt=""/>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 rounded tan_bg">
                        <div class="box light_brown_bg p-2 rounded">
                            <img src={eatOut} width='100%' alt=""/>
                        </div>
                        <div class="logo">
                            <img class="mt-2 py-4" src={eatOutLogo} width='90%' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choice;