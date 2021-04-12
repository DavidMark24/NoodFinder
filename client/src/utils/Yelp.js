import axios from 'axios';
// import { config as dotenv } from "dotenv";
// dotenv();

const BASEURL = "https://api.yelp.com/v3/businesses/search"
const BEARER ="aMtxgnIrfpn8vyJa7nZwlht1OO66mUd6w7MOw6aP7z3I_-vB2BSWuUKFMJT1lRSwg6AwVKikz6U1XhVJ0XBcv_9wIXFcHaVz05ICHjWIMZ2CwxY7BYxXjthpswdtYHYx";
const corsAny = "https://cors-anywhere.herokuapp.com/"
// const config = {
//     Authorization: `Bearer ${BEARER}`,
//     params: {
//         terms: "",
//         location: ""
//     }
// };

const API = {
    handleYelp : (searchTerms, searchLocation) => {
        const config = {
            headers: {
                Authorization: `Bearer ${BEARER}`
            },
            params: {
                terms: searchTerms,
                location: searchLocation
            }
        };
        return axios.get(corsAny+BASEURL, config)
    }

}

export default API;

