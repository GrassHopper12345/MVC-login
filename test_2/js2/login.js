const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();


    if (username && password) {
        const response = await fetch('./api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to login in.')
        }
    }
};

const loginForm = document.querySelector('.login-form');
if(loginForm){
    loginForm.addEventListener('click', loginFormHandler);
}