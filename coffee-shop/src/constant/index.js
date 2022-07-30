export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const SET_USER = 'set_user';
export const SET_EMAIL = 'set_email';
export const SET_PASSWORD = 'set_password';
export const SET_FULLNAME = 'set_fullname';
export const ADD_CART = 'add_cart';
export const REMOVE_CART = 'remove_cart';
export const UPDATE_CART = 'update_cart';

export const MESSAGE_VALIDATE_REQUIRE_EMAIL = 'Email is required.'
export const MESSAGE_VALIDATE_REQUIRE_PASSWORD = 'Password is required.'
export const MESSAGE_VALIDATE_LENGTH_PASSWORD = (number1, number2) => `Please enter a password greater than ${number1} and less than ${number2}`;
export const MESSAGE_VALIDATE_FORMAT_EMAIL = 'Email is invalid.'

export const EMAIL_REGEX_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const ERROR_LOGIN = 'Incorrect Email Or Password.';