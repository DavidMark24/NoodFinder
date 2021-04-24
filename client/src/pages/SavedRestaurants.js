import React from "react";
import SavedCard from "../components/SavedCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function SavedRestaurants({history}) {
    return (
        <div>
            <Navbar history={history}/>
            <div className="container mt-5">
                <h1 class="text-center mb-5">Saved Restaurants</h1>
                <div class = "row logo mx-1">
                    <SavedCard />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SavedRestaurants;