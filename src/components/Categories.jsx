import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiTacos, GiChopsticks } from "react-icons/gi";

function Categories() {
    return (
        <div className="list">
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
        </div>
    );
}

export default Categories;
