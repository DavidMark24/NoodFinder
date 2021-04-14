import React , {useState} from 'react'
import API from '../utils/Yelp'
import Api from '../utils/RecipeApi'

const YelpSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location ,setLocation] = useState("Riverside,CA");
  const [query , setQuery] = useState("")

  const handleYelp = async () => {
    const results = await API.handleYelp(searchTerm, location);
    console.log(results);
  };
  const RecipeApi = async () => {
    const results = await Api.RecipeApi(query);
    console.log(results);
  };


  return (
        <div>
          <input id= "search" value={searchTerm} type = "text" onChange={(e) => setSearchTerm(e.target.value)} ></input>
          <input id= "location" value={location} type = "text" onChange={(e) => setLocation(e.target.value)}></input>
            <button onClick = {handleYelp} > Yelp </button>
            <input id= "query" value={query} type = "text" onChange={(e) => setQuery(e.target.value)}></input>
            <button onClick = {RecipeApi} > Recipe </button>
        </div>
    )
}

export default YelpSearch
