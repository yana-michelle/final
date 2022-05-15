var score = document.getElementsByClassName('.score');

var score =0;


const cards = document.querySelectorAll('.card1', '.card2', '.card3', '.card4', '.card5', '.card6');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    score = score+1;
    return;
    }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}

function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("change").innerHTML = this.responseText;
    }
    xhttp.open("GET", "change.txt")
}
