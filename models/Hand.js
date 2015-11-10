module.exports = function () {
    var cards = [],
        numbers = {},
        numberKeys = null,
        suits = {},
        suitKeys = null,
        highCard = null;

    /**
     * Accept a card and retain it in the hand
     * (Public)
     */
    this.addCard = function(card) {

        //Keep track of high card
        if (highCard === null) {
            highCard = card; 
        } else if (highCard.number === 1) {
            //It's an Ace, Do nothing, 
            //Just clearner to get out of if this way instead of 
            //adding extra conditions in else if
        } else if (card.number === 1 || highCard.number < card.number) {
            highCard = card;
        }
        //Keep track of card numbers
        numbers[card.number] = (numbers[card.number]?numbers[card.number] + 1: 1); 
        //Keep track of card suits
        suits[card.suit] = (suits[card.suit]?suits[card.suit] + 1 : 1);

        cards.push(card);
    };
    /**
     * Print out the current cards in hand
     * (public)
     */
    this.show = function() {
        var i;
        var cardNames = [];
        for(i = 0; i < cards.length; i++) {
            cardNames.push(cards[i].getCardName());
        }
        console.log(cardNames.join(', '));
    };
    /**
     * 1(Ace), 13(King), 12(Queen), 11(Jack), 10 all of the same suit
     * -High card doesn't matter
     * (Private)
     *
     * @return {bool}
     */
    var isRoyalFlush = function() {
        if(isStraightFlush() && getHighCard().number === 1) {
            return true;
        }
        return false;
    };
    /**
     * Five cards in a row, all of the same suit
     * -High card doesn't matter
     * (Private)
     *
     * @return {bool}
     */
    var isStraightFlush = function() {
        if(isStraight() && isFlush()) {
            return true;
        }
        return false;
    };
    /**
     * Four Cards, one of each suit, all the same number
     * -High card doesn't matter
     * (Private)
     *
     * @return {bool}
     */
    var isFourOfKind = function() {
        var i,
            numberKey;
        for (i = 0; i < numberKeys.length; i++) {
            numberKey = numberKeys[i];
            if(numbers[numberKey] === 4) {
                return true;
            }
        }
        return false;
    };

    /**
     * Four Cards, one of each suit, all the same number
     * -High card doesn't matter
     * (Private)
     *
     * @return {bool}
     */
    var isFullHouse = function() {
        if (isOnePair() && isThreeOfKind()) {
            return true;
        }
        return false;
    };

    /**
     * Four Cards, one of each suit, all the same number
     * -High card decides winner if two players have a flush
     * (Private)
     *
     * @return {bool}
     */
    var isFlush = function() {
        if(suitKeys.length === 1) {
            return true;
        }
        return false;
    };
    /**
     * All cards have the same suit
     * -High card decides winner if two players have the same two pair
     * (Private)
     *
     *  @return {bool}
     */
    var isStraight = function(){
        numberKeys.sort(function(a, b){return a-b});
        /*If statement written with sub statements for easier comprehension/readability*/
        
        //if the 2,3,4,5 cards are all incrimenting by one
        if (parseInt(numberKeys[1]) + 1 === parseInt(numberKeys[2]) &&
            parseInt(numberKeys[2]) + 1 === parseInt(numberKeys[3]) &&
            parseInt(numberKeys[3]) + 1 === parseInt(numberKeys[4])) {
                if(parseInt(numberKeys[0]) === 1 && parseInt(numberKeys[4]) === 13 ) {
                    //and if the 5th card is the king(13) and the first card is an ace (1)
                    return true;
                } else if (parseInt(numberKeys[1]) - 1 === parseInt(numberKeys[0])) {
                    //or the second card - 1
                    return true
                }
        }
        return false;
    };

    /**
     * Three Cards, all the same number
     * -High card doesn't matter
     * (Private)
     *
     * @return {bool}
     */
    var isThreeOfKind = function() {
        var i,
            numberKey;
        for (i = 0; i < numberKeys.length; i++) {
            numberKey = numberKeys[i];
            if(numbers[numberKey] === 3) {
                return true;
            }
        }
        return false;
    };

    /**
     * Two sets of two cards with the same number
     * -High card decides winner if two players have the same two pair
     * (Private)
     *
     * @return {bool}
     */
    var isTwoPair = function(){
        var i,
            numberKey,
            pairCount = 0;
        for (i = 0; i < numberKeys.length; i++) {
            numberKey = numberKeys[i];
            if(numbers[numberKey] === 2) {
                pairCount++;
                if (pairCount === 2) {
                    return true;
                }
            }
        }
        return false;
    };

    /**
     * One sets of two cards with the same number
     * -High card decides winner if two players have the same pair
     * (Private)
     *
     * @return {bool}
     */
    var isOnePair = function(){
        var i,
            numberKey;
        for(i = 0; i < numberKeys.length; i++) {
            numberKey = numberKeys[i];
            if(numbers[numberKey] === 2) {
                return true;
            }
        }
        return false;
    };

    /**
     * Return the highest card in hand
     * - This can be the determining factor is players have tieing hands
     * (Private)
     *
     * @return {bool}
     */
    var getHighCard = function() {
        return highCard;
    };

    /**
     * Check hand for highest rating 
     * (Public)
     */
    this.evaluate = function() {

        numberKeys = Object.keys(numbers);
        suitKeys = Object.keys(suits);
        if (isRoyalFlush()){
            console.log('I have a royal flush');
            return 'RoyalFlush';
        } else if (isStraightFlush()) {
            console.log('I have a straight flush starting at '+ getHighCard().getCardName());
            return 'StraightFlush';
        } else if (isFourOfKind()) {
            console.log('I have four of a kind, my high card is '+ getHighCard().getCardName());
            return 'FourOfAKind';
        } else if (isFullHouse()) {
            console.log('I have a full house');
            return 'FullHouse';
        } else if (isFlush()) {
            console.log('I have a flush, my high card is '+ getHighCard().getCardName());
            return 'Flush';
        } else if (isStraight()) {
            console.log('I have a straight starting at '+ getHighCard().getCardName());
            return 'Straight';
        } else if (isThreeOfKind()) {
            console.log('I have three of a kind, my high card is '+ getHighCard().getCardName());
            return 'ThreeOfAKind';
        } else if (isTwoPair()) {
            console.log('I have a two pair, my high card is '+ getHighCard().getCardName());
            return 'TwoPair';
        } else if (isOnePair()){
            console.log('I have a pair, my high card is '+ getHighCard().getCardName());
            return 'Pair';
        } else {
            console.log('I just have my high card, '+ getHighCard().getCardName());
            return 'HighCard';
        }
    };
    return this;
};

