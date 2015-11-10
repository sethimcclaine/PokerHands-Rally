
module.exports = function (suit, number) {
    this.suit = suit;
    this.number = number;
    /**
     * print the combination of the suit and the number
     */
    this.getCardName = function() {
        return this.number+'('+this.suit+')';
    }
    return this;
};

