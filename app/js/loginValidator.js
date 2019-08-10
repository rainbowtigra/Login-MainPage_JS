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

function displayValidationState(state) {
    const field = state.field, errors = state.errors, error = document.getElementById(`${field.id}-error`);
    if (errors.length == 0) {
        error.classList.remove('d-block');
        error.classList.add('d-none');
    } else {
        error.classList.remove('d-none');
        error.classList.add('d-block');
        error.textContent = errors[0];
    }
}

function validateFirstName() {
    const firstName = document.getElementById("first-name");
    var state = {errors: [], field: firstName};
    if (isEmptyOrSpaces(firstName.value)) {
        state.errors.push('First name is required');
    } else if (!isAlpha(firstName.value)) {
        state.errors.push('First name can only contain letters');
    }
    return state;
}

function validateLastName() {
    const lastName = document.getElementById("last-name");
    var state = {errors: [], field: lastName};
    if (isEmptyOrSpaces(lastName.value)) {
        state.errors.push('Last name is required');
    } else if (!isAlpha(lastName.value)) {
        state.errors.push('Last name can only contain letters');
    }
    return state;
}

function validateEmail() {
    const email = document.getElementById("email");
    var state = {errors: [], field: email};
    if (isEmptyOrSpaces(email.value)) {
        state.errors.push('Email is required');
    } else if (!isEmail(email.value)) {
        state.errors.push('Email must contain @ and a domain name');
    }
    return state;
}

function validatePhone() {
    const phone = document.getElementById("phone");
    const state = {errors: [], field: phone};
    if (isEmptyOrSpaces(phone.value)) {
        state.errors.push('Phone is required');
    } else if (!isPhone(phone.value)) {
        state.errors.push('Phone can contain + (only in front of the number) and space characters and numbers only');
    }
    return state;
}

function validatePassword() {
    const password = document.getElementById("password");
    const state = {errors: [], field: password};
    const minLength = 8;
    if (isEmptyOrSpaces(password.value)) {
        state.errors.push('Password is required');
    } else {
        if (!isMinLength(password.value, minLength)) {
            state.errors.push(`Password must be at least ${minLength} long`);
        }
        if (!containsSpecialCharacters(password.value)) {
            state.errors.push(`Password must contain at least 1 special character`);
        }
    }
    return state;
}

const form = document.getElementById('form');
form.addEventListener("submit", function (e) {
    const fieldValidators = [validateFirstName, validateLastName, validateEmail, validatePhone, validatePassword];
    let valid = true;
    for (const validator of fieldValidators) {
        let state = validator();
        displayValidationState(state);
        if (state.errors.length > 0) {
            valid = false;
        }
    }
    if (!valid) {
        e.preventDefault();
    }
}, false);
