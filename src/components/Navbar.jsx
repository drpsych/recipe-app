import React from "react";
import "./components.css";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="nav">
                <GiKnifeFork />
                <Link className="logo" to={"/"}>
                    whats for dinner?
                </Link>
                {/* <div className="menu">
                    <h4>test</h4>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;
