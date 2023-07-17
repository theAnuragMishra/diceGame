function fn() {
    const randomNumber1 = Math.floor((Math.random() * 6) + 1);
    const randomNumber2 = Math.floor((Math.random() * 6) + 1);
    let player1Image = document.getElementsByClassName("img1")[0];
    let player2Image = document.getElementsByClassName("img2")[0];
    if (randomNumber1 === 1) {
        player1Image.setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        player1Image.setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        player1Image.setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        player1Image.setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        player1Image.setAttribute("src", "images/dice5.png");
    } else {
        player1Image.setAttribute("src", "images/dice6.png");
    }

    if (randomNumber2 === 1) {
        player2Image.setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        player2Image.setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        player2Image.setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        player2Image.setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        player2Image.setAttribute("src", "images/dice5.png");
    } else {
        player2Image.setAttribute("src", "images/dice6.png");
    }

    let winnerTitle = document.getElementsByTagName("h1")[0];

    if (randomNumber1 > randomNumber2) {
        winnerTitle.innerHTML = "Player 1 wins";
    } else if (randomNumber1 < randomNumber2) {
        winnerTitle.innerHTML = "Player 2 wins";
    } else {
        winnerTitle.innerHTML = "Draw!"
    }
}