import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Modal from "../containers/Modal";

const ResumeModal = () => {
    return (
        <Modal>
            <h3 className="font-lora font-bold text-4xl text-gray-900">
                Resúmen
            </h3>
            <div className="w-full flex flex-col justify-between items-center divide-y">
                <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-gray-900 text-xl">
                        Gorro de lana "M" x1
                    </span>
                    <span className="font-bold text-gray-900 text-xl">
                        50.000$
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <span className="font-bold text-gray-900 text-xl">Total:</span>
                <span className="font-bold text-gray-900 text-xl">50.000$</span>
            </div>
            <PrimaryButton text="PAGAR" />
        </Modal>
    );
};

export default ResumeModal;
