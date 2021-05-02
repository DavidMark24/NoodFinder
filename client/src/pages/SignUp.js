import React, {useEffect, useContext} from "react";
import signUp from "../images/signUpLogo.svg";
import signUpButton from "../images/signUpButton.svg";
import Footer from "../components/Footer";
import axios from 'axios';
import Navbar from "../components/Navbar";

function SignUp({history}) {
    const getElementValue = (id) => document.getElementById(id).value;
    function createNewUser(event) {
        event.preventDefault();
        const IDs = ['firstname-input', 'lastname-input', 'email-input', 'password-input', 'password-confirm'];
        const inputValues = IDs.map(getElementValue);
        if (inputValues[3] !== inputValues[4]) return 'passwords do not match.'
        
        const keys = ['firstName', 'lastName', 'email', 'password'];
        let data = {}
        keys.forEach((key, i) => data[key] = inputValues[i])
        axios.post('/newUser', data)
            .then(response => {
                window.location.href = '/';
            })
            .catch(error => {
                if (error.response.status === 403) alert('The email you provided already has an account.');
                if (error.response.status === 500) alert('Something went wrong with our server, please try again soon.');
            })
    }

    return (
        <div>
            <Navbar history={history}/>
            <div className="container">
                <div className="row spacing">

                </div>
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-8 shadow-lg p-5 tan_bg rounded">
                        <div className="logo">
                            <img src={signUp} alt="LoginLogo" height="100" />
                        </div>
                        <form className="login">
                            <div className="input-group input-group-lg mt-4 ">
                                <input type="text" className="form-control two-right-round-corners" aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm" id="firstname-input" placeholder="First Name" required />
                            </div>
                            <div className="input-group input-group-lg mt-4 ">
                                <input type="text" className="form-control two-right-round-corners" aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm" id="lastname-input" placeholder="Last Name" required />
                            </div>
                            <div className="input-group input-group-lg mt-4 ">
                                <input type="email" className="form-control two-right-round-corners" aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm" id="email-input" placeholder="Email" required />
                            </div>
                            <div className="form-group h2 my-4">
                                <div className="input-group input-group-lg">
                                    <input type="password" className="form-control" aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm" id="password-input" placeholder="Password" required />
                                </div>
                            </div>
                            <div class="form-group h2 my-4">
                                <div class="input-group input-group-lg">
                                    <input type="password" class="form-control" aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm" id="password-confirm" placeholder="Confirm Password" required />
                                </div>
                            </div>
                            <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span className="sr-only">Error:</span> <span className="msg"></span>
                            </div>
                            <div className="text-center">
                                <button onClick={(e) => {createNewUser(e)}} type="submit" className="btn btn-secondary mt-2 mb-1 mx-auto h3 btn-xl"><img src={signUpButton} width='100' alt="loginbtn" /></button>
                            </div>
                        </form>
                        <br />
                        <p className="text-center">Already a member? Sign in <a className="link-color" href="/">HERE!</a></p>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default SignUp;