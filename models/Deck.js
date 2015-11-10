/**
 * Shuffle method was borrowed from:
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
Array.prototype.shuffle = function() {
    var i = this.length, 
        j, 
        temp;
    if ( i == 0 ) {
        return this;
    }
    while (i -= 1) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

var Card = require("./Card.js");

module.exports = function () {
    /**
     * Build the cards array (1-12 or each suit h,s,c,d)
     */
    var i, //iterator for suits
        j, //iterator for card number
        suits= ['H', 'S', 'C', 'D'];

    //Clear the deck
    cards= [];

    for (i = 0; i < suits.length; i++) {
        j=1;
        while (j <= 13) {
            card = new Card(suits[i], j);
            cards.push(card);
            j++;
        }
    }
    this.drawCard = function() {
        return cards.pop();
    };
    this.getRemainingCards = function() {
        return cards;
    };
    this.shuffle = function() {
        cards.shuffle();
    }

    return this;
};
