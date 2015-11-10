var Hand = require("./Hand.js");
var Deck = require("./Deck.js");
var Player = require("./Player"); 

var Dealer = Player;

Dealer.prototype.getDeck = function() {
    this.currentDeck = new Deck();
};
Dealer.prototype.shuffleDeck = function() {
    this.currentDeck.shuffle();
};

Dealer.prototype.dealCardToPlayer = function(player) {
    var topCard = this.currentDeck.drawCard();
    player.addToHand(topCard);
};

module.exports = Dealer;
