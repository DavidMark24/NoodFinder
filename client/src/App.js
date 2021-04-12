<<<<<<< HEAD
import './App.css';
import YelpSearch from './componets/YelpSearch';

function App() {
  return(
    <YelpSearch/>
  )
=======
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
        <Route path="/resetpassword" component={ResetPassword} />
      </div>
    </Router>
  );
>>>>>>> f46b0c31e679f29b0206bbe9b11dcfb99445e479
}

export default App;
