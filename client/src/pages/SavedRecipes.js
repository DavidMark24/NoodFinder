import React, { useContext } from "react";
import onlyFoodsLogo from "../images/onlyFoodsLogo.svg";
import SavedCard from "../components/SavedCard";
import Footer from "../components/Footer";
import API from "../utils/Api";
import UserContext from "../utils/UserContext";
import Navbar from "../components/Navbar";

function SavedRecipes() {
    const { token } = useContext(UserContext);

    async function getFavorites() {
        let response = await API.getAllFavorites(token);
        let allFavorites = response.data;
        console.log("all favorites:", allFavorites);
    }
    return (
        <div>
            <Navbar />
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