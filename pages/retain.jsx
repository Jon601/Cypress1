import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Retain = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"> 
                        <img src="https://i.imgur.com/mRGLaTR.png" alt="Cypress" width="30" height="24" />
                    </a>
                </div>
            </nav>

            <section id="Home">
                <div className="container justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 mb-3 text-center"></h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-2">
                            <h1 className="display-4 mb-3 text-center"></h1>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-center" >
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-2 mb-4 text-center text-dark">Don't worry, your note is saved.</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center">
                    <div className="row text-center">
                        <div className="col-fluid mt-2 text-center">
                            <h1 className="display-4 mb-3"></h1>
                            <div className="col-fluid mt-2 text-center">
                                <a type="button" class="btn btn-outline-dark" href="/Login">Sign-in</a>
                                <a className="fs-2 text-center text-dark text-decoration-none m"> // </a>
                                <a type="button" class="btn btn-outline-dark" href="/Register">Register</a>
                                <p className="fs-4 text-center mt-2">to keep it</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Retain