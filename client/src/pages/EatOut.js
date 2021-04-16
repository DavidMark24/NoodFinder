import React , {useEffect , useState} from "react";
import NoodLogo from "../components/NoodLogo"
import Footer from "../components/Footer";
import Api from "../utils/Api"

function EatOut() {
    const imgStyle = {
        width: '100px',
        height: '100px',
        margin: '15px'
    }
    
    const [restaurant , setRestaurant] = useState([])

    useEffect(() => {
        Api.handleYelp( "sushi" , "Riverside,CA").then(results => {
            console.log(results)
            setRestaurant(results.data)
        })
    },[])
    
    return (
        <div>
            <NoodLogo />
            <div class="container">
                <h1>Eat Out</h1>
                <div>
                        {
                            restaurant.map(restaurant => <div key = {restaurant.id}> 
                            <img style ={imgStyle} src  = {restaurant.image_url} /> 
                            {restaurant.name} {restaurant.rating}</div>)
                        }
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default EatOut;