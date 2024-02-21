import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="copyright">
                <h3>
                    Made with an API from{" "}
                    <a href="https://spoonacular.com/food-api/">Spoonacular</a>.
                </h3>
            </div>
            <div className="contact">
                <FaLinkedin className="icon" />
                <FaGithub className="icon" />
            </div>
        </div>
    );
}

export default Footer;
