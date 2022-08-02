import { ADD_CART, DECREASE_TO_CART, INCREASE_TO_CART, REMOVE_CART } from "~/constant";

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
                let isExistCartItem = false;
                state.Carts.forEach((cart, index) => {
                    if (cart.id === action.payload.id) {
                        state.Carts[index].quantity += 1;
                        isExistCartItem = true;
                    }
                })
                if (!isExistCartItem) {
                    const _cart = {
                        id: action.payload.id,
                        name: action.payload.name,
                        image: action.payload.thumnailUrl,
                        price: action.payload.price,
                        quantity: 1
                    };
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                Carts: [...state.Carts],
                numberCart: state.numberCart + 1
            };
        case REMOVE_CART:
            const qty = state.Carts.find((cart) => cart.id === action.payload).quantity;
            return {
                ...state,
                numberCart: state.numberCart - qty,
                Carts: state.Carts.filter((cart) => cart.id !== action.payload)
            }
        case INCREASE_TO_CART: 
            return {
                numberCart: state.numberCart + 1,
                Carts: state.Carts.map((cart) => cart.id === action.payload ? {...cart, quantity: cart.quantity + 1} : cart)
            }
        case DECREASE_TO_CART:
            let newCart = [...state.Carts];
            const _currentCart = state.Carts.find((cart) => cart.id === action.payload);
            if (_currentCart.quantity > 1) {
                state.numberCart -= 1;
                newCart = state.Carts.map((cart) => cart.id === action.payload ? {...cart, quantity: cart.quantity - 1} : cart);
            }
            return {
                ...state,
                Carts: newCart
            }
        default:
            return state;
    }
}

export default cartReducer;