import { signOut } from 'firebase/auth';

import { LOGOUT, SET_EMAIL, SET_FULLNAME, SET_PASSWORD, SET_USER } from '~/constant';
import { auth } from '~/firebase';

const initState = {
    user: null,
    email: '',
    password: '',
    fullName: ''
}

const authReducer = (state = initState, action) => {
    
    switch(action.type) {
        case LOGOUT:
            signOut(auth);
            localStorage.clear();
            return state;
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case SET_FULLNAME:
            return {
                ...state,
                fullName: action.payload
            }

        default:
            console.log("exception");
            return state;

    }
}

export default authReducer;