import axios from "axios";

const API = {
  // Recipe
  getRecipeApi: (term) => {
    return axios.get("/api/recipesearch/" + term);
  },
  getRandomRecipe: (genre, query) => {
    return axios.get(`/api/cuisine/${genre}/${query}`);
  },
  addFavoriteRecipe: (recipeData) => {
    return axios.post(`/api/recipes`, recipeData);
  },
// Yelp
  handleYelp: (searchTerms, searchLocation) => {
    return axios.get(
      `/api/restaurantsearch/${searchTerms}/${searchLocation}`
    );
  },

  
};
export default API;
