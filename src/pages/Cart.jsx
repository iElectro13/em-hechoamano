import ResumeModal from "../components/cards/ResumeModal";
import CartItems from "../components/containers/CartItems";
import Section from "../components/containers/Section";
import { CartState } from "../context/Context";


/** This components render the total amount of cart items */
const Cart = () => {
    const { state: {cart, resumeActive}, dispatch } = CartState()

    const onResume = ()=>{
        dispatch({
            type: "WATCH_RESUME"
        })
    }
    return (
        <Section title="Carrito">
            <CartItems />
            <div className="flex justify-between items-center w-full font font-raleway font-bold sm:text-lg md:text-xl lg:text-2xl">
                <span>Total:</span>
                <span className="text-gray-600">{cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}$</span>
            </div>
            <button className='text-gray-100 bg-fa-600 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2 active:scale-95' onClick={onResume}>VER RESÚMEN</button>
            {resumeActive && <ResumeModal />}

        </Section>
    );
};

export default Cart;
