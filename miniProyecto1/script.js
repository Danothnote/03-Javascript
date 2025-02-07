const showbtnPlayAgain = () => {
    btnPlayAgain.classList.remove("hidden");
}

const hiddenbtnPlayAgain = () => {
    btnPlayAgain.classList.add("hidden");
}

const selectRandomImage = () => {
    document.querySelector(".countQuestion").innerHTML = `Question number ${counter + 1}`;
    const index = Math.floor(Math.random() * 3);
    document.getElementById("imgToGuess").src = arr[index];
    return index;
}

const arr = ["assets/hat.png", "assets/boat.png", "assets/short.webp"];
const arrWord = ["hat", "boat", "short"];
let counter = 0;
let i = selectRandomImage();
let score = 0;
let highScore = 0;
const btnPlayAgain = document.querySelector('.playAgain');

document.body.classList.add('backGroundBody');

const gameOver = () => {
    if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = `🍭 high score ${score}`;
    }

    document.body.classList.remove('backGroundBody');
    showbtnPlayAgain();
}

const play = () => {
    console.log(counter);
    counter++;
    if (counter <= 3) {
        const word = arrWord[i];
        const message = document.querySelector(".message");
        const letter = document.getElementById("input").value.toLowerCase();
        if (!letter) {
            message.textContent = "No Letter 🥵"
            score -= 2;
        } else if (letter === word[0]) {
            message.textContent = "Correct Answer 🤙"
            score += 5;
        } else if (letter !== word[0]) {
            message.textContent = "Not Correct Answer 👎"
            score -= 3;
        }
        document.getElementById("input").value = "";
        document.querySelector(".score").textContent = score;
    }
    if (counter < 3) {
        i = selectRandomImage();
    }
    if (counter > 2) {
        gameOver();
    }
}

const reset = () => {
    document.body.classList.add('backGroundBody');
    counter = 0;
    i = selectRandomImage();
    score = 0;
    document.getElementById("input").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "correct number";
    hiddenbtnPlayAgain();
}

document.querySelector(".play").addEventListener('click', play);
document.querySelector(".playAgain").addEventListener('click', reset);
