import Veggie from "../components/Veggie";
import RandomRecipe from "../components/RandomRecipe";
import React from "react";

function Home() {
    return (
        <div>
            <RandomRecipe></RandomRecipe>
            <Veggie></Veggie>
        </div>
    );
}

export default Home;
