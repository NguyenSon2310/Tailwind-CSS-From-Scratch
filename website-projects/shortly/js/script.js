const input = document.getElementById("link-input")
const linkForm = document.getElementById("link-form")
const errMsg = document.getElementById("err-msg")

linkForm.addEventListener('submit', formSubmit)

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
    return !!pattern.test(str)
}

function formSubmit(e) {
    e.preventDefault()

    if (!input.value) {
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    } else if (!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter a valid URL'
        input.classList.add('border-red')
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }
}