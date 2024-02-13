import { useEffect, useState } from "react";
import "./components.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { homePageResults } from "../config";

/**
 * RandomRecipe component fetches and displays random recipes.
 * - Fetches random recipes from API on mount.
 * - Stores recipes in localStorage to avoid duplicate API requests.
 * - Displays recipes in a responsive carousel using Splide.
 * - Provides a link to recipes detail page.
 * - Provides a link to inspiration page.
 */
function RandomRecipe() {
    const [random, setRandom] = useState([]);

    useEffect(() => {
        getRandom();
    }, []);

    const getRandom = async () => {
        const check = localStorage.getItem("random");

        if (check) {
            // turning a "STRING" back into an array
            setRandom(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${homePageResults}`
            );
            const data = await api.json();

            // setting array in local storage as a "STRING"
            localStorage.setItem("random", JSON.stringify(data.recipes));
            setRandom(data.recipes);
            // console.log(data.recipes);
        }
    };

    return (
        <div className="wrapper">
            <h3>Inspirational Picks</h3>
            <Splide
                options={{
                    perPage: 3,
                    arrows: true,
                    pagination: true,
                    drag: "free",
                    gap: "5rem",
                }}
            >
                {random.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <div className="card">
                                <Link to={`/recipe/${recipe.id}`}>
                                    <p>{recipe.title}</p>
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                    />
                                    <div className="gradient"></div>
                                </Link>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
            <div className="btn-wrapper">
                <button className="btn">
                    <Link to={`/inspiration`} className="text-link">
                        Get Inspired!
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default RandomRecipe;
