console.log('Welcome to Calebs Rock/Paper/Scissors Game!');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
    return userInput;
  } else {
    console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.")
  }
};

function getComputerChoice () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
    default:
    return 'Error: getComputerChoice function did not get a random number between 0 & 2.'
  }
};

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Game ended in a draw.';
  }

  if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      return 'Computer Won! (paper beats rock)'
    } else {
      return 'You Won! (rock beats scissors)'
    }
  }

  if (userChoice == 'paper') {
    if (computerChoice == 'scissors') {
      return 'Computer Won! (scissors beats paper)'
    } else {
      return 'You Won! (paper beats rock)'
    }
  }

  if (userChoice == 'scissors') {
    if (computerChoice == 'rock') {
      return 'Computer Won! (rock beats scissors)'
    } else {
      return 'You Won! (scissors beats paper)'
    }
  }

  if (userChoice == 'bomb') {
    return 'You Won! (bomb trumps everything; you sly dog! ;)'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
