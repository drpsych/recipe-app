import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/MenuBar/Navigation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <Search />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
