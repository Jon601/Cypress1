import React from "react";

const Login = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://i.imgur.com/mRGLaTR.png" alt="Cypress" width="30" height="24" />
                    </a>
                </div>
            </nav>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 mb-3 text-center"></h1>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="container ">
                            <div className="row justify-content-center">
                                <div className="col-md-8 mt-5">
                                    <h1 className="display-4 mb-3 text-center"></h1>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4 mb-3" id="follow">
                            <h4 class="card-header p-3 text-center">Login to Cypress
                            </h4>
                            <div class="card-body">
                                <form class="row g-3" >
                                    <div class="col-fluid">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" name="email" />
                                    </div>
                                    <div class="col-fluid">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" name="password" />
                                        <a class="link" href="#">Forgot Your Password?</a>
                                    </div>
                                    <div class="col-fluid">
                                        <label for="inputAddress" class="form-label"></label>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-dark mt-3">Sign in</button>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress2" class="form-label me-2">First-time user?</label>
                                        <a class="link" href="/Register">Register</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <h1 className="display-4 mb-3 text-center"></h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <h1 className="display-4 mb-3 text-center"></h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <h1 className="display-4 mb-3 text-center"></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login