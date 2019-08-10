function isAlpha(value) {
    const re = /^[a-zA-Z]+$/;
    return re.test(value) === true;
}

function isEmail(value) {
    // TODO replace w/ regex as per requirements for email
    // regex is taken from chromium
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function isPhone(value) {
    // TODO replace w/ regex as per requirements for phone numbers
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(value);
}

function isEmptyOrSpaces(value) {
    return value === null || value.match(/^ *$/) !== null;
}

function isMinLength(value, min) {
    return value.length >= min;
}

function containsSpecialCharacters(value) {
    const re = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return re.test(value);
}

