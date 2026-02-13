// index.html

console.log("Hello world!")

// Membuat fungsi secara random mengembalikan batu, kertas dan gunting
// buat fungsi `getComputerChoice`
// Panduan 
// batu = 0
// kertas = 1
// gunting = 2 
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
  // choice = "rock";
  return choice;
  console.log(choice);
}

function getHumanChoice() {
  let choice = prompt('Write “rock,” “paper,” “scissors.” Enter input.');
  // ubah ke huruf kecil
  return choice;
  console.log(choice)  
}

let computerScore = 0;
let humanScore = 0;

function playRound (computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase()
  console.log(computerChoice, humanChoice)
  // Paper
  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("Human menang");
    humanScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("Imbang");
    computerScore += 0;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer menang");
    computerScore += 1;
  } else /* Scissors */  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer menang");
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("Human menang");
    humanScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("Imbang");
    computerScore += 0;
  } else /* Rock*/ if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("imbang");
    computerScore += 0;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer menang");
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("Human menang");
    humanScore += 1;
  } else null
  
  console.log("Computer score: ", computerScore);
  console.log("Human score: ", humanScore)

}


const computer = getComputerChoice()
const human = getHumanChoice()
playRound(computer, human) 