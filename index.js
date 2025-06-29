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