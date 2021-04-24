import React from "react";
import onlyFoodsLogo from "../images/onlyFoodsLogo.svg";
import SavedCard from "../components/SavedCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function SavedRestaurants({history}) {
    return (
        <div>
            <Navbar history={history}/>
            <div className="jumbotron logo py-4">
                <img src={onlyFoodsLogo} height='150' alt="Nood Finder Logo"/>
            </div>
            <div className="container">
                <h1 className="text-center">Saved Restaurants</h1>
                <SavedCard />
            </div>
            <Footer />
        </div>
    );
}

export default SavedRestaurants;