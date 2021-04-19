import React, {useEffect, useState} from "react";
import OnlyFoodsLogo from "../components/OnlyFoodsLogo"
import dineIn from "../images/dineInSquare.jpg";
import dineInLogo from "../images/dineInLogo.svg";
import eatOut from "../images/eatOutSquare.jpg";
import eatOutLogo from "../images/eatOutLogo.svg";
import Footer from "../components/Footer";
import Api from "../utils/Api"

function Choice() {
    const [recipes,setRecipes] = useState([])
    const [restaurant , setRestaurant] = useState([])

    useEffect(() => {
        Api.getRecipeApi("chicken").then(results => {
            console.log(results);
            setRecipes(results.data)
        })
        Api.handleYelp("sushi" , "Irvine,CA").then(results => {
            console.log(results)
            setRestaurant(results.data)
        })
    },[])

    return (
        <div>
            {console.log(recipes,restaurant)}
            <OnlyFoodsLogo width="50%"/>
            <div class="container">
                <div class="row">
                    <div onClick={event =>  window.location.href='/dinein'} class="col-md-5 col-sm-12 shadow-lg p-3 m-5 rounded tan_bg">
                        <div class="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={dineIn} width='100%' alt=""/>
                        </div>
                        <div class="logo">
                            <img class="mt-2 py-4" src={dineInLogo} width='90%' alt=""/>
                        </div>
                    </div>
                    <div onClick={event =>  window.location.href='/eatout'} class="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 rounded tan_bg">
                        <div class="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={eatOut} width='100%' alt=""/>
                        </div>
                        <div class="logo">
                            <img class="mt-2 py-4" src={eatOutLogo} width='90%' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Choice;