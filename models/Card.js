/**
 * Model to represent a Card
 * Available Public Functions
 *  *getCardName()
 * @param {string} suit
 * @param {int} number
 */
module.exports = function (suit, number) {
    this.suit = suit;
    this.number = number;
    /**
     * Return the combination of the suit and the number
     * @return {string} cardname
     */
    this.getCardName = function() {
        return this.number+'('+this.suit+')';
    }
    return this;
};

