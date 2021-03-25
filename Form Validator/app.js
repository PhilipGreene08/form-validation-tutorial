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

form.addEventListener('submit', function (e) {

    if (username.value === '') {
        showError(username, `Need A Username`)
    } else {
        showSuccess(username)
    }
    e.preventDefault()

    if (email.value === '') {
        showError(email, `Need An Email`)
    } else {
        showSuccess(email)
    }
    e.preventDefault()

    if (password.value === '') {
        showError(password, `Need A Password`)
    } else {
        showSuccess(password)
    }
    e.preventDefault()

    if (password2.value === '') {
        showError(password2, `Need A Password`)
    } else {
        showSuccess(password2)
    }
    e.preventDefault()
})

