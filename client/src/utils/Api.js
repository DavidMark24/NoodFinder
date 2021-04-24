import axios from "axios";

const API = {
  // Recipe
  getRecipeApi: (term) => {
    return axios.get("/api/recipesearch/" + term);
  },
  getRandomRecipe: (genre, query) => {
    return axios.get(`/api/cuisine/${genre}/${query}`);
  },
  addFavoriteRecipe: (recipeData, token) => {
    let config = {
      method: 'post',
      url: '/api/recipes',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
      data : recipeData
    };
    return axios(config);
  },
  getAllFavorites: (token) => {
    let config = {
      method: 'get',
      url: '/api/recipes',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    };
    return axios(config);
  },
  removeFromFavorites: (token, recipeID) => {
    let config = {
      method: 'delete',
      url: `/api/recipes/${recipeID}`,
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    };
    return axios(config);
  },
// Yelp
  handleYelp: (searchTerms, searchLocation) => {
    return axios.get(
      `/api/restaurantsearch/${searchTerms}/${searchLocation}`
    );
  },
  addFavoriteRestaurant: (restaurantData, token) => {
    let config = {
      method: 'post',
      url: '/api/restaurants',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
      data : restaurantData
    };
    return axios(config);
  },
  getAllRestaurants: (token) => {
    let config = {
      method: 'get',
      url: '/api/restaurants',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    };
    return axios(config);
  },

  
};
export default API;
