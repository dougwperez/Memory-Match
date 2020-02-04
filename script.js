const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
	if(lockBoard) return;
	if(this=== firstCard) return;

	this.classList.toggle('flip');

	if (!hasFlippedCard) {
		//first click
		hasFlippedCard = true;
		firstCard = this;

		return; 
	}
		//second click
		
		secondCard = this;

		checkForMatch();
}
		


function checkForMatch() {

//do cards match
		if (firstCard.dataset.framework === secondCard.dataset.framework) {
			//its a matach!
			disableCards();
		} else {
			unflipCards();
			
	}
}
function disableCards(){
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);

	resetBoard();
}

function unflipCards() {
	lockBoard = true;
//not a match
			setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove ('flip');
		lockBoard = false;
		resetBoard();
		}, 1400);
}

 function resetBoard() {
    hasFlippedCard =  lockBoard = false;
    firstCard = secondCard = null
  }

(function shuffle() {
	cards.forEach(card => {
		const randomPos = Math.floor(Math.random()*cards.length);
		card.style.order = randomPos;
	});
})(); 


cards.forEach(card => card.addEventListener('click', flipCard));