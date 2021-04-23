import React , {useEffect , useState} from "react";
import OnlyFoodsLogo from "../components/OnlyFoodsLogo"
import eatOutLogo from "../images/eatOutLogo.svg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";
import API from "../utils/Api"
import { cuisines } from "../CuisinesData";

function EatOut(props) {
    
    const [restaurant , setRestaurant] = useState([])
    const [recipeIndex, setRecipeIndex] = useState(0)


    
    
    useEffect(() => {
     console.log(props);
        API.handleYelp(props.match.params.cuisines ,props.match.params.locationTerm)
            .then(response => {
                setRestaurant(response.data)
                shuffleRecipes(response.data);
                console.log(response)
            });
    }, []);

    function changeRecipe(event) {
        event.preventDefault();
        setRecipeIndex(recipeIndex + 1);
    }

    function addToFavorites(event) {
        event.preventDefault();
        // const {image, label, totalTime, yield}
    }
    
    function shuffleRecipes(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    
    return (
        
        <div>
            <OnlyFoodsLogo />
            {
                restaurant[recipeIndex] == null ?

            <div className="d-flex mt-5 justify-content-center">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>

            <div className="jumbotron logo py-4">
                <img src={eatOutLogo} height='150' alt="Nood Finder Logo"/>
            </div>
            <div className="container logo">
                    <div className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg">
                        <div className="box light_brown_bg p-2 rounded">
                            <img className="rounded" src={restaurant[recipeIndex].image_url} width='100%' alt=""/>
                        </div>
                        <div className="p-3">
                            <div className="row text-center">
                            {  console.log(restaurant[recipeIndex].name)}
                                <h1><strong>{restaurant[recipeIndex].name}</strong></h1>
                            </div>
                            <div className="row text-center">
                                <h3>{restaurant[recipeIndex].is_closed === false ? "Open " : "Close"}</h3>
                            </div>
                            <div className="row text-center">
                                <h3>{restaurant[recipeIndex].display_phone}</h3>
                            </div>
                            <div className="row text-center mt-4">
                                <div className="col-4">
                                <img onClick={e => changeRecipe(e)} src={rejectButton} width='100%' alt="" />
                                </div>
                                <div className="col-4">
                                    {/* Empty column */}
                                </div>
                                <div className="col-4">
                                <img onClick={e => changeRecipe(e)} src={acceptButton} width='100%' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </>
}
            <Footer />
        </div>
    );
};

export default EatOut;