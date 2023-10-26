let num = parseInt(Math.random()*100+ 1)

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");

const remaining = document.querySelector(".lastResult");

const lowOrHigh = document.querySelector(".lowOrHi");

const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [0]
let numGuess= 5;

let playGame = true;

if (playGame){

  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    
  });

}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Enter a valid no.')
  } else if(guess < 1 ){
    alert('Enter a valid no. , more than 1')
  } else if(guess>100){
    alert('Enter a valid no. , less than 100')
  } else {
    prevGuess.push(guess);
    if (numGuess === 1 ){
      cleanGuess(guess);
      displayMessage(`Game Over. Random Number was ${num}`);
      endGame();
    } else {
      cleanGuess(guess);
      checkGuess(guess);
    }
  }
  
}

function checkGuess(guess){
 if (guess === num){
  displayMessage(`You Guessed it Right`);
  endGame()
 } else if (guess< num){
  displayMessage("Bas Thoda Door");
 } else if (guess> num){
  displayMessage(`Bas thoda dur`);
 }
}

function cleanGuess(guess){
  userInput.value= " ";
  guessSlot.innerHTML += `${guess}, `
  numGuess--;
  remaining.innerHTML = `${numGuess}`;
}

function displayMessage(message) {

  lowOrHigh.innerHTML= `<h2>${message}</h2>`;

}

function endGame(){
  userInput,value = " ";
  userInput.setAttribute('disabled', 'true');
  //p.classList.add('button');
  p.innerHTML = `<button id = "newGame"> Start a new Game </button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}

function newGame() {

  const newGameButton = document.querySelector('#newGame')

  newGameButton.addEventListener('click' , function (e){
    num = parseInt(Math.random()*100+ 1);
    prevGuess = [];
    numGuess = 5;
    guessSlot.innerHTML ='';
    remaining.innerHTML= `${numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

  })
  
}