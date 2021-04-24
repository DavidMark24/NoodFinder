import React from "react";
import RejectButton from '../images/rejectButton.svg';

function RecipeCard({ recipeID, cookTime, image, name, servings, url, removeFromFavorites }) {
    return (
        <div className="my-3 cuisine-box extra-rounded tan_bg col-lg-7 col-md-10 col-sm-12 white">
            <img src={image} className="recipe-image"></img>
            <div className="recipe-info">
                <a href={url} target="_blank" className="link-color">
                    <h2 >{name}</h2>
                </a>
                <h4>{cookTime} mins</h4>
                <h4>Servings: {servings}</h4>
                <img src={RejectButton} className="reject-recipe-svg"
                onClick={(e) => removeFromFavorites(recipeID)}
                />
            </div>
        </div >

    );
}

export default RecipeCard;