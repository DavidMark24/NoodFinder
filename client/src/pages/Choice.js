import React from "react";
import OnlyFoodsLogo from "../components/OnlyFoodsLogo"
import dineIn from "../images/dineInSquare.jpg";
import dineInLogo from "../images/dineInLogo.svg";
import eatOut from "../images/eatOutSquare.jpg";
import eatOutLogo from "../images/eatOutLogo.svg";
import Footer from "../components/Footer";


function Choice() {

    return (
        <div>
            <OnlyFoodsLogo width="50%"/>
            <div className="container">
                <div className="row">
                    <div onClick={event =>  window.location.href='/dinein'} class="col-md-5 col-sm-12 shadow-lg p-3 m-5 rounded tan_bg">
                        <div className="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={dineIn} width='100%' alt=""/>
                        </div>
                        <div className="logo">
                            <img className="mt-2 py-4" src={dineInLogo} width='90%' alt=""/>
                        </div>
                    </div>
                    <div onClick={event =>  window.location.href='/eatout'} className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 rounded tan_bg">
                        <div className="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={eatOut} width='100%' alt=""/>
                        </div>
                        <div className="logo">
                            <img className="mt-2 py-4" src={eatOutLogo} width='90%' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Choice;