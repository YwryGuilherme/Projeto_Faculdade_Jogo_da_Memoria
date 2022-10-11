const input = document.querySelector('.login_usuario');
const button = document.querySelector('.login_button');
const form = document.querySelector('.formulario_login');


const validateInput = ({ target }) => {
    if (target.value.length >= 4) {
        button.removeAttribute('disabled');
    return
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = 'game.html'
}
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);