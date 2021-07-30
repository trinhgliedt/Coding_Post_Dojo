import React from "react";

function NavBar() {

    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around ml-auto" id="navbarDropdown">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link px-lg-5 px-md-3 px-sm-2 logged-out"  href="/">What we offer</a>
                        <a className="nav-item nav-link px-lg-5 px-md-3 px-sm-2 logged-out" href="/">Join us</a>
                        <a className="nav-item nav-link px-lg-5 px-md-3 px-sm-2 logged-out" href="/">Sign in</a>
                        <a className="nav-item nav-link px-lg-5 px-md-3 px-sm-2 logged-in" href="/">Your account</a>
                        <a className="nav-item nav-link px-lg-5 px-md-3 px-sm-2 logged-out" href="/">Contact us</a>
                </div>
                </div>
            
            </div>
        </nav>
        </>
    )
}
export default NavBar;