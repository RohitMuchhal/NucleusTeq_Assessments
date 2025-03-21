document.addEventListener("DOMContentLoaded", () => {
    let currentPlayer = 1;
    let currentScore = 0;
    let scores = { 1: 0, 2: 0 };
    const winningScore = 100;
    const diceImg = document.getElementById("dice");
    const rollBtn = document.getElementById("roll-dice");
    const saveBtn = document.getElementById("save-score");
    const resetBtn = document.getElementById("reset-game");
    const winnerText = document.getElementById("winner");
    let gameStarted = false;

   
    document.getElementById("rules-btn").addEventListener("click", () => 
    {
        document.getElementById("rules-overlay").style.display = "flex";
    });
    document.getElementById("close-rules").addEventListener("click", () => 
    {
        document.getElementById("rules-overlay").style.display = "none";
    });
   

    const updateScores = () => {
        document.getElementById(`player${currentPlayer}-current`).textContent = currentScore;
        document.getElementById(`player1-saved`).textContent = scores[1];
        document.getElementById(`player2-saved`).textContent = scores[2];
    };

    const switchTurn = () => {
        currentScore = 0;
        updateScores();
        document.getElementById(`player${currentPlayer}`).classList.remove("active");
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById(`player${currentPlayer}`).classList.add("active");
    };

    rollBtn.addEventListener("click", () => {
        if (!gameStarted) {
            document.getElementById("player1-name").setAttribute("readonly", true);
            document.getElementById("player2-name").setAttribute("readonly", true);
            gameStarted = true;
        }
    
        diceImg.classList.add("rolling");
        setTimeout(() => {
            let diceRoll = Math.floor(Math.random() * 6) + 1;
            diceImg.src = `images/dice${diceRoll}.png`; // Removed leading "/"
            diceImg.classList.remove("rolling");
            
            if (diceRoll === 1) {
                switchTurn();
            } else {
                currentScore += diceRoll;
                updateScores();
            }
        }, 200);
    });
    

    saveBtn.addEventListener("click", () => {
        scores[currentPlayer] += currentScore;
        if (scores[currentPlayer] >= winningScore) {
            winnerText.textContent = `${document.getElementById(`player${currentPlayer}-name`).value} Wins! 🎉`;
            rollBtn.disabled = true;
            saveBtn.disabled = true;
        } else {
            switchTurn();
        }
    });


    resetBtn.addEventListener("click", () => {
        scores = { 1: 0, 2: 0 };
        currentScore = 0;
        currentPlayer = 1;
        winnerText.textContent = "";
        rollBtn.disabled = false;
        saveBtn.disabled = false;
        gameStarted = false;
    
        document.getElementById("player1-name").removeAttribute("readonly");
        document.getElementById("player2-name").removeAttribute("readonly");
    
        updateScores();
        diceImg.src = "images/dice1.png"; 
        
        document.getElementById("player1").classList.add("active");
        document.getElementById("player2").classList.remove("active");
    });
    

    document.getElementById("player1").classList.add("active");
    updateScores();
});
