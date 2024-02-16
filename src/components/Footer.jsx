import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="copyright">
                <h3>
                    Made with API from{" "}
                    <a href="https://spoonacular.com/food-api/">Spoonacular</a>.
                </h3>
            </div>
            <div className="contact">
                <h3>Contact me!</h3>
                <p>LinkedIn</p>
                <p>Github</p>
            </div>
        </div>
    );
}

export default Footer;
