var matchingElement = document.getElementById('matchingGame');

var matchingCards = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

var buildDeck = function buildDeck() {
    matchingCards = matchingCards.concat(matchingCards)
}

var shuffleDeck = function shuffleDeck() {
    for (var i = 0; i < matchingCards.length; i++) {
        var newSpot, temp;
        newSpot = Math.floor(Math.random() * i);
        temp = matchingCards[i];
        matchingCards[i] = matchingCards[newSpot];
        matchingCards[newSpot] = temp;
    }
}

var buildBoard = function buildBoard() {
    matchingElement.innerHTML = ''
    var buildDeck = ''
    for (var i = 0; i < matchingCards.length; i++) {
        console.log(matchingCards[i]);
      var deck = '<div class = "cards" onclick = "flipCard(this, \''+matchingCards[i]+'\')"></div>';
      buildDeck += deck;
    }
    matchingElement.innerHTML = buildDeck;
};

var flipCard = function flipcard(card, color) {
    card.style.background = color;
}

buildDeck();
shuffleDeck();
buildBoard();
