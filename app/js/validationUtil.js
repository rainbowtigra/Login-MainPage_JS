let ValidationUtil = {
    isAlpha: function (value) {
        const re = /^[a-zA-Z]+$/;
        return re.test(value) === true;
    },
    isEmail: function (value) {
        const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return re.test(String(value).toLowerCase());
    },
    isPhone: function (value) {
        const re = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
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

