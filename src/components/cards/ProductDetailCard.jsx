import React from "react";
import { CartState } from "../../context/Context";
import Modal from "../containers/Modal";
import DetailForm from "../forms/DetailForm";

const ProductDetailCard = () => {
    const { state: {selectedProduct}} = CartState()
    return (
        <Modal>
            <div className="w-full aspect[9/16] rounded-lg overflow-auto shadow-lg shadow-gray-900/20">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={selectedProduct.image}
                    alt=""
                />
            </div>
            <h3 className="font-lora font-bold text-4xl text-gray-900">
                {selectedProduct.name}
            </h3>
            <p className="text-sm font-light text-left sm:text-base md:text-lg lg:text-xl text-gray-500">{selectedProduct.description}</p>
            <DetailForm prod={selectedProduct}/>
        </Modal>

    );
};

export default ProductDetailCard;
