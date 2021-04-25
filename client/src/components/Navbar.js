import React, {useContext} from "react";
import TwoOs from "../images/twoOs.svg";
import AccountIcon from "../images/accountIcon.svg";
import UserContext from "../utils/UserContext";
import { motion } from "framer-motion";

function Navbar({history}) {
    function toChoice(event) {
        event.preventDefault();
        history.push('/choice');
    }

    function toUserSave(event) {
        event.preventDefault();
        history.push('/usersave')
    }

    return (
        <div>
            <nav className="navbar navbar-light navbar-color">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
                onClick={(e) => toChoice(e)} 
                className="navbar-brand mx-3 my-1" href="/choice">
                    <h1 className="white">Only <strong>F<img src={TwoOs} width="60" alt="" />ds</strong></h1>
                </motion.a>
                <a onClick={(e) => toUserSave(e)} href="/usersave">
                    <motion.img key={AccountIcon} src={AccountIcon} whileHover={{ scale: 1.2, rotate: [0, 360, 360]}} whileTap={{ scale: 0.8 }} className="navbar-box-right mx-4" width="60" alt="" />
                </a>
            </nav>
        </div>
    );
}

export default Navbar;