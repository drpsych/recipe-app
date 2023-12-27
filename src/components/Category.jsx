import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiTacos, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <List>
            <div>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </div>
            <div>
                <FaHamburger />
                <h4>American</h4>
            </div>
            <div>
                <GiTacos />
                <h4>Mexican</h4>
            </div>
            <div>
                <GiChopsticks />
                <h4>Asian</h4>
            </div>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category;
