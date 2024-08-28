const buttons = document.querySelectorAll("button");
const resultEL = document.getElementById("result");
const userScore = document.getElementById("user-score");
const machineScore = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {

    button.addEventListener( "click",() =>{
    //    console.log("user-choice", button.id, "computer-choice", computerPlay());
      const result =  playRound(button.id, computerPlay());
       resultEL.textContent = result ;
       userScore.textContent = playerScore;
       machineScore.textContent = computerScore;
    //    console.log(playerScore, computerScore);
        });


    
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection){
        return "it's a tie!";
    }else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') )
    {  
        playerScore++;
        return ("you win!" + playerSelection +  " beats "  +  computerSelection) ;
    }else {

        computerScore++;
        return ("youre a loser!" + computerSelection + " beats "  +  playerSelection) ;

    }
  
    
}