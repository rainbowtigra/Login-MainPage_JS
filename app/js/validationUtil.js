let ValidationUtil = {
    isAlpha: function (value) {
        const re = /^[a-zA-Z]+$/;
        return re.test(value) === true;
    },
    isEmail: function (value) {
        // TODO replace w/ regex as per requirements for email
        // regex is taken from chromium
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    },
    isPhone: function (value) {
        // TODO replace w/ regex as per requirements for phone numbers
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(value);
    },
    isEmptyOrSpaces: function (value) {
        return value === null || value.match(/^ *$/) !== null;
    },
    isMinLength: function (value, min) {
        return value.length >= min;
    },
    containsSpecialCharacters: function (value) {
        const re = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        return re.test(value);
    }
};

if (typeof module !== 'undefined') {
    module.exports = ValidationUtil;
}

