import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <Search />
                <div className="pages">
                    <Pages />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
