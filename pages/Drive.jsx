import React from "react";
import Login from "./login";
import { getSession, useSession } from "next-auth/react"

const Drive = () => {
    const {session} = useSession();

    if(!session) {
        return <Login />
    }

    return (
        <div>
        <nav class="navbar navbar-expand-lg fixed-top bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="https://i.imgur.com/mRGLaTR.png" alt="Cypress" width="30" height="24" />
                </a>

                <button class="btn btn-outline-dark text-center" type="submit">New Note</button>

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-dark" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <div>
            <section id="Home">
                <div className="container">
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
                 <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-2 mb-3 text-center text-white"></h1>
                        </div>
                        <div className="col-md-8 mt-2">
                        <p className="fs-2 text-center text-white"></p>
                        </div>
                    </div>
                 </div>
            </section>
        </div>
        </div>
    )
}

export default Drive