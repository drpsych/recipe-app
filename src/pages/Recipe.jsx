import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const dataDetail = await data.json();
        setDetails(dataDetail);
        console.log(dataDetail);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <div className="detailWrapper">
            <div className="img-summary">
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
                <p
                    className="summary"
                    dangerouslySetInnerHTML={{
                        __html: details.summary,
                    }}
                ></p>
            </div>
            <div className="info">
                <button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >
                    Instructions
                </button>
                <button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </button>
                {/* <button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    <NavLink to={"recipe/nutritionLabel/" + details.id}>
                        Nutrition
                    </NavLink>
                </button> */}
                {activeTab === "instructions" && (
                    <div>
                        {/* <h3
                            dangerouslySetInnerHTML={{
                                __html: details.summary,
                            }}
                        ></h3> */}
                        <h3>Instructions</h3>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                        ></p>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <div>
                        <h3>Ingredients</h3>
                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                    {ingredient.original}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Recipe;
