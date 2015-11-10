/**
 * Model to represent a dealer, a dealer is also a player 
 * Available Public Functions
 *  *player functions
 *  *getDeck()
 *  *shuffleDeck()
 *  *dealCardToPlayer(player)
 * @param {string} DealerInfo
 */

var Hand = require("./Hand.js");
var Deck = require("./Deck.js");
var Player = require("./Player"); 

var Dealer = Player;
/**
 * Create a new deck
 */
Dealer.prototype.getDeck = function() {
    this.currentDeck = new Deck();
};
/**
 * Shuffle the deck
 */
Dealer.prototype.shuffleDeck = function() {
    this.currentDeck.shuffle();
};
/**
 * Draw the top card from the deck and hand to player to add in hand
 * @param {obj} player
 */
Dealer.prototype.dealCardToPlayer = function(player) {
    var topCard = this.currentDeck.drawCard();
    player.addToHand(topCard);
};

module.exports = Dealer;
