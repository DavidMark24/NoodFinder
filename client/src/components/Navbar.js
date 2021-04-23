import React from "react";
import TwoOs from "../images/twoOs.svg";
import AccountIcon from "../images/accountIcon.svg";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light navbar-color">
                <a className="navbar-brand mx-3 my-1" href="/choice">
                        <h1 className = "white">Only <strong>F<img src={TwoOs} width="60" alt="" />ds</strong></h1>
                </a>
                <img className="navbar-box-right mx-4" src={AccountIcon} width="60" alt="" />
            </nav>
        </div>
    );
}

export default Navbar;