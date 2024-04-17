let decks = 1;
let cards = [];
let cardsPlayed = 0;
let suits = ['\u2666', '\u2663', '\u2665', '\u2660'];
let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
let hand = [];

/* ------------- Blackjack functions ------------- */

function createDecks(decks){
    for (let i = 0; i < decks; i++) {
	suits.forEach(function(suit){
	    values.forEach(function(value){
		cards.push(value+suit)
	    });
	});
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function hitCard(){
    if (cards.length){
        hand.push(cards.pop());
    }
}

/* ------------- Card counting functions -------------*/

/* ------------- Odd checking functions -------------*/

/* ------------- Navigation Functions ------------- */
function startGame(){
   window.location.href = "game.html";
}

function startCount(){
   window.location.href = "count.html";
}
function startOdds(){
   window.location.href = "odds.html";
}
function backToMenu(){
    window.location.href = "index.html";
}

