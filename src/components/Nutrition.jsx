import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Nutrition() {
    const [label, setLabel] = useState([]);
    const id = useParams().id;

    const getLabel = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/food/menuItems/${id}/nutritionLabel?apiKey=${process.env.REACT_APP_API_KEY}`
            // https://api.spoonacular.com/food/menuItems/{id}/nutritionLabel
        );
        const recipes = await data.json();
        setLabel(recipes.results);
        console.log(recipes.results);
        // setTitle(name);
    };

    return <div>Nutrition</div>;
}

export default Nutrition;
