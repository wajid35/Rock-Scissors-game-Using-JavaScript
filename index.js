const buttons =  document.querySelectorAll("button");
 
const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score")


const computerScoreEl = document.getElementById("computer-score")

let playScore =0;
let computerScore = 0;



buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    });
});

function computerPlay(){
    const choice = ["rock ", "paper ", "scissors "];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];

}

function playRound(playSelection, computerSelection){
    if(playSelection === computerSelection){
        return "it is a tie!"
    } else if(
        (playSelection === 'rock' && computerSelection === 'scissors ' ) || (playSelection === 'paper ' && computerSelection === 'rock' ) || (playSelection === 'scissors' && computerSelection=== 'paper' )
    ) {
        playScore++;
        playerScoreEl.textContent = playScore;
        return "You win! " + playSelection + "beats " + computerSelection;
    } else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "you lose! " + computerSelection + "beats " +  playSelection;
    }

}