var matchingElement = document.getElementById('matchingGame');

var matchingCards = [];
var flips = 0
var flippedCard = ''
var flippedCard1 = ''
var flippedcard2 = ''
var cardCount = 0

var reset = function reset() {
matchingCards = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
// matchingCards = ['red', 'green'];
flips = 0
flippedCard = ''
flippedCard1 = ''
flippedcard2 = ''
cardCount = 0
}

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
      var deck = '<div id = "card'+i+'" class = "cards" style = "background:white" onclick = "flipCard(this, \''+matchingCards[i]+'\')"></div>';
      buildDeck += deck;
    }
    matchingElement.innerHTML = buildDeck;
};

var flipCard = function flipcard(card, color) {
    if (flips == 0 && card.style.background == 'white') {
        flips = 1;
        flippedCard = color;
        flippedCard1 = card;
        card.style.transform = 'rotateY(180deg)';
        card.style.background = color;
    } else if (flips == 1 && flippedCard !== color && card.style.background == 'white') {
        var flipBack = function flipBack() {
            flips = 0;
            flippedCard1.style.background = 'white';
            flippedCard2.style.background = 'white';
            flippedCard1.style.transform = '';
            flippedCard2.style.transform = '';
        }
        flips = 2;
        flippedCard2 = card;
        card.style.transform = 'rotateY(180deg)';
        card.style.background = color;
        setTimeout(flipBack, 700);
    } else if (flips == 1 && flippedCard == color && card.style.background == 'white') {
        card.style.transform = 'rotateY(180deg)';
        card.style.background = color;
        flips = 0;
        cardCount += 2;
        if (cardCount == matchingCards.length) {
            var victory = function victory() {
                sweetAlert ("Congrats!", "You did it!", "success");
                newgame();
            }
            $('.cards').velocity("callout.flash", { stagger: 100, duration: 500 })
            $('.cards').velocity("callout.bounce", { stagger: 100, duration: 500 })
            setTimeout(victory, 3500);
            
        }
    }
        
        
}
var newgame = function newgame() {
reset();
buildDeck();
shuffleDeck();
buildBoard();
}

newgame();


