export const cartReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return { ...state, products: action.payload }

        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload], selectedProduct: {} }

        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) }

        case "EDIT_CART_ITEM":
            return { ...state, cart: state.cart.filter(item => item.id === action.payload.id ? item.quantity =  action.payload.quantity : item.quantity), selectedProduct: {}}

        case "WATCH_DETAIL":
            return { ...state, selectedProduct: action.payload }

        case "RESET_WATCH_DETAIL":
            return { ...state, selectedProduct: {} }

        default:
            return state
    }
}