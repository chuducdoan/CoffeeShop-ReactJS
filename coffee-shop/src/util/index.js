import { EMAIL_REGEX_FORMAT } from "~/constant";

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

export {validateRequired, validateLength, validateEmailFormat};