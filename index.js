  //CREATE a variable randomNumber that will contain the random number
  
  //CREATE a function getComputerChoice
  //IF the randomNuber is between 0 and 3,33 make the function return a string 'Rock'  
  //ELSE IF the randomNuber is between 3.33 and 6,66 make the function return a string 'Paper'
  //ELSE make the function return a string 'Scissors'

const randomNumber = Math.random();

function getComputerChoice() {
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
//CREATE a varialble humanChoice an assign it a prompt where the player can input he's/she's choice.
//RETURN whatever the player has chosen.
function getHumanChoice () {
  const humanChoice = prompt('Choose your move');
  return humanChoice
  console.log(humanChoice())
}

console.log(getHumanChoice())