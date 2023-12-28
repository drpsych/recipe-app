import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="nav">
                    <GiKnifeFork />
                    <Link className="logo" to={"/"}>
                        delicious
                    </Link>
                </div>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
