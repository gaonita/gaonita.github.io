var showIcon = document.getElementById('icon'); // Gets the show/hide icon element.
var passwordInput = document.getElementById('password'); // Get the password input element.

showIcon.addEventListener('click', function () {
    showHidePassword();
});

function showHidePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.setAttribute('type', 'text');
        // showIcon.innerHTML = "Hide";
        showIcon.className = "fa fa-eye show-icon";
    } else {
        passwordInput.setAttribute('type', 'password');
        // showIcon.innerHTML = "Show";
        showIcon.className = "fa fa-eye-slash show-icon";
    }
}
