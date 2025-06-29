  let humanScore = 0;
  let computerScore = 0;
  
  //CREATE a function getComputerChoice
  //DECLAIR a variable randomNumber and assign it Math.random() method.
  //IF the randomNuber is between 0 and 3,33 make the function return a string 'Rock'  
  //ELSE IF the randomNuber is between 3.33 and 6,66 make the function return a string 'Paper'
  //ELSE make the function return a string 'Scissors'

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return 'rock';
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return 'paper';
  } else {
    return 'scissors';
    }
   
};


//CREATE a function getHumanChoice.
//RETURN whatever the player has chosen and typed in the prompt.
function getHumanChoice () {
  return prompt('Choose your move').toLowerCase();
}

//DECLAIR variable for humanScore in global scope and give it a value of 0. This will be used to keep score for the human.
//DECLAIR variable for computerScore in global scope and give it a value of 0. This will be used to keep score for the human.

//CREATE a function named playRound. It will compare players and computers choices and determin who winns.
//

function playRound (humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'rock') {
    console.log('You chose Rock and computer chose Rock.')
    console.log('Rock cannot beat another Rock. It is a Tie!')
  } else if(humanChoice ==='rock' && computerChoice === 'paper') {
    console.log('You chose Rock and computer chose Paper.')
    console.log('Paper beats Rock. You loose!');
    computerScore ++ 
  } else if(humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You chose Rock and computer chose Scissors.')
    console.log('Rock beats Scissors. You win!')
    humanScore ++
  };

  if (humanChoice === 'paper' && computerChoice === 'paper') {
    console.log('You chose Paper and computer chose Paper.')
    console.log('Paper cannot beat another paper. It is a Tie!')
  } else if(humanChoice ==='paper' && computerChoice === 'rock') {
    console.log('You chose Paper and computer chose Rock.')
    console.log('Paper beats Rock. You win!')
    humanScore ++
  } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You chose Paper and computer chose Scissors.')
    console.log('Scissors beats Paper. You loose!')
    computerScore ++
  };

  if (humanChoice === 'scissors' && computerChoice === 'scissors') {
    console.log('You chose Scissors and computer chose Scissors.')
    console.log('Scissors cannot beat another scissors. It is a Tie!')
  } else if(humanChoice ==='scissors' && computerChoice === 'paper') {
    console.log('You chose Scissors and computer chose Paper.')
    console.log('Scossors beats paper. You win!')
    humanScore ++
  } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You chose Scissors and computer chose Rockg.')
    console.log('Rock beats scissors. You loose!')
    computerScore ++
  };

  console.log(`Human: ${humanScore} Computer: ${computerScore}`);
};

//DECLAIR variables for what moves human and computer select and asign getHumanChoice and getComputerChoice to them.
//CALL playRound function with variables above as arguments.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);