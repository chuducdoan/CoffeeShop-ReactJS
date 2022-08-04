import { ADD_CART, DECREASE_TO_CART, INCREASE_TO_CART, REMOVE_CART, SET_CART } from "~/constant";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initState = {
    numberCart: localStorage.getItem('numberCart') ? JSON.parse(localStorage.getItem('numberCart')) : 0,
    Carts: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
}

const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_CART: 
            const numberProduct = action.payload.qty ? action.payload.qty : 1;
            if (state.numberCart === 0) {
                const cart = {
                    id: action.payload.id,
                    name: action.payload.name,
                    image: action.payload.thumnailUrl,
                    price: action.payload.price,
                    quantity: numberProduct
                };
                state.Carts.push(cart);
                toast.success(`${action.payload.name} add to cart`, {
                    position: "bottom-left",
                    autoClose: 2000
                });
            } else {
                let isExistCartItem = false;
                state.Carts.forEach((cart, index) => {
                    if (cart.id === action.payload.id) {
                        state.Carts[index].quantity += numberProduct;
                        isExistCartItem = true;
                        toast.info(`increased ${action.payload.name} cart quantity`, {
                            position: "bottom-left",
                            autoClose: 2000
                        });
                    }
                })
                if (!isExistCartItem) {
                    const _cart = {
                        id: action.payload.id,
                        name: action.payload.name,
                        image: action.payload.thumnailUrl,
                        price: action.payload.price,
                        quantity: numberProduct
                    };
                    state.Carts.push(_cart);
                    toast.success(`${action.payload.name} add to cart`, {
                        position: "bottom-left",
                        autoClose: 2000
                    });
                }
            }

            state.numberCart += numberProduct;

            localStorage.setItem("cartItems", JSON.stringify(state.Carts));
            localStorage.setItem("numberCart", JSON.stringify(state.numberCart));

            return {
                ...state,
                Carts: [...state.Carts]
            };
        case REMOVE_CART:
            const qty = state.Carts.find((cart) => cart.id === action.payload).quantity;
            state.numberCart -= qty;
            let _newCart = [...state.Carts];
            _newCart = _newCart.filter((cart) => cart.id !== action.payload);

            localStorage.setItem("cartItems", JSON.stringify(_newCart));
            localStorage.setItem("numberCart", JSON.stringify(state.numberCart));
            return {
                ...state,
                Carts: _newCart
            }
        case INCREASE_TO_CART: 
            state.numberCart += 1;
            let newCartIncrease = [...state.Carts];
            newCartIncrease = newCartIncrease.map((cart) => cart.id === action.payload ? {...cart, quantity: cart.quantity + 1} : cart);
            localStorage.setItem("cartItems", JSON.stringify(newCartIncrease));
            localStorage.setItem("numberCart", JSON.stringify(state.numberCart));
            return {
                ...state,
                Carts: newCartIncrease
            }
        case DECREASE_TO_CART:
            let newCart = [...state.Carts];
            const _currentCart = state.Carts.find((cart) => cart.id === action.payload);
            if (_currentCart.quantity > 1) {
                state.numberCart -= 1;
                newCart = state.Carts.map((cart) => cart.id === action.payload ? {...cart, quantity: cart.quantity - 1} : cart);
            }
            localStorage.setItem("cartItems", JSON.stringify(newCart));
            localStorage.setItem("numberCart", JSON.stringify(state.numberCart));
            return {
                ...state,
                Carts: newCart
            }
        case SET_CART:
            return {
                ...state,
                Carts: action.payload,
                numberCart: 0
            }
        default:
            return state;
    }
}

export default cartReducer;