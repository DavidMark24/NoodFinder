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
import Location from "./pages/Location";
import DineIn from "./pages/DineIn";
import EatOut from "./pages/EatOut";
import Cuisines from "./pages/Cuisines";
import Meals from "./pages/Meals";

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
        <Route path="/location" component={Location} />
        <Route path="/dinein" component={DineIn} />
        <Route path="/eatout" component={EatOut} />
        <Route path="/cuisines" component={Cuisines} />
        <Route path="/meals" component={Meals} />
      </div>
    </Router>
  );
}

export default App;
