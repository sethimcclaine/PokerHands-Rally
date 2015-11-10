var Deck = require("./models/Deck.js");
var Hand = require("./models/Hand.js");
var Card = require("./models/Card.js");

var Test = function(handType, testHand) {
    var hand = new Hand(),
        evaluatedAs,
        i,
        card;
    for(i = 0; i < testHand.length; i++) {
        card = testHand[i];
        hand.addCard(new Card(card.suit,card.number));    
    }

    if(handType === hand.evaluate()) {
        console.log(handType+': Pass');
    } else {
        console.log(handType+': Fail');
    }

};
var countCards = function(showCards) {
    //Counting number of cards
    var deck = new Deck();

    var remainingCards =deck.getRemainingCards();

    console.log('52 cards in deck:' + (remainingCards.length === 52));
    if(showCards) {
        for (var i = 0; i < remainingCards.length; i++) {
            console.log(remainingCards[i].getCardName());
        }
    }
}


//countCards(false);

//Testing hand types
    
Test('RoyalFlush', [
     { suit: 'S', number: 13 }, 
     { suit: 'S', number: 1  }, 
     { suit: 'S', number: 11 }, 
     { suit: 'S', number: 10 }, 
     { suit: 'S', number: 12 }]);

Test('StraightFlush', [
     { suit: 'S', number: 13 }, 
     { suit: 'S', number: 9  }, 
     { suit: 'S', number: 11 }, 
     { suit: 'S', number: 10 }, 
     { suit: 'S', number: 12 }]);

Test('FourOfAKind', [
     { suit: 'S', number: 1  }, 
     { suit: 'C', number: 1  }, 
     { suit: 'D', number: 1  }, 
     { suit: 'H', number: 1  }, 
     { suit: 'S', number: 12 }]);

Test('FullHouse', [
     { suit: 'S', number: 1  }, 
     { suit: 'C', number: 1  }, 
     { suit: 'D', number: 1  }, 
     { suit: 'H', number: 12 }, 
     { suit: 'S', number: 12 }]);

Test('Flush', [
     { suit: 'S', number: 1  }, 
     { suit: 'S', number: 8  }, 
     { suit: 'S', number: 7  }, 
     { suit: 'S', number: 10 }, 
     { suit: 'S', number: 12 }]);


Test('Straight', [
     { suit: 'S', number: 13 }, 
     { suit: 'S', number: 9  }, 
     { suit: 'C', number: 11 }, 
     { suit: 'S', number: 10 }, 
     { suit: 'S', number: 12 }]);


Test('ThreeOfAKind', [
     { suit: 'S', number: 1  }, 
     { suit: 'C', number: 1  }, 
     { suit: 'D', number: 1  }, 
     { suit: 'H', number: 7  }, 
     { suit: 'S', number: 12 }]);

Test('TwoPair', [
     { suit: 'S', number: 1  }, 
     { suit: 'C', number: 1  }, 
     { suit: 'D', number: 4  }, 
     { suit: 'H', number: 4  }, 
     { suit: 'S', number: 12 }]);

Test('Pair', [
     { suit: 'S', number: 1  }, 
     { suit: 'C', number: 1  }, 
     { suit: 'D', number: 5  }, 
     { suit: 'H', number: 7  }, 
     { suit: 'S', number: 12 }]);

