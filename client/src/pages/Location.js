import React , {useEffect, useState} from "react";
import location from "../images/location.svg";
import submitButton from "../images/submitButton.svg";
import Footer from "../components/Footer";
import API from "../utils/Api"

function Location({place}) {

    const [restaurant , setRestaurant] = useState([])
  


async function yelpData() {
    const {data} = await API.handleYelp("tacos", place) 
    setRestaurant(data)
} 

useEffect(() => {
    yelpData()
}, [])



    const handleSumbit = e => {
        e.preventDefault();
       yelpData()
    }

    return (
        <div className="container">
            <div className="row spacing">

            </div>
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8 shadow-lg px-5 pt-5 pb-3 my-5 tan_bg rounded">
                    <div className="logo">
                        <img src={location} alt="LoginLogo" height="100" />
                    </div>
                    <form onSubmit = {handleSumbit} className="login mt-5">
                        <div className="input-group input-group-lg mt-4 ">
                        <div className="input-group input-group-lg">
                                <input value = {restaurant} onChange = {setRestaurant()} type="text" className="form-control" aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm" id="location-input" placeholder="Enter your city or zipcode" required />
                            </div>
                        </div>
                        <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary m-3 mt-4 h3 btn-xl"><img src={submitButton} width='100' alt="loginbtn" /></button>
                        </div>
                    </form>
                    <br />
                </div>
                <div className="col-2">

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Location;