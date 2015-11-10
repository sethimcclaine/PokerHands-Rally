

var Hand = require("./Hand.js");
var Deck = require("./Deck.js");

module.exports = function (dealerInfo) {
    /*
    this = new Player(dealerInfo);
    /*/
    //Begin Player Data
    var name = dealerInfo.name;
    var hand = new Hand();

    this.addToHand = function(card) {
        //hand.cards.push(card);
        hand.addCard(card);
    };
    this.showHand = function() {
        hand.show();
    };
    this.evaluateHand = function() {
        hand.evaluate();
    };
    this.sayMyName = function() {
        console.log(name + ' (Dealer)');
    };
    //End player data
    //*/
    this.getDeck = function() {
        this.currentDeck = new Deck();
    };
    this.shuffleDeck = function() {
        this.currentDeck.shuffle();
    };

    this.dealCardToPlayer = function(player) {
        var topCard = this.currentDeck.drawCard();
        player.addToHand(topCard);
    };

    return this;
};
