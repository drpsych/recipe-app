import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./MenuBar/Navigation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <Search />
                {/* <Category /> */}
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
