import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiTacos, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <div className="list">
            <NavLink to={"cuisine/Italian"} className="cat-link">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={"cuisine/American"} className="cat-link">
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={"cuisine/Mexican"} className="cat-link">
                <GiTacos />
                <h4>Mexican</h4>
            </NavLink>
            <NavLink to={"cuisine/Asian"} className="cat-link">
                <GiChopsticks />
                <h4>Asian</h4>
            </NavLink>
        </div>
    );
}

export default Category;