import React , {useState} from "react";
import submitButton from "../images/submitButton.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

function Location(props) {
    const [locationTerm, setLocationTerm ] = useState('')
  

    const handleSumbit = (event) => {
        event.preventDefault();
        props.history.push(`/eatout/${props.match.params.cuisines}/${locationTerm}}`)
    }


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row spacing">

                </div>
                <div className="row">
                    <div className="col-2">

                    </div>
                    <form onSubmit = {handleSumbit} className="login mt-5">
                        <div className="input-group input-group-lg mt-4 ">
                        <div className="input-group input-group-lg">
                                <input value={locationTerm} onChange = {(e) => setLocationTerm(e.target.value)} type="text" className="form-control" aria-label="Large"
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