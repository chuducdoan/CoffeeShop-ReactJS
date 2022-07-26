import {LOGIN, LOGOUT,  SET_EMAIL,  SET_FULLNAME,  SET_PASSWORD,  SET_USER} from '~/constant';

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload
    }
}

export const setEmail = (payload) => {
    return {
        type: SET_EMAIL,
        payload
    }
}

export const setPassword = (payload) => {
    return {
        type: SET_PASSWORD,
        payload
    }
}

export const setFullname = (payload) => {
    return {
        type: SET_FULLNAME,
        payload
    }
}