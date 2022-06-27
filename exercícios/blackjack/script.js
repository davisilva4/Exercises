let firstCard = Math.floor(Math.random() * 10) + 1;
let cards = [firstCard];
let hasBlackJack = false;
let isALive = true;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let sum = firstCard;

function renderGame(){
    cardsEl.innerText = `Cards: ${firstCard}`

    for(let i=1;i<cards.length;i++){
        cardsEl.innerText += ` - ${cards[i]}`;
    }

    if (sum < 21){
        message = `Do you want to draw a new card?`
    }

    else if (sum === 21){
        hasBlackJack = true
        message = `You got the Black Jack!`
    }

    else{
        isALive = false
        message = `You lost!`
    }

    sumEl.innerText = `Sum: ${sum}`;
    messageEl.innerText = message;
}

function newCard(){
    if(isALive){
        if(!hasBlackJack){
            let card = Math.floor(Math.random() * 10) + 1;
            cards.push(card);
            sum += card;
            
            renderGame();
        }
    }
}

function startGame(){
    renderGame();
}

