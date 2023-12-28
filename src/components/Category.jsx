import { FaPizzaSlice, FaHamburger, FaHome } from "react-icons/fa";
import { GiTacos, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { color } from "framer-motion";

function Category() {
    return (
        <List>
            <SLink to={"/"}>
                <FaHome />
                <h4>Home</h4>
            </SLink>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Mexican"}>
                <GiTacos />
                <h4>Mexican</h4>
            </SLink>
            <SLink to={"/cuisine/Asian"}>
                <GiChopsticks />
                <h4>Asian</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg,
        h4 {
            color: white;
        }
    }
`;

export default Category;
