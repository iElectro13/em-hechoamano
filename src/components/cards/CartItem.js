import React from "react";

const CartItem = () => {
    return (
        <div className="overflow-hidden bg-orange-50 w-full grid grid-cols-12 rounded-lg shadow-xl shadow-gray-900/10">
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
                <img
                    className="object-cover h-full"
                    src={require("../../assets/2.jpeg")}
                    alt="imagen"
                />
            </div>

            <div className="flex flex-col justify-between items-start w-full p-2 gap-1 col-span-7 sm:col-span-8 md:col-span-9 lg:col-span-10">
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">Gorro de lana</h3>

                <p className="text-sm font-light text-left sm:text-base md:text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione expedita.
                </p>
                <div className="flex flex-col justify-center items-center w-full font-bold sm:text-lg md:text-xl lg:text-2xl">
                    <div className="flex justify-between items-center w-full">
                        <span>Cantidad:</span>
                        <span className="text-gray-600">x1</span>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <span>Talla:</span>
                        <span className="text-gray-600">x1</span>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <span>Subtotal:</span>
                        <span className="text-gray-600">50.000$</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
