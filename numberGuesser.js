const compareGuesses = (humanGuess,pcGuess,secretTarget) => {
  if ((Math.abs(humanGuess - secretTarget)) < (Math.abs(pcGuess - secretTarget))) {
return true;

  } else if ((Math.abs(humanGuess - secretTarget)) > (Math.abs(pcGuess - secretTarget))) {  
return false;

  } else if ((Math.abs(humanGuess - secretTarget)) === (Math.abs(pcGuess - secretTarget))) {
return true;

  }
};
console.log(compareGuesses(9,2,6)); // true

const updateScore = (winner) => {
  if (winner === 'human') {
humanScore += 1;
  } else if (winner === 'computer') {
computerScore += 1;
  }
};

const advanceRound = () => {
currentRoundNumber += 1;
};