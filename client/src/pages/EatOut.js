import React from "react";
import eatOutLogo from "../images/eatOutLogo.svg";
import eatOut from "../images/eatOutSquare.jpg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";

function EatOut() {
    return (
        <div>
            <div className="jumbotron logo py-4">
                <img src={eatOutLogo} height='150' alt="Nood Finder Logo"/>
            </div>
            <div className="container logo">
                    <div className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg">
                        <div className="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={eatOut} width='100%' alt=""/>
                        </div>
                        <div className="p-3">
                            <div className="row text-center">
                                <h1><strong>Restaurant</strong></h1>
                            </div>
                            <div className="row text-center">
                                <h3>Hours</h3>
                            </div>
                            <div className="row text-center">
                                <h3>1-800-SND-NOOD</h3>
                            </div>
                            <div className="row text-center mt-4">
                                <div className="col-4">
                                    <img onClick={event => alert("Disliked")} src={rejectButton} width='100%' alt=""/>
                                </div>
                                <div className="col-4">
                                    {/* Empty column */}
                                </div>
                                <div className="col-4">
                                    <img onClick={event => alert("Liked")} src={acceptButton} width='100%' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default EatOut;