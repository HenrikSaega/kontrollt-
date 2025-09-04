import {createContext, useReducer} from "react"

export const CartContext = createContext();

const initialState = {
  cartItems: []
};

function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            let updatedItems;

            if(existingItemIndex >= 0) {
                updatedItems = [...state.cartItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    amount: updatedItems[existingItemIndex].amount + 1
                }; 
            }
            else {
                updatedItems = [...state.cartItems, action.payload];
            }

            console.log("Lisatud ostukorvi:", updatedItems);

            return { ...state, cartItems: updatedItems};

            case "REMOVE_ITEM":
                return {
                    ...state, 
                    cartItems: state.cartItems.filter((item) => item.id !== action.payload)
                };
            case "CLEAR_CART":
                return { ...state, cartItems: [] };
            
        default:
            return state;
    }
}



export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item) => {
        dispatch ({ type: 'ADD_ITEM', payload: item });
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return(
        <CartContext.Provider value={{cartItems: state.cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}