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

console.log(getComputerChoice());




//CREATE a function getHumanChoice.
//RETURN whatever the player has chosen and typed in the prompt.
function getHumanChoice () {
  return prompt('Choose your move').toLowerCase();
}

console.log(getHumanChoice())

//DECLAIR variable for humanScore in global scope and give it a value of 0. This will be used to keep score for the human.
//DECLAIR variable for computerScore in global scope and give it a value of 0. This will be used to keep score for the human.

//CREATE a function named playRound. It will compare players and computers choices and determin who winns.
//

function playRound (humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {


}
