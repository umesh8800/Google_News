import React from 'react'
import Shakya from './Shakya.jpg'
// import './Navbar.css' ;

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light" >
                <div class="container-fluid" style={{ backgroundColor: "#FFDAB9", position: "fixed", zIndex: "1000", paddingTop: "100px" }}>
                    <img src={Shakya} style={{ width: "100px", height: "100px", borderRadius: "80%" }}></img>

                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "380px", marginRight: "180px", height: "50px" }} />
                        <button class="btn btn-outline-success" type="submit" style={{ width: "140px", height: "50px", backgroundColor: "white", color: "black" }}>Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
