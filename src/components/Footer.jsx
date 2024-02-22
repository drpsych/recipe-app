import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div class="footer">
                <p>
                    Created using an API from{" "}
                    <a href="https://spoonacular.com/food-api/" target="_blank">
                        Spoonacular
                    </a>
                    .
                </p>
                <ul class="socials">
                    {/* <li>
                        <a href="/">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li> */}
                    <li>
                        <a href="https://github.com/drpsych" target="_blank">
                            <i class="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/brutoncole/"
                            target="_blank"
                        >
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a href="/">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li> */}
                </ul>
                <div class="footer-copyright">
                    <p>copyright &copy;2023 </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
