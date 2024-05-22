let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    let inputform = element.parentElement;
    let errorDisplay = inputform.querySelector('.error');

    errorDisplay.innerText = message;
    inputform.classList.add('error');
    inputform.classList.remove('success')
}

const setSuccess = element => {
    let inputform = element.parentElement;
    let errorDisplay = inputform.querySelector('.error');

    errorDisplay.innerText = '';
    inputform.classList.add('success');
    inputform.classList.remove('error');
};

const validateInputs = () => {
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
