"use strict";

var dice = {
    sides: 20,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number1,number2) {
    var placeholder1 = document.getElementById('placeholder1');
    var placeholder2 = document.getElementById('placeholder2');
    placeholder1.innerHTML = number1;
    placeholder2.innerHTML = number2;

  }

  function printWinner(Champ){
    var placeholderResults = document.getElementById('results');
    placeholderResults.innerHTML = Champ;

  }

  function printDraw(){
    var placeholderResults = document.getElementById('results');
    placeholderResults.innerHTML = "There's a draw!";
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var Player = dice.roll();
    var Dealer = dice.roll();
    printNumber(Player, Dealer);
      //determines if there is a winner
    whoWon(Player, Dealer);
  };

  function whoWon(x, y){
    if(x > y){
        printWinner("Player");
    }
    else if(x < y){
        printWinner("Dealer");

    }
    else if(x == y){
        printDraw();
    }
    
  }

  
