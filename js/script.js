const passwordElement = document.querySelector('#password');
const confirmPwdElement = document.querySelector('#confirm_password');

// Currently only checks if the user correctly re-typed their password.
// Could be modified to add strength checks
function validatePassword() {
    if (passwordElement.value != confirmPwdElement.value) {
        confirmPwdElement.setCustomValidity("Passwords Don't Match");
        confirmPwdElement.classList.add('error');
    } else {
        confirmPwdElement.setCustomValidity('');
        confirmPwdElement.classList.remove('error');
    }
}

passwordElement.addEventListener('input', validatePassword);
confirmPwdElement.addEventListener('input', validatePassword);