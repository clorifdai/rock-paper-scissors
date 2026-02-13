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
  console.log(choice)
}

function getHumanChoice() {
  let choice = prompt('Write “rock,” “paper,” “scissors.” Enter input.');
  console.log(choice)  
}

computer = getComputerChoice()
human = getHumanChoice()