window.onload = function() {
        var form = document.querySelector('.form-horizontal');
        form.onsubmit = function(e) {
            e.preventDefault();

            //debugger;
            form.submit();
        }

        function firstNameValidation () {
            var result = true;
            var firstNameField = document.getElementById("firstName");
            var firstNameMinLength = 3, firstNameMaxLength = 20;
            var REGEXP_NAME = "^[а-яА-Яa-zA-Z][А-Яа-яA-Za-z\\s]+[А-Яа-яA-Za-z]$";
            var borderColorRed = "#F54D4D";

            if (firstNameField.value.length >= firstNameMinLength && firstNameField.value.length <= firstNameMaxLength) {
                if (firstNameField.value.search(REGEXP_NAME) == = -1) {
                    result = false;
                    firstNameField.borderColor = borderColorRed;
                    firstNameError.innerText = validationErrorMessages.firstNameContentError;
                } else {
                    clear(firstNameError);
                }
            } else {
                result = false;
                firstNameField.borderColor = borderColorRed;
                firstNameError.innerText = validationErrorMessages.firstNameLengthError;
            }
        }

        function lastNameValidation () {
            var result = true;
            var lastNameField = document.getElementById("lastName");
            var emailField = document.getElementById("email");
            var lastNameError = document.getElementById("lastNameError");
            var emailError = document.getElementById("emailError");
            var lastNameMinLength = 3, lastNameMaxLength = 20;
            var REGEXP_NAME = "^[а-яА-Яa-zA-Z][А-Яа-яA-Za-z\\s]+[А-Яа-яA-Za-z]$";

            if (lastNameField.value.length >= lastNameMinLength && lastNameField.value.length <= lastNameMaxLength) {
                if (lastNameField.value.search(REGEXP_NAME) == = -1) {
                    result = false;
                    lastNameField.borderColor = borderColorRed;
                    lastNameError.innerText = validationErrorMessages.lastNameContentError;
                } else {
                    clear(lastNameError);
                }
            } else {
                result = false;
                lastNameField.borderColor = borderColorRed;
                lastNameError.innerText = validationErrorMessages.lastNameLengthError;
            }
        }


        function emailValidation () {
            var result = true;
            var emailField = document.getElementById("email");
            var emailError = document.getElementById("emailError");
            var REGEXP_EMAIL = "(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,}";
            var borderColorRed = "#F54D4D";

            if (emailField.value.search(REGEXP_EMAIL) == = -1) {
                result = false;
                emailField.borderColor = borderColorRed;
                emailError.innerText = validationErrorMessages.emailError;
            } else {
                clear(emailError);
            }
            return result;
        }


        function phoneValidation () {
            var result = true;
            var phoneField = document.getElementById("phone");
            var phoneError = document.getElementById("phoneError");
            var phoneLength = 12;
            var REGEXP_phone = "^[0-9]$";

            if (phoneField.value.length == phoneLength) {
                if (phoneField.value.search(REGEXP_phone) == = -1) {
                    result = false;
                    phoneField.borderColor = borderColorRed;
                    phoneError.innerText = validationErrorMessages.phoneLengthError;
                } else {
                    clear(phoneError);
                }
            } else {
                result = false;
                phoneField.borderColor = borderColorRed;
                phoneError.innerText = validationErrorMessages.phoneLengthError;
            }
        }

        function passwordValidation () {
            var result = true;
            var passwordField = document.getElementById("password");
            var passwordError = document.getElementById("passwordError");
            var passwordMinLength = 8, passwordMaxLength = 30;

            if (passwordField.value.length < passwordMinLength || passwordField.value.length > passwordMaxLength) {
                result = false;
                passwordField.borderColor = borderColorRed;
                passwordError.innerText = validationErrorMessages.passwordLengthError;
            } else {
                clear(passwordError);
            }
        }
    }


    function clear(obj) {
        var EMPTY_STRING = "";
        obj.innerText = EMPTY_STRING;
    }

    function isEmpty(str) {
        if (str != null && typeof str != = "undefined"){
            str = str.trim();
        }
        if (!str) {
            return true;
        }
        return false;
    }
}
