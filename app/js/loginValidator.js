const form = document.getElementById('register-form');
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

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
    var state = {errors: [], field: firstName};
    if (isEmptyOrSpaces(firstName.value)) {
        state.errors.push('First name is required');
    } else if (!isAlpha(firstName.value)) {
        state.errors.push('First name can only contain letters');
    }
    return state;
}

function validateLastName() {
    var state = {errors: [], field: lastName};
    if (isEmptyOrSpaces(lastName.value)) {
        state.errors.push('Last name is required');
    } else if (!isAlpha(lastName.value)) {
        state.errors.push('Last name can only contain letters');
    }
    return state;
}

function validateEmail() {
    var state = {errors: [], field: email};
    if (isEmptyOrSpaces(email.value)) {
        state.errors.push('Email is required');
    } else if (!isEmail(email.value)) {
        state.errors.push('Email must contain @ and a domain name');
    }
    return state;
}

function validatePhone() {
    const state = {errors: [], field: phone};
    if (isEmptyOrSpaces(phone.value)) {
        state.errors.push('Phone is required');
    } else if (!isPhone(phone.value)) {
        state.errors.push('Phone can contain + (only in front of the number) and space characters and numbers only');
    }
    return state;
}

function validatePassword() {
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

firstName.addEventListener("blur", function () {
   displayValidationState(validateFirstName());
});

lastName.addEventListener("blur", function () {
    displayValidationState(validateLastName());
});

email.addEventListener("blur", function () {
   displayValidationState(validateEmail());
});

phone.addEventListener("blur", function () {
   displayValidationState(validatePhone());
});

password.addEventListener("blur", function () {
   displayValidationState(validatePassword());
});
