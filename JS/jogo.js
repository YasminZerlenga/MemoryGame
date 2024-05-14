const grid = document.querySelector('.grid');

const spanPlayer = document.querySelector('.player');

const timer = document.querySelector('.timer');


let firstCard = '';
let secondCard = '';

const checkFimDeJogo = () =>{
    const disableCards = document.querySelectorAll('disable-card'); /*procura por todos elementos que possuem a classe desable */

    
    if(disableCards.length === 28) {
       
        clearInterval(this.loop);
        window.alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
    }


}


const checarCard = () => {

    const firstPersonagem = firstCard.getAttribute('data-personagem');
    const secondPersonagem = secondCard.getAttribute('data-personagem');

    if(firstPersonagem === secondPersonagem){

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');
        firstCard = '';
        secondCard = '';

        checkFimDeJogo();

    } else {

        setTimeout(() => {
            firstCard.classList.remove('revelarCard');
            secondCard.classList.remove('revelarCard');

            firstCard = '';
            secondCard = '';
        }, 600);
    }
}

const revelarCard = ({target}) =>{

    if (target.parentNode.className.includes('revelarCard')){
        return;
    }

    if (firstCard === ''){
        target.parentNode.classList.add('revelarCard');
        firstCard = target.parentNode;
    } else if(secondCard === ''){
        target.parentNode.classList.add('revelarCard');
        secondCard = target.parentNode;

        checarCard();

    };
} 


const personagens = [
    'bob',
    'gary',
    'lula',
    'patrick',
    'peixe',
    'plank',
    'puff',
    'sandy',
    'sirigueijo',
    'perola',
    'karen',
    'lagosta',
    'holandes',
    'homem',
];


const criarElemento = (tag, className) =>{
    const elemento = document.createElement(tag);

    elemento.className = className;
    return elemento;
};


const criarCard = (personagem) =>{

    const card = criarElemento('div', 'card');/*Irá criar um novo elemento HTML */
    const frente = criarElemento('div', 'face frente');
    const tras = criarElemento('div', 'face tras');

    frente.style.backgroundImage = `url('../images/${personagem}.jpg')` 

    card.appendChild(frente); /*Coloca as div frente e tras dentro da Div card */
    card.appendChild(tras);


    card.addEventListener('click', revelarCard);

    card.setAttribute('data-personagem', personagem);

    return card;
}




const carregarJogo = () =>{

    const dupPersonagens = [...personagens, ...personagens];

    const embaralhado = dupPersonagens.sort( ()=> Math.random() - 0.5);


    embaralhado.forEach((personagem) => {

        const card = criarCard(personagem);
        grid.appendChild(card);


    }); /*espera receber uma função como parametro */
}


const startTimer = () =>{
    this.loop = setInterval(() => {

        const currentTime = + timer.innerHTML;

        timer.innerHTML = currentTime + 1;

    }, 1000);
}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');

    startTimer();

    carregarJogo();
}

