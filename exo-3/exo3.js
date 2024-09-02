// you can write js here
console.log('exo-3');

// playerInput = prompt("Your choice (rock, paper, scissors)?");

function getPlayerChoice(playerInput) {
    // playerInput = playerInput.toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors" || playerInput === "bomb") {
        return playerInput;
    } else {
        console.log("wrong input");
    }
}

function getComputerChoice() {
    let computerInput;
    const randomInput = Math.floor(Math.random() * 3);
    if (randomInput === 0) {
        computerInput = "rock";
    }
    if (randomInput === 1) {
        computerInput = "paper";
    }
    if (randomInput === 2) {
        computerInput = "scissors";
    }
    return computerInput;
}

function findWinner(playerInput, computerInput) {
    if (playerInput === computerInput) {
        console.log('Tied');
    } else if (playerInput === "rock") {
        if (computerInput === "scissors") {
            console.log('Won');
        } else {
            console.log('Lost');
        }
    } else if (playerInput === "paper") {
        if (computerInput === "rock") {
            console.log('Won');
        } else {
            console.log('Lost');
        }
    } else if (playerInput === "scissors") {
        if (computerInput === "paper") {
            console.log('Won');
        } else {
            console.log('Lost');
        }
    } else if (playerInput === "bomb") {
        console.log('Won');
    }
}

function playGame () {
    const uChoice = getPlayerChoice("bomb");
    console.log('Player chose : ' + uChoice + '!!!');
    const computerChoice = getComputerChoice();
    console.log("computer is chosing... " + computerChoice + "!!!");
    findWinner(uChoice, computerChoice);
}

playGame();

