let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    msg.innerText = "Match was draw, Play Again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Your ${userchoice} beats computer's ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer's ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    const compchoice = genCompChoice();
    
    if(userchoice === compchoice) {
        drawGame();
    } else {
        let userWin;
        if(userchoice === "rock") {
            userWin = compchoice === "scissors";
        } else if (userchoice === "paper") {
            userWin = compchoice === "rock";
        } else { // scissors
            userWin = compchoice === "paper";
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});