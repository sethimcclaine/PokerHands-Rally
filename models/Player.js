var Hand = require("./Hand.js");

/**
 * Model to represent a player
 * Available Public Functions
 *  *addToHand()
 *  *showHand()
 *  *evaluateHand()
 *  *sayMyName()
 * @param {string} playerInfo
 */

module.exports = function (playerInfo) {
    var name = playerInfo.name;
    var hand = new Hand();
    /**
     * add a card to players hand
     * @param {obj} card
     */
    this.addToHand = function(card) {
        hand.addCard(card);
    };
    /**
     * Print out cards in players hand
     */
    this.showHand = function() {
        hand.show();
    };
    /**
     * Print out the value of players hand
     */
    this.evaluateHand = function() {
        hand.evaluate();
    };
    /**
     * Print out players name
     */
    this.sayMyName = function() {
        console.log(name);
    };
    return this;
};
