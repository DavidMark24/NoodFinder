import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import UserContext from './utils/UserContext';
import Choice from "./pages/Choice";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Splash from "./pages/Splash";
import EnterEmail from "./pages/EnterEmail";
import ResetPassword from "./pages/ResetPassword";
import Location from "./pages/Location";
import DineIn from "./pages/DineIn";
import EatOut from "./pages/EatOut";
import RecipeCuisines from "./pages/RecipeCuisines";
import RestaurantCuisines from "./pages/RestaurantCuisines";
import Meals from "./pages/Meals";
import SavedRestaurants from "./pages/SavedRestaurants";
import SavedRecipes from "./pages/SavedRecipes";


function App() {
  const [token, setToken] = useState('');
  const value = { token, setToken }

  return (
    <UserContext.Provider value={value}>
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/choice" component={Choice} />
          <Route path="/splash" component={Splash} />
          <Route path="/enteremail" component={EnterEmail} />
          <Route path="/resetpassword/" component={ResetPassword} />
          <Route path="/location/:cuisines/" component={Location} />
          <Route path="/dinein" component={DineIn} />
          <Route path="/eatout/:cuisines/:locationTerm" component={EatOut} />
          <Route path="/recipecuisines" component={RecipeCuisines} />
          <Route path="/restaurantcuisines" component={RestaurantCuisines} />
          <Route path="/meals" component={Meals} />
          <Route path="/savedrecipes" component={SavedRecipes} />
          <Route path="/savedrestaurants" component={SavedRestaurants} />
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
