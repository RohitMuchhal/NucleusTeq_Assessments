let currentPlayer = 1;
let player1Current = 0;
let player1Saved = 0;
let player2Current = 0;
let player2Saved = 0;


const player1Name=document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const player1Score = document.getElementById('player1-score');
const player2Score = document.getElementById('player2-score');
const diceNumber = document.getElementById('dice-result');
const winner = document.getElementById('winner');

const rollDiceBtn = document.getElementById('roll-dice');
const saveScoreBtn = document.getElementById('save-score');
const resetGameBtn = document.getElementById('reset-game');

function rollDice() 
{
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-result").textContent = diceRoll;
    document.getElementById("dice-image").src = `/Dice_Game/images/dice${diceRoll}.png`;

    document.getElementById("dice-image").style.transform = "rotate(600deg)";

    setTimeout(() => 
    {
        document.getElementById("dice-image").style.transform = "rotate(180deg)";
    },500);

    return diceRoll;
}

rollDiceBtn.addEventListener('click', () => {
    const diceValue = rollDice();
    if (currentPlayer == 1)
    {
        if (diceValue == 1) 
        {
            player1Current = 0;
            switchTurn();
        } 
        else 
        {
            player1Current += diceValue;
        }
    } 
    else {

        if (diceValue == 1) 
        {
            player2Current = 0;
            switchTurn();
        }
        else 
        {
            player2Current += diceValue;
        }
    }
    updateScores();
});

function updateScores() {
    player1Score.textContent = `Current Score: ${player1Current} Saved Score: ${player1Saved}`;
    player2Score.textContent = `Current Score: ${player2Current} Saved Score: ${player2Saved}`;
}
  
function switchTurn() {
    if (currentPlayer == 1) 
    {
        currentPlayer = 2;
    } 
    else 
    {
        currentPlayer = 1;
    }      
    turnPointerfun(currentPlayer);
}

function turnPointerfun(currentPlayer) {
    const player1Border = document.querySelector("#player1-border");
    const player2Border = document.querySelector("#player2-border");
    
    if (currentPlayer === 1)
    {
        player1Border.style.border = "4px solid black";  
        player2Border.style.border = "none";  
    } 
    else if (currentPlayer === 2)
    {
        player1Border.style.border = "none";  
        player2Border.style.border = "4px solid black";  
    }
}


function checkWinner() {
    const player1Borderw = document.querySelector("#player1-border");
    const player2Borderw = document.querySelector("#player2-border");

    if (player1Saved >= 100) 
    {
        winner.textContent = `${player1Name.value} Wins!`;
        player2Borderw.style.border = "none";
        player1Borderw.style.border="4px solid green";
        resetGameBtn.textContent="Play Again..!";
        disableBtns();
    } 
    else if (player2Saved >= 100) 
    {
        winner.textContent = `${player2Name.value} Wins!`;
        player1Borderw.style.border = "none";
        player2Borderw.style.border="4px solid green";
        resetGameBtn.textContent="Play Again..!";
        disableBtns();
    }
}

saveScoreBtn.addEventListener('click', () => {

    if (currentPlayer == 1) 
    {
        player1Saved += player1Current;
        player1Current = 0;
    } 
    else
    {
        player2Saved += player2Current;
        player2Current = 0;
    }
    updateScores();
    checkWinner();
    if(!winner.textContent)
    {
        switchTurn();
    }
});


function disableBtns() 
{
    rollDiceBtn.disabled = true;
    saveScoreBtn.disabled = true;
}

function resetGame()
{
    const player1Borderw = document.querySelector("#player1-border");
    const player2Borderw = document.querySelector("#player2-border");
    currentPlayer = 1;
    player1Current = 0;
    player1Saved = 0;
    player2Current = 0;
    player2Saved = 0;
    winner.textContent = '';
    diceNumber.textContent = '-';
    resetGameBtn.textContent="Reset Game";
    player1Borderw.style.border="none";
    player2Borderw.style.border="none";
    updateScores();
    rollDiceBtn.disabled = false;
    saveScoreBtn.disabled = false;
}


resetGameBtn.addEventListener('click', resetGame);
