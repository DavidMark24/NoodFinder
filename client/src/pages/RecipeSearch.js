import React, { useState, useEffect } from 'react'
import API from '../utils/Api';

function RecipeSearch(props) {
  const [allRecipes, setAllRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [recipeIndex, setRecipeIndex] = useState(0);

  useEffect(() => {
    API.getRandomRecipe("mexican", "lunch")
      .then(response => {
        console.log("response:", response.data);
        setAllRecipes(response.data.map(info => info.recipe));
      });
    setCurrentRecipe(allRecipes[recipeIndex]);
  }, []);

  useEffect(() => {
    setCurrentRecipe(allRecipes[recipeIndex]);
  }, [recipeIndex])

  function changeRecipe(event) {
    event.preventDefault();
    setRecipeIndex(recipeIndex + 1);
  }

  // Render current recipe.
  return (
    <>
      {currentRecipe == null ?
        <div></div>
        :
        <>
          <p> current recipe: {currentRecipe.url}</p>
          <button type="button" className="btn btn-primary">Like</button>
          <button onClick={(e) => changeRecipe(e)} type="button" className="btn btn-primary">Dislike</button>
        </>
      }
    </>
  )
}

export default RecipeSearch;