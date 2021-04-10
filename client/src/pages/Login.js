import React from "react";
import logIn from "../images/logInLogo.svg";
import logInButton from "../images/logInButton.svg";

function Login() {
    return (
        <div className="container">
            <div className="row spacing">

            </div>
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8 shadow-lg p-5 my-5 tan_bg rounded">
                    <div className="logo">
                        <img src={logIn} alt="LoginLogo" height="100" />
                    </div>
                    <form className="login">
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
                        <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-2 mb-1 mx-auto h3 btn-xl"><img src={logInButton} width='100' alt="loginbtn" /></button>
                        </div>
                    </form>
                    <br />
                    <p className="text-center">Not a member? Sign up <a className="link-color" href="/signup">HERE!</a></p>
                </div>
                <div className="col-2">

                </div>
            </div>
        </div>
    );
}

export default Login;