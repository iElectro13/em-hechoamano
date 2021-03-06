import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "./Reducers"



const Cart = createContext()

/** This components creates a global context and initializes the initial state */
const Context = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products: [{
            "id": 1,
            "name": "Bufanda de lana colorida",
            "category": "bufandas",
            "price" : 50000,
            "description": "Bufanda de lana tejida a mano con hilos de la mejor calidad",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.imimg.com%2Fdata3%2FSE%2FWQ%2FMY-3734722%2Fwool-scarf-500x500.png&f=1&nofb=1"
        },
        {
            "id": 2,
            "name": "Bufanda Moncler",
            "category": "bufandas",
            "price" : 60000,
            "description": "Bufanda de lana tejida a mano con hilos de la mejor calidad",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd3%2Fcd%2Fd8%2Fd3cdd8a0d6025633bcafcdf7a14b42e3.jpg&f=1&nofb=1"
        },
        {
            "id": 3,
            "name": "Bufanda Scotish",
            "category": "bufandas",
            "price" : 80000,
            "description": "Bufanda de lana tejida a mano con hilos de la mejor calidad",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I2fi7Fw5rzk9p4CzM2udUwAAAA%26pid%3DApi&f=1"
        },
        {
            "id": 4,
            "name": "Bufanda Hogwarts",
            "category": "bufandas",
            "price" : 40000,
            "description": "Bufanda de lana tejida a mano con hilos de la mejor calidad",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2Fij8AAOSwVkZdwW9X%2Fs-l300.jpg&f=1&nofb=1"
        },
        {
            "id": 5,
            "name": "Kiltane",
            "category": "ponchos",
            "price" : 160000,
            "description": "Kiltane inspirado en escocia",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41sckvdH7NL._SX342_QL70_.jpg&f=1&nofb=1"
        },
        {
            "id": 6,
            "name": "Poncho boliviano",
            "category": "ponchos",
            "price" : 150000,
            "description": "Poncho tejido a mano inspirado en los modelos bolivianos",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F236x%2F44%2Fe8%2F5b%2F44e85b2ee5d32057a0e15894efd5c111.jpg&f=1&nofb=1"
        },
        {
            "id": 7,
            "name": "Poncho Alpaca",
            "category": "ponchos",
            "price" : 120000,
            "description": "Poncho tejido a mano inspirado en los modelos bolivianos, con lana de alpaca",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0a%2Fcf%2F2f%2F0acf2fd0db3c30402228dfbffd560f64.jpg&f=1&nofb=1"
        },
        {
            "id": 8,
            "name": "Poncho Original",
            "category": "ponchos",
            "price" : 79000,
            "description": "Poncho tejido a mano con lana de alpaca",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F22%2Fc4%2F7e%2F22c47ed20f46b96268612bf427dc561c--bolivia-fashion-history.jpg&f=1&nofb=1"
        },
        {
            "id": 9,
            "name": "Gorro E&M",
            "category": "gorros",
            "price" : 45000,
            "description": "Gorro cl??sico tejido a mano",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FJbUAAOSwoyleYODL%2Fs-l400.jpg&f=1&nofb=1"
        },
        {
            "id": 10,
            "name": "Gorro Bobble",
            "category": "gorros",
            "price" : 70000,
            "description": "Gorro tejido a mano con pompon",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.notonthehighstreet.com%2Ffs%2F1b%2F8f%2Fa8af-ff8e-43d9-aa63-1b7d5a007d97%2Fnormal_lambswool-knitted-bobble-hat-ogee-pattern.jpg&f=1&nofb=1"
        },
        {
            "id": 11,
            "name": "Gorro Invierno",
            "category": "gorros",
            "price" : 55000,
            "description": "Gorro tejido a mano con interior de piel de oso sint??tica",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F370064aa-a1a7-44b6-ab5e-2613088c8ce9_1.18e40d2e513b1c240f2cd7922b8f5213.jpeg%3FodnHeight%3D450%26odnWidth%3D450%26odnBg%3Dffffff&f=1&nofb=1"
        },
        {
            "id": 12,
            "name": "Gorro Polar",
            "category": "gorros",
            "price" : 50000,
            "description": "Gorro tejido a mano con interior de piel de tela polar",
            "stock": 5,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.capspop.com%2F7139-medium_default%2Fwomen-s-wool-slouchy-fleece-lined-winter-beanie-hat-with-rabbit-pom-brown-cl11ro4u8mh.jpg&f=1&nofb=1"
        }
        
        ],
        cart: [],
        selectedProduct: {},
        resumeActive: false
    })

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context

export const CartState = ()=>{
    return useContext(Cart)
}