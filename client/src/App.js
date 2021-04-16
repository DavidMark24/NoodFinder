import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Choice from "./pages/Choice";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Splash from "./pages/Splash";
import User from "./pages/User";
import EnterEmail from "./pages/EnterEmail";
import ResetPassword from "./pages/ResetPassword";
<<<<<<< HEAD
import RecipeSearch from "./pages/RecipeSearch";
=======
import Location from "./pages/Location";
import DineIn from "./pages/DineIn";
import EatOut from "./pages/EatOut";
>>>>>>> 3e126e5942925662e0026d618d7c7b29a9fa26ed

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/choice" component={Choice} />
        <Route path="/main" component={Main} />
        <Route path="/splash" component={Splash} />
        <Route path="/user" component={User} />
        <Route path="/enteremail" component={EnterEmail} />
        <Route path="/resetpassword/" component={ResetPassword} />
<<<<<<< HEAD
        <Route path="/recipes" component={RecipeSearch} />
=======
        <Route path="/location" component={Location} />
        <Route path="/dinein" component={DineIn} />
        <Route path="/eatout" component={EatOut} />
>>>>>>> 3e126e5942925662e0026d618d7c7b29a9fa26ed
      </div>
    </Router>
  );
}

export default App;
