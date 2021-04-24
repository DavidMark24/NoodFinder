import React from "react";
import RejectButton from '../images/rejectButton.svg';

function RecipeCard({ restaurantID, hours, image_url, name, phone, rating, removeFromRestaurants }) {
    return (
        <div className="my-3 cuisine-box extra-rounded tan_bg col-lg-7 col-md-10 col-sm-12 white">
            <img src={image_url} className="recipe-image"></img>
            <div className="recipe-info">
                    <h2 >{name}</h2>
                <h4>{hours} </h4>
                <h4>rating: {rating}</h4>
                <h4>phone: {phone}</h4>
                <img src={RejectButton} className="reject-recipe-svg"
                onClick={(e) => removeFromRestaurants(restaurantID)}
                />
            </div>
        </div >

    );
}

export default RecipeCard;