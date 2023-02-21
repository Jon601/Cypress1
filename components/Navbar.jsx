import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="https://i.imgur.com/mRGLaTR.png" alt="Cypress" width="30" height="24" /> Cypress
                </a>

                <a type="button" class="btn btn-outline-dark" href="/Retain">Retain</a>
            </div>
        </nav>
    )
}


export default Navbar