import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="navBox">
            <GiKnifeFork />
            <Link className="logo" to={"/"}>
                what's for dinner?
            </Link>
        </div>
    );
}

export default Logo;
