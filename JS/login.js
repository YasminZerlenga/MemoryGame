const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');


const validateInput = ({target}) => { /*target é o nosso input - o que foi digitado*/
    if (target.value.length > 2){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}


const handleSubmit = (event) => {
    event.preventDefault(); /*bloqueia o comportamento padrão do formulario*/

    localStorage.setItem('player', input.value); /*Player será o nome da chave no local storage */
    window.location = 'pages/jogo.html'; /*redireciona para uma nova página */
}
/*Através do input.value conseguimos recuperar o que foi digitado*/


input.addEventListener('input', validateInput);

form.addEventListener('submit', handleSubmit);