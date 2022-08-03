import { EMAIL_REGEX_FORMAT } from "~/constant";
import * as moment from 'moment';

const validateRequired = (value) => {
    if (value.length === 0 || value === '') {
        return true;
    }
}

const validateLength = (value, minLength, maxLength) => {
    if (minLength > value.trim().length || value.trim().length > maxLength) {
        return true;
    }
}

const validateEmailFormat = (value) => {
    var mailformat = EMAIL_REGEX_FORMAT;
    if (!String(value).toLocaleLowerCase().match(mailformat)) {
        return true;
    }
}

const formatDate = (dateNumber) => {
    return moment(new Date(dateNumber)).format('DD/MM/YYYY');
}

const getTotalCart = (carts) => {
    return carts.reduce((sum, {quantity, price}) => sum + quantity*price, 0);
}

export {validateRequired, validateLength, validateEmailFormat, formatDate, getTotalCart};