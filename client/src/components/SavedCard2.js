import React from "react";
import RejectButton from '../images/rejectButton.svg';

function RecipeCard({ restaurantID, image_url, name, phone, address_1, address_2, address_3, city, zipcode, state, removeFromRestaurants }) {
    return (
        <div className="my-3 cuisine-box extra-rounded tan_bg col-lg-7 col-md-10 col-sm-12 white">
            <img src={image_url} className="recipe-image"/>
            <div className="recipe-info">
                    <h2 >{name}</h2>
                <h4>Address: {address_1} {address_2 } {address_3}, {city}, {state} {zipcode}</h4>
                <h4>Phone: {phone}</h4>
                <img src={RejectButton} className="reject-recipe-svg"
                onClick={(e) => removeFromRestaurants(restaurantID)}
                />
            </div>
        </div >

    );
}

export default RecipeCard;