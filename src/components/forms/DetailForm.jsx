import React, { useEffect, useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { CartState } from "../../context/Context";

const DetailForm = ( {prod} ) => {
    const [quantity, setQuantity] = useState(1)
    const { state: { selectedProduct, cart }, dispatch } = CartState()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...selectedProduct, quantity }
        })
    }

    const handleClick = () =>{
        dispatch({
            type: "EDIT_CART_ITEM",
            payload: {...prod, quantity: quantity}
        })
    }

    useEffect(() => {
        if(cart.some(item => item.id === prod.id)){
            setQuantity(cart.filter(i => i.id === prod.id)[0].quantity)
        }
    }, [cart, prod])

    return (
        <form
            action=""
            className="w-full flex flex-col justify-between items-center gap-4"
            onSubmit={handleSubmit}
        >
            <div className="flex justify-between items-center w-full">
                <select
                    className="py-2 w-32 font-bold font-gray-900 bg-orange-50 border-2 border-orange-400"
                    name="size"
                    id="size"
                >
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>
                <div className="flex justify-center items-center">
                    {

                        quantity <= 1 ? <AiFillMinusSquare className="text-5xl text-gray-300" /> : <AiFillMinusSquare onClick={() => setQuantity(quantity - 1)} className="text-5xl text-orange-400 cursor-pointer" />
                    }

                    <span className="text-2xl text-gray-900 font-bold h-full bg-orange-300 px-3 py-1 rounded">
                        {quantity}
                    </span>

                    <AiFillPlusSquare onClick={() => setQuantity(quantity + 1)} className="text-5xl text-orange-400 cursor-pointer" />
                </div>
                <div className="flex flex-wrap gap-1 justify-center items-center ">
                    <span className="font-bold text-gray-900 text-xl">
                        Subtotal:
                    </span>
                    <span className="font-bold text-gray-400 text-xl">
                        {prod.price}$
                    </span>
                </div>
            </div>
            {
                cart.some(product => product.id === prod.id) ? (
                <button onClick={handleClick} type="button" className='text-gray-100 bg-fa-600 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2 active:scale-95'>
                    EDITAR COMPRA
                </button>) : (
                    <button type="submit" className='text-gray-100 bg-fa-600 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2 active:scale-95'>
                        AGREGAR AL CARRITO
                    </button>
                )
            }

        </form>
    );
};

export default DetailForm;
