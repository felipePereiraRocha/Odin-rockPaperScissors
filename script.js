function playRound(){
    //computer choice section//
    function getComputerChoice(){
        let options = ["ROCK", "PAPER", "SCISSORS"];
        let choice = Math.floor(Math.random() * 3);
        let pcChoiceFunction = options[choice];
        return pcChoiceFunction;
    }
    let computerSelection = getComputerChoice();
    //player choice section//
    var playerSelection = prompt("");
    var playerSelection = playerSelection.toUpperCase();
    //THE GAME (you lost)//
    if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
        console.log("You can't perform that move use (Rock, Paper or Scissors)");
    } else if (playerSelection == computerSelection){
        console.log("It's a tie!");
    } else if (playerSelection == "SCISSORS", computerSelection == "PAPER"){
        console.log("You WIN Scissors beats Paper");
    } else if (playerSelection == "ROCK", computerSelection == "SCISSORS"){
        console.log("You WIN ROCK beats Scissors");
    } else if (computerSelection == "PAPER", playerSelection == "ROCK"){
        console.log("You LOSE Paper beats Rock");
    } else if (computerSelection == "SCISSORS", playerSelection == "PAPER"){
        console.log("You LOSE Scissors beats Paper");
    } else if (computerSelection == "ROCK", playerSelection == "SCISSORS"){
        console.log("You LOSE ROCK beats Scissors");
    } else if (playerSelection == "PAPER", computerSelection == "ROCK"){
        console.log("You WIN Paper beats Rock");
    }
}


function playGame(){
    for (let i = 0; i < 6; i++ ){
        playRound();
    }
}
playGame();