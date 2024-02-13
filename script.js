let userChoice;
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        userChoice = choice.getAttribute("id");
        playGame();
    });
});

//generating computer choice
let genCompChoice = () => {
    let compOption = ["rockie", "scissey", "pappey"];
    let compIdx = Math.floor(Math.random() * 3);
    return compOption[compIdx];
};


let playGame = () => {
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    //for draw game
    const drawGame = () => {
        console.log("The Game Draw");
    };

    //for computer win
    const compWin = () => {
        console.log("Computer Won");
    };

    //for user win

    const userWin = () => {
        console.log("User Won");
    }

    if(userChoice === compChoice){
        drawGame();
        document.querySelector("#button").innerText = "Game Draw. Play Again!";
        document.querySelector("#button").style.backgroundColor = "black";
    }

    else if(userChoice === "rockie" && compChoice === "pappey"){
        compWin();
        document.querySelector("#button").innerText = `${compChoice.toUpperCase()} Beats Your ${userChoice.toUpperCase()}`;
        document.querySelector("#button").style.backgroundColor = "red";
        document.querySelector("#computer").innerText = ++compScore;

    }
    else if(userChoice === "scissey" && compChoice === "rockie"){
        compWin();
        document.querySelector("#button").innerText = `${compChoice.toUpperCase()} Beats Your ${userChoice.toUpperCase()}`;
        document.querySelector("#button").style.backgroundColor = "red";
        document.querySelector("#computer").innerText = ++compScore;
    }
    else if(userChoice === "pappey" && compChoice === "scissey"){
        compWin();
        document.querySelector("#button").innerText = `${compChoice.toUpperCase()} Beats Your ${userChoice.toUpperCase()}`;
        document.querySelector("#button").style.backgroundColor = "red";
        document.querySelector("#computer").innerText = ++compScore;
    }
    else {
        userWin();
        document.querySelector("#button").innerText = `Your ${userChoice.toUpperCase()} Beats ${compChoice.toUpperCase()}`;
        document.querySelector("#button").style.backgroundColor = "Green";
        document.querySelector("#player").innerText = ++userScore;
        setTimeout(() => {
            const wonImg = document.querySelector(".hidden");wonImg.classList.remove("hidden")
            setTimeout(() => wonImg.classList.add("hidden"),1000);},0);
    }
};

