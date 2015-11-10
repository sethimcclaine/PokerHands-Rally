var Test = function(hand, handType) {
    var evaluatedAs;

    if(handType === hand.evaluate()) {
        console.log(handType+': Pass');
    } else {
        console.log(handType+': Fail');
    }

};

//Counting number of cards
var Deck = require("./models/Deck.js");
var deck = new Deck();

//This test proved useful, I was only including 48 :-)
var remainingCards =deck.getRemainingCards();
console.log('52 cards in deck:' + (remainingCards.length === 52));
for (var i = 0; i < remainingCards.length; i++) {
    console.log(remainingCards[i].getCardName());
}




//Testing hand types
var Hand = require("./models/Hand.js");
var Card = require("./models/Card.js");

var testHand = new Hand();
testHand.addCard(new Card('S',13));    
testHand.addCard(new Card('S',9));    
testHand.addCard(new Card('S',11));    
testHand.addCard(new Card('S',10));    
testHand.addCard(new Card('S',12));    
console.log(testHand);
    
var test = new Test(testHand,'RoyalFlush');

//*/

