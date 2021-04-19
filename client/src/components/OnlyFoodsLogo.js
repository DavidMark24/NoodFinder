import React from "react";
import onlyFoodsLogo from "../images/onlyFoodsLogo.svg";

function OnlyFoodsLogo() {
    return (
        <div className="jumbotron logo py-4">
            <img src={onlyFoodsLogo} height='250' alt="Nood Finder Logo"/>
        </div>
    );
}

export default OnlyFoodsLogo;