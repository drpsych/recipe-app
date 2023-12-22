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
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
        );
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes);
    };

    return (
        <div className="wrapper">
            <h3>Popular Picks</h3>
            <Splide
                options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
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
