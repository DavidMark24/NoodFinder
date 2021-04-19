import React from "react";
import onlyFoodsLogo from "../images/onlyFoodsLogo.svg";
import SavedCard from "../components/SavedCard";
import Footer from "../components/Footer";

function SavedRecipes() {
    return (
        <div>
            <div className="jumbotron logo py-4">
                <img src={onlyFoodsLogo} height='150' alt="Nood Finder Logo"/>
            </div>
            <div className="container">
                <h1 class="text-center">Saved Recipes</h1>
                <SavedCard />
            </div>
            <Footer />
        </div>
    );
}

export default SavedRecipes;