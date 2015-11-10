var Dealer = require ('./Dealer.js');
var Player = require ('./Player.js');

/**
 * Model to represent a table of players in the game of poker
 * Available Public Functions
 *  *dealPlayers()
 *  *showPlayersHands()
 * @param {string} dealerInfo
 * @param {string} playerInfo
 */


module.exports = function (dealerInfo, playersInfo) {
    var i,
        dealer = new Dealer(dealerInfo);
        players = [];

    if(playersInfo.length > 4) {
        console.log('To many players.');
        return;
    }

    for (i = 0; i < playersInfo.length; i++) {
        players.push(new Player(playersInfo[i]));
    }
    /**
     * Deal 5 cards to each of the players including the dealer
     */
    this.dealPlayers = function() {
        var j = 0,
            k; 
        dealer.getDeck();
        dealer.shuffleDeck();
        while (j < 5) {
            for (k = 0; k < players.length; k++) {
                dealer.dealCardToPlayer(players[k]);
            }
            dealer.dealCardToPlayer(dealer);
            j++;
        }
    };
    /**
     * Show the hands of all players
     */
    this.showPlayerHands= function() {

        for (k = 0; k < players.length; k++) {
            players[k].sayMyName();
            players[k].showHand();
            players[k].evaluateHand();
        }
        dealer.sayMyName();
        dealer.showHand();
        dealer.evaluateHand();
    }

    return this;
}
