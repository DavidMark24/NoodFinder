import axios from 'axios';

const BASEURL = "https://api.edamam.com/search"
const corsAny = "https://cors-anywhere.herokuapp.com/" 
const app_key = "bf7f7bb5f66f4023a13dfcd1c7c94fd3"
const app_id = "97b6a1fd"


const API = {
  RecipeApi : (query) => {
      const config = {
          params : {
              q : query,
              app_id : `${app_id}`,
              app_key :` ${app_key}`
          },
      }
      return axios.get(corsAny + BASEURL , config )
  }
}
export default API;
