const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })
    if (response.ok) {
        document.location.replace('/');
    }else{
        alert('Could not logout! PLease try again');
    }
};

const logoutButton = document.querySelector('#logout-button');
if(logoutButton){
    logoutButton.addEventListener('click', logoutHandler);
}