import { useEffect, useState } from "react";
import "./components.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        if (check) {
            // turning a "STRING" back into an array
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
            );
            const data = await api.json();

            // setting array in local storage as a "STRING"
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    };

    return (
        <div className="wrapper">
            <h3>Inspirational Picks</h3>
            <Splide
                options={{
                    perPage: 4,
                    arrows: false,
                    pagination: true,
                    drag: "free",
                    gap: "5rem",
                }}
            >
                {popular.map((recipe) => {
                    return (
                        <SplideSlide>
                            <div className="card" key={recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <div className="gradient"></div>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}

export default Popular;
