'use strict';

const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const rollDigits = document.querySelector('.roll-digits');
const digits0EL = document.querySelector('.digits--0');
const digits1EL = document.querySelector('.digits--1');
const rollLabel = document.querySelector('.roll-label');
const current0EL = document.querySelector('.currentDigits--0');
const current1EL = document.querySelector('.currentDigits--1');
const rollPlayer1 = document.querySelector('.roll-player-1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const holdBtn = document.querySelector('.hold-label');
const newgameLabel = document.querySelector('.newgame-label');
const playerWinner = document.querySelector('.player--winner');

//starting Conditions
rollDigits.classList.toggle('hidden');
digits0EL.textContent = 0;
digits1EL.textContent = 0;



//newGame
let currentScore, currentScore2, activePlayer, playing
const init = function(){
    currentScore = 1;
    currentScore2 = 1;
    activePlayer = 0;
    playing = true


    rollDigits.classList.add('hidden');

    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
  
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
  
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
  
    digits0EL.textContent = 0;
    digits1EL.textContent = 0;
  
    current0EL.textContent = 0;
    current1EL.textContent = 0;
}
init()


//roll functionality
rollLabel.addEventListener('click', function () {
    if(playing){
        const dice = Math.trunc(Math.random() * 20) + 1;
  console.log(dice);

  //displaying the number
  rollDigits.classList.remove('hidden');
  rollDigits.textContent = dice;

  //displaying the number in dice number in the currentPlayer digits
  digits0EL.textContent = dice; //ChangeLater

  //If an odd number is rolled
  if (dice % 2 === 1) {
    current0EL.textContent = currentScore++;
  } else {
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    rollLabel.classList.add('hidden');
    rollPlayer1.classList.remove('hidden');
    rollDigits.textContent = '?';

    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
  }

  if (currentScore === 11) {
    playing = false
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
    }
  
});


rollPlayer1.addEventListener('click', function () {
    if(playing){
        const dice = Math.trunc(Math.random() * 20) + 1;

  //displaying the number
  rollDigits.classList.remove('hidden');
  rollDigits.textContent = dice;

  digits1EL.textContent = dice;

  if (dice % 2 === 0) {
    current1EL.textContent = currentScore2++;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    rollLabel.classList.remove('hidden');
    rollPlayer1.classList.add('hidden');
    rollDigits.textContent = '?';

    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
  }

  if (currentScore2 === 11) {
    playing = false
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
    }
  
});

newgameLabel.addEventListener('click', init)

