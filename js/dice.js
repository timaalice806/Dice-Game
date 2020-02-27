"use strict";

let startGame = alert("Press button to start game");

let players = [{score: 0}, {score: 0}, {score: 0}, {score: 0}, {score: 0}, {score: 0}, {score: 0}, {score: 0}, {score: 0}, {score: 0}];

function rollDie (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //document.getElementById("dr").innerHTML = ;
}

function rollDiePlayers () {
    for(var i = 0; i < players.length; i++){
        let dice4 = rollDie(1,4);
        let dice6 = rollDie(1,6);
        let dice8 = rollDie(1,8);
        let dice10 = rollDie(1,10);
        let dice12 = rollDie(1,12);
        let dice20 = rollDie(1,20);
     let sum = dice4 + dice6 + dice8 + dice10 + dice12 + dice20;
     players[i].score = sum;
    } 
    console.log(players.score)
}
function removeLowestScore (players) {
   console.log(Math.min.apply(null, players));
}
console.log(players.score);



