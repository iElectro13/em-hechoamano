import React from "react";
import Modal from "../containers/Modal";
import DetailForm from "../forms/DetailForm";

const ProductDetailCard = () => {
    return (

        <Modal>
            <div className="w-full aspect[9/16] rounded-lg overflow-auto shadow-lg shadow-gray-900/20">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={require("../../assets/1.jpeg")}
                    alt=""
                />
            </div>
            <h3 className="font-lora font-bold text-4xl text-gray-900">
                Gorro de lana
            </h3>
            <p className="text-sm font-light text-left sm:text-base md:text-lg lg:text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione expedita.</p>
            <DetailForm />
        </Modal>

    );
};

export default ProductDetailCard;
