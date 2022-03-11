import Footer from "./components/containers/Footer";
import Navbar from "./components/containers/Navbar";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
    return (
        <div className="bg-orange-400 min-h-screen flex flex-col justify-between items-center relative font-raleway">
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/productos" element={<Products />}>
                    <Route path="/productos/:category" element={<Products />} />
                </Route>
                <Route path="/carrito" element={<Cart />} />

            </Routes>
            <Footer />

        </div>
    );
}

export default App;
