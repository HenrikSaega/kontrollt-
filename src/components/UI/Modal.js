import React, {useRef, useEffect, useContext} from "react"
import { CartContext } from "../../store/CartContext"
import Button from "./Button"

const Modal = ({onClose}) => {
    const dialogRef = useRef(null);
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (!dialog.open){
            dialog.showModal();
        }

        const handleCancel = (event) => {
            event.preventDefault();
            onClose();
        }

        dialog.addEventListener("cancel", handleCancel);

        return () => {
            dialog.removeEventListener("cancel", handleCancel);
            if (dialog.open) dialog.close()
        }
    }, [onClose]);

    const handleClose = () => {
        const dialog = dialogRef.current;
        if(dialog && dialog.open) {
            dialog.close();
    }
    onClose();
    }

    return (
        <dialog ref={dialogRef} className="modal">
            <h2>Ostukorv</h2>
            {cartItems.length === 0 && <p>Ostukorv on tühi!</p>}
            {cartItems.length > 0 && (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            {item.name} x {item.amount} - €{item.price * item.amount}
                            <Button onClick={() => removeFromCart(item.id)}>Eemalda</Button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="modal-actions">
                <Button onClick={handleClose}>Sulge</Button>
                {cartItems.length > 0 && <Button onClick={clearCart}>Tühjenda ostukorv</Button>}
            </div>
        </dialog>
    )
}

export default Modal