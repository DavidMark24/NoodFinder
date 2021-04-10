import React from "react";
import Lemon from "../images/lemon.jpg";
// import FruitParfait from "../images/fruitParfait.jpg";

function Splash() {
    return (
        <div>
            <div className="row tan_bg splashSpacingTop">
                <img src={Lemon} alt="" />
            </div>
            <div className="row pink_bg splashSpacingBottom">
                <h1 className="white text-center"> Welcome </h1>
            </div>
        </div>
    );
}

export default Splash;