import React from "react";
import NoodLogo from "../components/NoodLogo"
import Footer from "../components/Footer";
// import Api from "../utils/Api"

function DineIn() {


//  const [restaurant , setRestaurant] = useState([])

//     useEffect(() => {
//         Api.handleYelp("sushi" , "Irvine,CA").then(results => {
//             console.log(results)
//             setRestaurant(results.data)
//         })
//     },[])


    return (
        <div>
            {/* {console.log(restaurant)} */}
            <NoodLogo />
            <div className="container">
                <h1>Dine In</h1>
            </div>
            <Footer />
        </div>
    );
}

export default DineIn;