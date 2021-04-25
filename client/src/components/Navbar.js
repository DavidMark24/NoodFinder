import React, {useContext} from "react";
import TwoOs from "../images/twoOs.svg";
import AccountIcon from "../images/accountIcon.svg";
import UserContext from "../utils/UserContext";

function Navbar({history}) {
    const {token} = useContext(UserContext);

    function toSavedRecipes(event) {
        event.preventDefault();
        if (token === '') {
            alert('Sign in to view your favorite recipes.')
            history.push('/')
        }
        else history.push('/savedrecipes');
    }

    function toChoice(event) {
        event.preventDefault();
        history.push('/choice');
    }

    return (
        <div>
            <nav className="navbar navbar-light navbar-color">
                <a onClick={(e) => toChoice(e)} className="navbar-brand mx-3 my-1" href="/choice">
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