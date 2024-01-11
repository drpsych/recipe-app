import React from "react";
import "./components.css";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="nav">
                <div></div>
                <GiKnifeFork />
                <Link className="logo" to={"/"}>
                    whats for dinner?
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
