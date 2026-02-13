// index.html

console.log("Hello world!")

function getComputerChoice() {
  let choice_num = Math.floor(Math.random() * 3);
  let choice = null;
  if (choice_num === 0){
    choice = "rock";
  } else if (choice_num === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
  console.log(choice);
}

function getHumanChoice() {
  let choice = prompt('Write “rock,” “paper,” “scissors.” Enter input.');
  return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log("Computer: ", computerChoice);
  console.log("Human: ", humanChoice);

  // Paper
  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("Human won");
    humanScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("Draw");
    computerScore += 0;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer won");
    computerScore += 1;
  } else /* Scissors */  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer won");
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("Human won");
    humanScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("Draw");
    computerScore += 0;
  } else /* Rock*/ if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("Draw");
    computerScore += 0;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer won");
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("Human won");
    humanScore += 1;
  } else null
  
}

let counts = 1;

// Loop another function 4 times
// Calling a function within a function
function playGame () {
  while (counts < 5 ) {
    counts++;
    console.log("Round", counts);
    const human = getHumanChoice();
    const computer = getComputerChoice();
    playRound(human, computer);

  }
}

// Calling functions
const computer = getComputerChoice()
const human = getHumanChoice()
const rockPaperScissors = playRound(human, computer) 
playGame(rockPaperScissors)
console.log("")
console.log("Computer score: ", computerScore);
console.log("Human score: ", humanScore)
