import { ADD_CART, REMOVE_CART, UPDATE_CART } from "~/constant";

const initState = {
    numberCart: 0,
    Carts: []
}

const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_CART: 
            if (state.numberCart === 0) {
                const cart = {
                    id: action.payload.id,
                    name: action.payload.name,
                    image: action.payload.thumnailUrl,
                    price: action.payload.price,
                    quantity: 1
                };
                state.Carts.push(cart);
            } else {

            }
            return state;
        case UPDATE_CART:
            return state;
        case REMOVE_CART:
            return state;
        default:
            return state;
    }
}

export default cartReducer;