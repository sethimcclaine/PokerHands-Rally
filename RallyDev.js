

var Table = require("./models/Table.js");
//*
var table = new Table({
        name: 'Seth'
    },[{
        name: 'Heather'
    }, {
        name: 'Katie',
    }, {
        name: 'James'
    }
]); 

table.dealPlayers();
table.showPlayerHands();

