import React from "react";
import onlyFoodsLogo from "../images/onlyFoodsLogo.svg";
import SavedCard from "../components/SavedCard";
import Footer from "../components/Footer";
import API from "../utils/Api";

function SavedRecipes() {
    async function getFavorites() {
        // TODO: Use token instead of email.
        let response = await API.getAllFavorites("ankushchalla@gmail.com");
        let allFavorites = response.data;
        console.log("all favorites:", allFavorites);
    }
    return (
        <div>
            <div className="jumbotron logo py-4">
                <img src={onlyFoodsLogo} height='150' alt="Nood Finder Logo"/>
            </div>
            <div className="container">
                <h1 class="text-center">Saved Recipes</h1>
                <SavedCard />
            </div>
            <button onClick={(e) => getFavorites(e)} type="button" class="btn btn-primary">Primary</button>
            <Footer />
        </div>
    );
}

export default SavedRecipes;