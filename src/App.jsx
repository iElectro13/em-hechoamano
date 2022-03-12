import Footer from "./components/containers/Footer";
import Navbar from "./components/containers/Navbar";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { CartState } from "./context/Context";
import { useEffect } from "react";
import ProductDetailCard from "./components/cards/ProductDetailCard";

function App() {
    const { state, dispatch } = CartState()

    const getData = async() =>{
        const resp = await fetch('http://localhost:5000/products')
        const data = await resp.json()
        dispatch({
            type: "FETCH_DATA",
            payload: data
        })
    }
    useEffect(()=>{
        getData()
    }, [])
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
            {state.selectedProduct.name && <ProductDetailCard />}

        </div>
    );
}

export default App;
