import React from "react";

function RecipeCard() {
    return (
        <div onClick={event => alert("Recipe 1")} className="text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white">
            <h2>Recipe</h2>
        </div>
    );
}

export default RecipeCard;