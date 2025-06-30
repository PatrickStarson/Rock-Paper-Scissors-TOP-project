// CREATE a function named getComputerChioce.
// DECLAIR a variable named randomNumber and asign it a Math.random() method.
// IF randomNumber is between 0-0,33 return a string 'rock'.
// ELSE IF randomNumber is between 0,33-0,66 return a string  'paper'.
// ELSE return a string 'scissors'.
// CONSOLE.LOG the getComputerChoice result to the console to make sure it works

function getComputerChioce() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return 'rock';
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

console.log(getComputerChioce());


// CREATE a function named getHumanChoice
// CREATE a prompt method to get user's input
// RETURN what the user enters into the prompt

function getHumanChoice() {
  return prompt()
};

console.log(getHumanChoice());

// DECLAIR to variables humanScore and computerScore, both with value of 0.

let humanScore = 0;
let computerScore = 0;


// CREATE a functions named playRound with parameters humanChoice and computerChoice.
// DECLAIRE variables humanSelection and computerSelection after the playRound function and asign getHumanChoice and getComputerChoice to them.
// PASS humanSelection and computerSelection as arguments to playRound function.
// MAKE humanChoice input case-insensitive by adding toLowerCase() method.
// IF humanChoice es equal to computerChoice log a string "It's a Tie!" in the console.
// ELSE IF humanChoice beats computerChoice log a string `You win! ${humanChoice} beats ${computerChoice}.` in the console and increment humanScore by 1.
// ELSE IF computerChoice beats humanChoice log a string `You lose! ${computerChoice} beats ${humanChoice}.` in the console and increment computerScore by 1.

