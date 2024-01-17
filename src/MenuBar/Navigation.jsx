import React from "react";
import "./navigation.css";
import { GiKnifeFork } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";
import Search from "../components/Search";

function Navigation() {
    return (
        <div>
            <div className="navBox">
                <GiKnifeFork />
                <Link className="logo" to={"/"}>
                    what's for dinner?
                </Link>
                <div className="menu">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Cuisine <i class="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NavLink to={"cuisine/Asian"}>Asian</NavLink>
                            <NavLink to={"cuisine/American"}>American</NavLink>
                            <NavLink to={"cuisine/British"}>British</NavLink>
                            <NavLink to={"cuisine/Caribbean"}>
                                Caribbean
                            </NavLink>
                            <NavLink to={"cuisine/French"}>French</NavLink>
                            <NavLink to={"cuisine/German"}>German</NavLink>
                            <NavLink to={"cuisine/Greek"}>Greek</NavLink>
                            <NavLink to={"cuisine/Indian"}>Indian</NavLink>
                            <NavLink to={"cuisine/Italian"}>Italian</NavLink>
                            <NavLink to={"cuisine/Mexican"}>Mexican</NavLink>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Diet <i class="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NavLink to={"diet/Vegetarian"}>Vegetarian</NavLink>
                            <NavLink to={"diet/Vegan"}>Vegan</NavLink>
                            <NavLink to={"diet/Pescetarian"}>
                                Pescetarian
                            </NavLink>
                            <NavLink to={"diet/Gluten Free"}>
                                Gluten Free
                            </NavLink>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Type <i class="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NavLink to={"type/Appetizer"}>Appetizer</NavLink>
                            <NavLink to={"type/Breakfast"}>Breakfast</NavLink>
                            <NavLink to={"type/Dessert"}>Dessert</NavLink>
                            <NavLink to={"type/Drink"}>Drink</NavLink>
                            <NavLink to={"type/Salad"}>Salad</NavLink>
                            <NavLink to={"type/Sauce"}>Sauce</NavLink>
                            <NavLink to={"type/Side Dish"}>Side Dish</NavLink>
                            <NavLink to={"type/Snack"}>Snack</NavLink>
                            <NavLink to={"type/Soup"}>Soup</NavLink>
                        </div>
                    </div>
                    {/* <div className="search">
                        <Search />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
