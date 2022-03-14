import { CartState } from "../../context/Context";
import Modal from "../containers/Modal";

/**Renders the Resume modal window and handles the "send to whatsapp" feature*/

const ResumeModal = () => {
    const { state: { cart } } = CartState()

    /**Loops the cart and transform every cart item to string, then saves the string in the text variable
     * At the end of the loop, sum the baseUrl, the text and opens a new window that redirects to the whatsapp api
     */
    const sendToWhatsapp = () =>{
        let baseUrl = "https://api.whatsapp.com/send?phone=573175908347&text="
        let text = "¡Hola! me gustaría pedir:%0A%0A"
        cart.forEach(item => {
            let itemToText = `${item.name} x${item.quantity}%0A`
            text += itemToText
        })
        window.open(baseUrl + text + "%0AMuchas gracias! :)")
    }

    return (
        <Modal>
            <h3 className="font-lora font-bold text-4xl text-gray-900">
                Resúmen
            </h3>
            <div className="w-full flex flex-col justify-between items-center divide-y">
                {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center w-full">
                        <span className="font-bold text-gray-900 text-xl">
                            {item.name} x{item.quantity}
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
            <button onClick={sendToWhatsapp} className='text-gray-100 bg-fa-600 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2 active:scale-95' >PAGAR</button>
        </Modal>
    );
};

export default ResumeModal;
