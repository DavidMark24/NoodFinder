import React , {useEffect , useState , useContext} from "react";
import eatOutLogo from "../images/eatOutLogo.svg";
import rejectButton from "../images/rejectButton.svg";
import acceptButton from "../images/acceptButton.svg";
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";
import API from "../utils/Api"
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

function EatOut(props) {

    const { token } = useContext(UserContext);
    
    const [restaurant , setRestaurant] = useState([])
    const [recipeIndex, setRecipeIndex] = useState(0)

    useEffect(() => {
        API.handleYelp(props.match.params.cuisines , props.match.params.locationTerm)
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


    async function addToFavorites(event) {
        event.preventDefault();
        // TODO: Use token instead of email.
        let name = restaurant[recipeIndex].name;
        let rating = restaurant[recipeIndex].rating;
        let hours = restaurant[recipeIndex].is_closed;
        let phone = restaurant[recipeIndex].display_phone;
        let image_url = restaurant[recipeIndex].image_url;
        let restaurantData = { name, rating, hours, phone, image_url};
        const res = await API.addFavoriteRestaurant(restaurantData, token);
        console.log("new recipe:", res.data);
    }
    
    function shuffleRecipes(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return (
        <div>
            <Navbar history={props.history}/>
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
            <AnimatePresence>
                <motion.div key={recipeIndex} animate={{ x: 0, opacity: 1 }} initial={{ x: 0, opacity: 0 }} exit={{ x: -600, opacity: 0 }} className="col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg">
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
                            <motion.img key={rejectButton} src={rejectButton} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={e => changeRecipe(e)} width='100%' alt="" />
                            </div>
                            <div className="col-4">
                                {/* Empty column */}
                            </div>
                            <div className="col-4">
                            <motion.img key={acceptButton} src={acceptButton} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={e => addToFavorites(e)} width='100%' alt="" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                </AnimatePresence>
            </div>
            </>
}
            <Footer />
        </div>
    );
};

export default EatOut;