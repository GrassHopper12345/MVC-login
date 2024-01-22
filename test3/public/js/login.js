const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login');
    const password = document.querySelector('#password-login');

    if (username && password) {
        const response = await fetch('./api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        }else{
            alert('Could not login! Please try again');
        }
    }
};

const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
};