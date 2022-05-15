const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    this.classList.add('flip');
    
    if (this === firstCard) return;

    if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
   }
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
  }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    resetBoard();
}


function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
   }, 1500);
} 

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListner('click', flipCard));


