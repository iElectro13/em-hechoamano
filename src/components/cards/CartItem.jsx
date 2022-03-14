import React from "react";
import { BsTrash } from "react-icons/bs"
import { TiPencil } from "react-icons/ti"
import { CartState } from "../../context/Context";

/**Renders a single cart item */

const CartItem = ({ prod }) => {

    const { dispatch } = CartState()

    const onDelete = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: prod
        })
    }

    const onEdit = () => {
        dispatch({
            type: "WATCH_DETAIL",
            payload: prod
        })
    }
    return (
        <div className="overflow-hidden bg-orange-50 w-full grid grid-cols-12 rounded-lg shadow-xl shadow-gray-900/10">
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
                <img
                    className="object-cover h-full"
                    src={prod.image}
                    alt="imagen"
                />
            </div>

            <div className="flex flex-col justify-between items-start w-full p-2 gap-1 col-span-7 sm:col-span-8 md:col-span-9 lg:col-span-10">
                <div className="w-full flex justify-between items-center">
                    <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">{prod.name}</h3>
                    <div className="flex justify-center items-center text-4xl">
                        <BsTrash onClick={onDelete} className="text-cerise-600 text-3xl cursor-pointer" />
                        <TiPencil onClick={onEdit} className="text-leaf-500 cursor-pointer" />
                    </div>
                </div>

                <p className="text-sm font-light text-left sm:text-base md:text-lg lg:text-xl">
                    {prod.description}
                </p>
                <div className="flex flex-col justify-center items-center w-full font-bold sm:text-lg md:text-xl lg:text-2xl">

                    <div className="flex justify-between items-center w-full">
                        <span>Precio:</span>
                        <span className="text-gray-600">{prod.price}</span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <span>Cantidad:</span>
                        <span className="text-gray-600">x{prod.quantity}</span>
                    </div>



                    <div className="flex justify-between items-center w-full">
                        <span>Subtotal:</span>
                        <span className="text-gray-600">{Number(prod.price) * Number(prod.quantity)}$</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
