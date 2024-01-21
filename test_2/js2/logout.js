const logoutForm = async () => {
    const response = await ('./api/user/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok) {
        document.location.replace();
    }else{
        alert(err);
    }
};

const logoutButton = document.querySelector('#logout');
if(logoutButton) {
    logoutButton.addEventListener('click', logoutForm);
}