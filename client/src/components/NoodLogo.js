import React from "react";
import noodFinderLogo from "../images/noodFinder.svg";

function NoodLogo() {
    return (
        <div className="jumbotron logo py-4">
            <img src={noodFinderLogo} height='250' alt="Nood Finder Logo"/>
        </div>
    );
}

export default NoodLogo;