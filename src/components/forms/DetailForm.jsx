import React from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import PrimaryButton from "../buttons/PrimaryButton";

const DetailForm = () => {
    return (
        <form
            action=""
            className="w-full flex flex-col justify-between items-center gap-4"
            onSubmit={(e)=> e.preventDefault()}
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
                    <AiFillMinusSquare className="text-5xl text-orange-400 cursor-pointer" />

                    <span className="text-2xl text-gray-900 font-bold h-full bg-orange-300 px-3 py-1 rounded">
                        1
                    </span>

                    <AiFillPlusSquare className="text-5xl text-orange-400 cursor-pointer" />
                </div>
                <div className="flex flex-wrap gap-1 justify-center items-center ">
                    <span className="font-bold text-gray-900 text-xl">
                        Subtotal:
                    </span>
                    <span className="font-bold text-gray-400 text-xl">
                        50.000$
                    </span>
                </div>
            </div>
            <PrimaryButton text="AGREGAR AL CARRITO" />

        </form>
    );
};

export default DetailForm;
