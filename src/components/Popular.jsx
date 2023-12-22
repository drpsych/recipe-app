import { useEffect, useState } from "react";
import "./components.css";

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`
        );
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes);
    };

    return (
        <div>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
                return (
                    <div className="popular" key={recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                );
            })}
        </div>
    );
}

export default Popular;
