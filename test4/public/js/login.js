const  loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#login-form');
    const password = document.querySelector('#password-form');

    if (username && password) {
        const response = await fetch('./api/users/login', {
            method: 'POST',
            body: JSON.stringify(username, password),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/');
        }else {
            alert('Could not login at this time!');
        }
    } 
};

const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginform.addEventListener('submit', loginFormHandler);
};