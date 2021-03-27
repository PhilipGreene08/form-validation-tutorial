const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//functions
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message

}

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase()
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value === '') {
            showError(input, `${getFieldName(input)} is invalid`)
        } else {
            showSuccess(input)
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} cant be less than ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} cant be more than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(String(email).toLowerCase());
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, `Email is not valid`)
    }

}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords do not match`)
    } else {
        showSuccess(input2)
    }
}

form.addEventListener('submit', function (e) {
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswords(password, password2)

    e.preventDefault()

})

