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
  getAllFavorites: (user) => {
    return axios.get(`/api/recipes/${user}`);
  },
// Yelp
  handleYelp: (searchTerms, searchLocation) => {
    return axios.get(
      `/api/restaurantsearch/${searchTerms}/${searchLocation}`
    );
  },

  
};
export default API;
