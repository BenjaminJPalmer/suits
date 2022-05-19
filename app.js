var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

let fullDeckDisplay = false;


function getDeck() {
	var deck = new Array();

	for (var i = 0; i < suits.length; i++) {
		for (var x = 0; x < cards.length; x++) {
			var card = { Value: cards[x], Suit: suits[i] };
			deck.push(card);
		}
	}
	return deck;
}

function shuffle() {
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++) {
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var temp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = temp;
	}
}

function renderDeck() {
	if (deck.length == 0) {
		document.getElementById('end').innerHTML = "<h2>Out of cards!</h2>";
		window.scrollTo(0, document.body.scrollHeight);
	
	} else {
		if (document.getElementById('fulldeck').checked) {
			fullDeckDisplay = true;
		} else if (!document.getElementById('fulldeck').checked) {
			fullDeckDisplay = false;
		}

		if (!fullDeckDisplay) {
			document.getElementById('deck').innerHTML = '';
		}

		for (let i = 0; i < 4; i++) {
			let card = document.createElement("div");
			let value = document.createElement("div");
			let suit = document.createElement("div");
			card.className = "card";
			value.className = "value";
			suit.className = "suit " + deck[i].Suit;

			value.innerHTML = deck[i].Value;
			card.appendChild(value);
			card.appendChild(suit);

			document.getElementById("deck").appendChild(card);
			window.scrollTo(0, document.body.scrollHeight);
		}

		for (let j = 0; j < 4; j++) {
			deck.shift()
		}
	}
}

const form = document.querySelector('form');

form.addEventListener('submit', event => {
	event.preventDefault()
	const players = document.getElementById('players').value;
	console.log(players)
	document.querySelector('.magic-number').innerHTML = `The magic number is: ${players - 1}`;
})

const drinks = document.getElementsByClassName('result')




function load() {
	deck = getDeck();
	shuffle();
}

window.onload = load();