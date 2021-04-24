import React from "react";
import TwoOs from "../images/twoOs.svg";
import AccountIcon from "../images/accountIcon.svg";

function Navbar({history}) {
    function toSavedRecipes(event) {
        event.preventDefault();
        history.push('/savedrecipes');
    }

    return (
        <div>
            <nav className="navbar navbar-light navbar-color">
                <a className="navbar-brand mx-3 my-1" href="/choice">
                    <h1 className="white">Only <strong>F<img src={TwoOs} width="60" alt="" />ds</strong></h1>
                </a>
                <a onClick={(e) => toSavedRecipes(e)} href="/savedrecipes">
                    <img className="navbar-box-right mx-4" src={AccountIcon} width="60" alt="" />
                </a>
            </nav>
        </div>
    );
}

export default Navbar;