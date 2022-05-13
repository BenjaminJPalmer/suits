var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
const fullDeckDisplay = true;

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

function load() {
	deck = getDeck();
	shuffle();
}

window.onload = load();