'use strict';

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

//Random Number Generator
const getrandomNumber = function (min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
};

const CreateArrayOfNumbers = function (start, end) {
  let myArray = [];

  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
};

// console.log(numbersArray);

//newGame
let currentScore, currentScore2, activePlayer, playing, numbersArray;
const init = function () {
  currentScore = 1;
  currentScore2 = 1;
  activePlayer = 0;
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

  numbersArray = CreateArrayOfNumbers(1, 20);
};
init();

//roll functionality
rollLabel.addEventListener('click', function () {
  if (playing) {
    let ranndomIndex = getrandomNumber(0, numbersArray.length);
    let randomNumber = numbersArray[ranndomIndex];

    // const index = odd.findIndex(acc => acc === dice)
    // odd.splice(index[dice])

    //displaying the number
    rollDigits.classList.remove('hidden');
    rollDigits.textContent = randomNumber;

    //displaying the number in dice number in the currentPlayer digits
    //ChangeLater

    //If an odd number is rolled
    if (randomNumber % 2 === 1) {
      current0EL.textContent = currentScore++;
      digits0EL.textContent = randomNumber;
      numbersArray.splice(ranndomIndex, 1);
      console.log(randomNumber);
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
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    }
  }
});

rollPlayer1.addEventListener('click', function () {
  if (playing) {
    let ranndomIndex = getrandomNumber(0, numbersArray.length);
    let randomNumber = numbersArray[ranndomIndex];

    //displaying the number
    rollDigits.classList.remove('hidden');
    rollDigits.textContent = randomNumber;

    if (randomNumber % 2 === 0) {
      current1EL.textContent = currentScore2++;
      digits1EL.textContent = randomNumber;
      numbersArray.splice(ranndomIndex, 1);
      console.log(`even ${randomNumber}`);
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      rollLabel.classList.remove('hidden');
      rollPlayer1.classList.add('hidden');
      rollDigits.textContent = '?';

      player0EL.classList.add('player--active');
      player1EL.classList.remove('player--active');
    }

    if (currentScore2 === 11) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    }
  }
});

newgameLabel.addEventListener('click', init);
