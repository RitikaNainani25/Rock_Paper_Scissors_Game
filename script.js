let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawgame = () => {
    //console.log("Game was draw.");
    msg.innerText = "Game was Draw! Play again.";
    msg.style.backgroundColor = "#1A2130";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You Lose");
        msg.innerText = `You Lost. Computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //console.log(`user choice = ${userChoice}`);
    //Generate computer choice
    const compChoice = generateCompChoice();
    //console.log(`computer choice = ${compChoice}`);

    if (userChoice === compChoice) {
        //Draw game
        drawgame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            if(compChoice === "paper"){
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            //rock, scissors
            if(compChoice === "scissors"){
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else if (userChoice === "scissors"){
            //rock , paper
            if(compChoice === "rock"){
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log(`choice was clicked ${userChoice}`);
        playGame(userChoice);
    })
})