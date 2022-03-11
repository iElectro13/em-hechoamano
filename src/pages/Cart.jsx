import React, { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ResumeModal from "../components/cards/ResumeModal";
import CartItems from "../components/containers/CartItems";
import Section from "../components/containers/Section";

const Cart = () => {
    const [isOpen, setIsOpen] =  useState(false)

    return (
        <Section title="Carrito">
            <CartItems />
            <div className="flex justify-between items-center w-full font font-raleway font-bold sm:text-lg md:text-xl lg:text-2xl">
                <span>Total:</span>
                <span className="text-gray-600">100.000$</span>
            </div>
            <PrimaryButton onOpen={setIsOpen} text="VER RESÚMEN" />
            {isOpen && <ResumeModal onClose={setIsOpen} />}

        </Section>
    );
};

export default Cart;
