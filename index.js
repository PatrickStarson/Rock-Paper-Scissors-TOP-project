  //CREATE a variable randomNumber that will contain the random number
  
  //IF the randomNuber is between 0 and 3,33 make the function return a string 'Rock'  
  //ELSE IF the randomNuber is between 3.33 and 6,66 make the function return a string 'Paper'
  //ELSE make the function return a string 'Scissors'

const randomNumber = Math.random();
function getComputerChoice() {
  if (randomNumber < 0.33) {
    return 'Rock';
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
    }
};

console.log(randomNumber);
console.log(getComputerChoice());
