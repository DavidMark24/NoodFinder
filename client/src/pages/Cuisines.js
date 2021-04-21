import React, {useState} from "react";
import genreLogo from "../images/genre.svg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";
import { cuisines } from "../CuisinesData";
import { Link } from "react-router-dom";

function Cuisines(props) {
    const [cuisineIndex, setCuisineIndex] = useState(0);

    function changeCuisine(event) {
        event.preventDefault();
        if (cuisineIndex === (cuisines.length - 1)) {
            alert("Choose something already!")
            setCuisineIndex(0);
        }
        else {setCuisineIndex(cuisineIndex + 1);}
    }

    return (
        <div>
            <div className="jumbotron logo py-4">
                <img src={genreLogo} width='70%' alt="Nood Finder Logo"/>
            </div>
            <div className="container logo">
                <div className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg">
                    <div className="box light_brown_bg p-2 rounded">
                        <img className="rounded" src={cuisines[cuisineIndex].image} width='100%' alt=""/>
                    </div>
                    <div className="p-3">
                        <div className="row text-center">
                            <h1><strong>{cuisines[cuisineIndex].name}</strong></h1>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col-4">
                                <img onClick={e => changeCuisine(e)} src={rejectButton} width='100%' alt=""/>
                            </div>
                            <div className="col-4">
                                {/* Empty column */}
                            </div>
                            <div className="col-4">
                                <Link to = "/dinein">
                                    <img id={cuisines[cuisineIndex].id} src={acceptButton} width='100%' alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cuisines;