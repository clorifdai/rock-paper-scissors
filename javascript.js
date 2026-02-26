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

// UI
// Human choice
const  btnRock =  document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
let playerSelection;

btnRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
})

btnPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
})

btnScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  // alert("berhasil")
})

// function getHumanChoice() {
//   let choice = prompt('Write “rock,” “paper,” “scissors.” Enter input.');
//   return choice;
// }

let computerScore = 0;
let humanScore = 0;

function playRound (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let winner;
  let versus;
  console.log("Computer: ", computerChoice);
  console.log("Human: ", humanChoice);

  // Paper
  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("Human won!");
    humanScore += 1;
    winner = "Human won!";

  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("Draw");
    computerScore += 0;
    winner = "Draw!";

  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer won");
    computerScore += 1;
    winner = "Computer won!";

  } else /* Scissors */  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer won");
    computerScore += 1;
    winner = "Computer won!";

  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("Human won");
    humanScore += 1;
    winner = "Human won!";

  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("Draw");
    computerScore += 0;
    winner = "Draw!";

  } else /* Rock*/ if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("Draw");
    computerScore += 0;
    winner = "Draw!";

  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer won");
    computerScore += 1;
    winner = "Computer won!";

  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("Human won");
    humanScore += 1;
    winner = "Human won!";

  } else null

  let textWinner = `${humanChoice.toUpperCase()}(Human) VS ${computerChoice.toUpperCase()}(Computer) ${winner}`
    const newElement = document.createElement("div");
    newContent = document.createTextNode(textWinner);
    newElement.appendChild(newContent);
    newElement.classList.add("paragraph");
    document.querySelector("body").appendChild(newElement);


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

