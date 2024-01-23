import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=${process.env.REACT_APP_RESULT_NUMBER}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        // console.log(recipes.results);
        // console.log(searchedRecipes);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <div className="page">
            {searchedRecipes.length > 0 && (
                <div className="grid">
                    {searchedRecipes.map((item) => {
                        return (
                            <div className="recipe-card" key={item.id}>
                                <Link to={`/recipe/${item.id}`}>
                                    <img src={item.image} alt={item.title} />
                                    <h4>{item.title}</h4>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
            {searchedRecipes.length === 0 && (
                <div className="no-results">
                    <h3>No results found.</h3>
                    <p>Try searching for a different recipe.</p>
                </div>
            )}
        </div>
    );
}

export default Searched;
