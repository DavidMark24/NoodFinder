import React from "react";
import subgenreLogo from "../images/subgenre.svg";
import Footer from "../components/Footer";

function Meals() {
    return (
        <div>
            <div className="jumbotron logo py-4">
                <img src={subgenreLogo} height='150' alt="Nood Finder Logo"/>
            </div>
            <div className="container">
                <div className="row">
                    <div onClick={event => alert("Breakfast")} className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Breakfast</strong></h2>
                    </div>
                    <div onClick={event => alert("Brunch")} className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Brunch</strong></h2>
                    </div>
                </div>
                <div className="row">
                    <div onClick={event => alert("Lunch")} className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Lunch</strong></h2>
                    </div>
                    <div onClick={event => alert("Dinner")} className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Dinner</strong></h2>
                    </div>
                </div>
                <div className="row">
                    <div onClick={event => alert("Dessert")} className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Dessert</strong></h2>
                    </div>
                    <div onClick={event => alert("Snacks")} className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
                        <h2><strong>Snacks</strong></h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Meals;