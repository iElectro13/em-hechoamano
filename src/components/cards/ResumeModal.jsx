import React from "react";
import { CartState } from "../../context/Context";
import PrimaryButton from "../buttons/PrimaryButton";
import Modal from "../containers/Modal";

const ResumeModal = () => {
    const { state: { cart } } = CartState()
    return (
        <Modal>
            <h3 className="font-lora font-bold text-4xl text-gray-900">
                Resúmen
            </h3>
            <div className="w-full flex flex-col justify-between items-center divide-y">
                {cart.map(item => (
                    <div className="flex justify-between items-center w-full">
                        <span className="font-bold text-gray-900 text-xl">
                            {item.name} "M" x{item.quantity}
                        </span>
                        <span className="font-bold text-gray-900 text-xl">
                            {item.price}$
                        </span>
                    </div>
                ))}

            </div>
            <div className="flex justify-between items-center w-full">
                <span className="font-bold text-gray-900 text-xl">Total:</span>
                <span className="font-bold text-gray-900 text-xl">{cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}$</span>
            </div>
            <PrimaryButton text="PAGAR" />
        </Modal>
    );
};

export default ResumeModal;
