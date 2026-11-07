function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("computerImage").src = computerChoice + ".png"; // Displays the computer's choice

    let resultMessage = "";

    if (userChoice === computerChoice) {
        resultMessage = "It's a Draw! 🤝";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You Win! 🎉 (${userChoice} beats ${computerChoice})`;
    } else {
        resultMessage = `You Lose! 😞 (${computerChoice} beats ${userChoice})`;
    }

    document.getElementById("result").textContent = resultMessage;
}