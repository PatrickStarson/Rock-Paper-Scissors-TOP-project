// Step1
// CREATE a function named getComputerChioce.
// DECLAIR a variable named randomNumber and asign it a Math.random() method.
// IF randomNumber is between 0-0,33 return a string 'rock'.
// ELSE IF randomNumber is between 0,33-0,66 return a string  'paper'.
// ELSE return a string 'scissors'.
// CONSOLE.LOG the getComputerChoice result to the console to make sure it works

//Step2
// CREATE a function named getHumanChoice
// CREATE a prompt method to get user's input
// RETURN what the user enters into the prompt

//Step 3
// DECLAIR to variables humanScore and computerScore, both with value of 0.

//Step4
// CREATE a functions named playRound with parameters humanChoice and computerChoice.
// DECLAIRE variables humanSelection and computerSelection after the playRound function and asign getHumanChoice and getComputerChoice to them.
// PASS humanSelection and computerSelection as arguments to playRound function.
// MAKE humanChoice input case-insensitive by adding toLowerCase() method. You can add the method to the prompt in getHumanChoice function.
// IF humanChoice es equal to computerChoice log a string "It's a Tie!" in the console.
// ELSE IF humanChoice beats computerChoice log a string `You win! ${humanChoice} beats ${computerChoice}.` in the console and increment humanScore by 1.
// ELSE IF computerChoice beats humanChoice log a string `You lose! ${computerChoice} beats ${humanChoice}.` in the console and increment computerScore by 1.

//Step 5
// CREATE a function named playGame.
// MOVE playRound function and score variables into the playGame function.
// WRITE a for loop that will run playRound function 5 times.


/*NEW BRANCH rps-ui*/



let humanScore = 0;
let computerScore = 0;

const result = document.querySelector('#result');
const score = document.querySelector('#score');

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return 'rock';
  } else if (randomNumber <= 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    result.textContent = ("It's a Tie.");
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    result.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }

  score.textContent = (`Human: ${humanScore} | Computer: ${computerScore}`);
  
  if(humanScore === 5 ) {
    result.textContent = (`Human won!`)
  } else if(computerScore === 5) {
    result.textContent = (`Computer won!`)
  }
}

// Button event listeners:
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  playRound('rock', computerSelection);
});

paperBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  playRound('paper', computerSelection);
});

scissorsBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  playRound('scissors', computerSelection);
});





















/*
  if(humanScore > computerScore) {
  console.log('The Human won!')
} else {
  console.log('The Computer won!')
}
  */
//};

//playGame();
