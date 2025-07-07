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


function getHumanChoice() {
  return prompt().toLowerCase();
};


//function playGame () {
  
  let humanScore = 0;
  let computerScore = 0;

  //for(let i = 0; i < 5; i++) {
    
    function playRound (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Tie.")
  } else if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }

  //console.log(`Human: ${humanScore}`);
  //console.log(`Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChioce();

playRound(humanSelection, computerSelection)
//};

  if(humanScore > computerScore) {
  console.log('The Human won!')
} else {
  console.log('The Computer won!')
}
//};

//playGame();