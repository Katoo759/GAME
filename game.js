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

//starting Conditions
rollDigits.classList.toggle('hidden');
digits0EL.textContent = 0;
digits1EL.textContent = 0;

//new game
let currentScore, activePlayer, scores, playing;
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

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
};
init();

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.currentDigits--${activePlayer}`).textContent = 0;
  currentScore = 0;

  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
rollLabel.addEventListener('click', function () {
  if (playing) {
    //Generate a RANDOMDice Number
    const dice = Math.trunc(Math.random() * 20) + 1;
    console.log(dice);

    //Display the dice
    rollDigits.classList.remove('hidden');
    rollDigits.textContent = dice;

    //If an odd number is rolled
    if (dice % 2 === 1) {
      //add dice to currentScore
      currentScore += dice;
      document.querySelector(`.currentDigits--${activePlayer}`).textContent =
        currentScore;
    } else {
      rollLabel.classList.add('hidden');
      rollPlayer1.classList.toggle('hidden');
      switchPlayer();
    }
  }
});

rollPlayer1.addEventListener('click', function () {
  if (playing) {
    //Generate a RANDOMDice Number
    const dice = Math.trunc(Math.random() * 20) + 1;
    console.log(dice);

    //Display the dice
    rollDigits.classList.remove('hidden');
    rollDigits.textContent = dice;

    //If an even  number is rolled
    if (dice % 2 === 0) {
      //add dice to currentScore
      currentScore += dice;
      document.querySelector(`.currentDigits--${activePlayer}`).textContent =
        currentScore;
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector(`.currentDigits--${activePlayer}`).textContent = 0;
      currentScore = 0;
      rollDigits.classList.remove('hidden');
      rollLabel.classList.remove('hidden');
      rollPlayer1.classList.add('hidden');
      player0EL.classList.toggle('player--active');
      player1EL.classList.toggle('player--active');
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log('hold Button');

    document.querySelector(`.digits--${activePlayer}`).textContent =
      scores[activePlayer];

    //2 if score >= 20 activeplayer win
    if (scores[activePlayer] >= 10) {
      playing = false;
      rollDigits.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }

    rollLabel.classList.remove('hidden');
    rollPlayer1.classList.add('hidden');

    switchPlayer();
  }
});

newgameLabel.addEventListener('click', init);
