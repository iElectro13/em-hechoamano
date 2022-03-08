import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CartItems from "../components/containers/CartItems";
import Section from "../components/containers/Section";

const Cart = () => {
    return (
        <Section title="Carrito">
            <CartItems />
            <PrimaryButton text="VER RESÚMEN" />
        </Section>
    );
};

export default Cart;
