import { useEffect, useState } from "react";
import "./components.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

/**
 * Veggie component that fetches and displays random vegetarian recipes.
 * Uses React hooks for state management and Splide for carousel display.
 * Fetches data from Spoonacular API and caches in localStorage.
 * Allows navigating to view more vegetarian recipes.
 */
function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem("veggie");

        if (check) {
            // turning a "STRING" back into an array
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&diet=vegetarian`
            );
            const data = await api.json();

            // setting array in local storage as a "STRING"
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            // console.log(data.recipes);
        }
    };

    return (
        <div className="wrapper">
            <h3>Our Vegetarian Picks</h3>
            <Splide
                options={{
                    perPage: 3,
                    arrows: true,
                    pagination: true,
                    drag: "free",
                    gap: "5rem",
                }}
            >
                {veggie.map((recipe) => {
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
                    <Link to={`/vegetarian`} className="text-link">
                        See more!
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Veggie;
