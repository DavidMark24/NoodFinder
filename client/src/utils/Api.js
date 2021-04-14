import axios from "axios";

const API = {
  // Recipe
  getRecipeApi: (term) => {
    return axios.get("/api/recipesearch/" + term);
  },
// Yelp
  handleYelp: (searchTerms, searchLocation) => {
    return axios.get(
      "/api/restaurantsearch/" + searchTerms + "/" + searchLocation
    );
  },

  
};
export default API;
