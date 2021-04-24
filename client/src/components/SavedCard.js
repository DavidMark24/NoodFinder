import React from "react";

function RecipeCard({ recipeID, cookTime, image, name, servings, url }) {
    return (
        <div className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
            <a href={url} target="_blank" className="link-color">
                <h2 >{name}</h2>
            </a>
        </div >

    );
}

export default RecipeCard;