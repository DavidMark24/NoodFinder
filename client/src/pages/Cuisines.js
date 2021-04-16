import React from "react";
import genreLogo from "../images/genre.svg";
import dineIn from "../images/dineInSquare.jpg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";

function Cuisines() {
    return (
        <div>
            <div className="jumbotron logo py-4">
                <img src={genreLogo} height='150' alt="Nood Finder Logo"/>
            </div>
            <div className="container logo">
                <div className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg">
                    <div className="box light_brown_bg p-2 rounded">
                        <img className="rounded" src={dineIn} width='100%' alt=""/>
                    </div>
                    <div className="p-3">
                        <div className="row text-center">
                            <h1><strong>Cuisine</strong></h1>
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
}

export default Cuisines;