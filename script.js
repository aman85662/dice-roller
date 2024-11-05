const diceImg = document.getElementById("dice");
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber == 1) {
        diceImg.src = "1.png";
    }
    else if (randomNumber == 2) {
        diceImg.src = "2.png";
    }
    else if (randomNumber == 3) {
        diceImg.src = "3.png";
    }
    else if (randomNumber == 4) {
        diceImg.src = "4.png";
    }
    else if (randomNumber == 5) {
        diceImg.src = "5.png";
    }
    else {
        diceImg.src = "6.png";
    }

}
