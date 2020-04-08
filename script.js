const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function right() {
document.getElementById("blank").src='../right.mp3';
};



function wrong() {
document.getElementById("blank").src='../wrong.mp3';
};






function dropdownmenu(){
 if (menu.value == 'intro') {
    intro();
  } else if (menu.value == 'transportation') {
    transportation();
    console.log(transportation);
  } else if (menu.value == 'animal') {
    animal();
  } else if (menu.value == 'emotions') {
    emotions();
    } else if (menu.value == 'job') {
    job();
}
}

function transportation() {
    window.location.href = 'https://dougwperez.github.io/Memory-Match/categories/transportation.html';
}

function animal() {
    window.location.href = 'https://dougwperez.github.io/Memory-Match/categories/animal.html';
}

function emotions() {
    window.location.href = 'https://dougwperez.github.io/Memory-Match/categories/emotions.html';
}

function job() {
    window.location.href = 'https://dougwperez.github.io/Memory-Match/categories/job.html';
}







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
			right();

		} else {
			unflipCards();
			wrong();

			
	}
}
function disableCards(){
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);

	lockBoard = true;
	setTimeout(() => {
		firstCard.style.visibility='hidden';
		secondCard.style.visibility='hidden';
		lockBoard = false;
		resetBoard();
		}, 1400);
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


//why does this only work when its at the end, otherwise, thie variable at the begining disables the cards??
var menu = document.getElementById("themes");
menu.addEventListener("themes", generateData);
