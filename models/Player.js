var Hand = require("./Hand.js");
module.exports = function (playerInfo) {
    var name = playerInfo.name;
    var hand = new Hand();
    this.addToHand = function(card) {
        hand.addCard(card);
    };
    this.showHand = function() {
        hand.show();
    };
    this.evaluateHand = function() {
        hand.evaluate();
    };
    this.sayMyName = function() {
        console.log(name);
    };
    return this;
};
