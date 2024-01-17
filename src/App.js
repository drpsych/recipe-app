import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { Link, BrowserRouter } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Navigation from "./MenuBar/Navigation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* <div className="navBox">
                    <GiKnifeFork />
                    <Link className="logo" to={"/"}>
                        what's for dinner?
                    </Link>
                    <Navigation />
                </div> */}
                <Navigation />
                <Search />
                {/* <Category /> */}
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
