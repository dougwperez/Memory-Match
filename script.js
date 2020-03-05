const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//edit back to intro
window.onload = intro();


document.getElementById("exit").setAttribute('onclick', 'location.href = "file:///E:/Games%20site/Pop%20Motion%20Slider/slider.html"'); 
document.getElementById("about").setAttribute('onclick', 'location.href = "file:///E:/Games%20site/Hangman%20Game/hangman.html"'); 


function dropdownmenu(){
 if (menu.value == 'intro') {
    intro();
  } else if (menu.value == 'transportation') {
    transportation();
  } else if (menu.value == 'animal') {
    animal();
  } else if (menu.value == 'emotions') {
    emotions();
    } else if (menu.value == 'job') {
    job();
}
}

function intro(){
    document.getElementById('introPage').style.display = "block";
    document.getElementById('transportation').style.display = "none";
    document.getElementById('animal').style.display = "none";
    document.getElementById('job').style.display = "none";
    document.getElementById('emotions').style.display = "none";
    
}

function animal(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('transportation').style.display = "none";
    document.getElementById('animal').style.display = "block";
    document.getElementById('job').style.display = "none";
    document.getElementById('emotions').style.display = "none";

    
}

function transportation(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('transportation').style.display = "block";
    document.getElementById('animal').style.display = "none";
    document.getElementById('job').style.display = "none";
    document.getElementById('emotions').style.display = "none";
    
}

function job(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('transportation').style.display = "none";
    document.getElementById('animal').style.display = "none";
    document.getElementById('job').style.display = "block";
    document.getElementById('emotions').style.display = "none";
    
}

function emotions(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('transportation').style.display = "none";
    document.getElementById('animal').style.display = "none";
    document.getElementById('job').style.display = "none";
    document.getElementById('emotions').style.display = "block";
    
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


//why does this only work when its at the end, otherwise, thie variable at the begining disables the cards??
var menu = document.getElementById("themes");
menu.addEventListener("themes", generateData);
