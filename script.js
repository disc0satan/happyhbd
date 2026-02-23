let answer = "MADDY";  // Change this to his nickname if you want
let currentRow = 0;
let maxAttempts = 5;

const board = document.getElementById("board");

// Create empty grid (5x5)
for (let i = 0; i < 25; i++) {
  let tile = document.createElement("div");
  tile.classList.add("tile");
  board.appendChild(tile);
}

function checkGuess() {
  let guess = document.getElementById("guessInput").value.toUpperCase();
  let message = document.getElementById("message");

  if (guess.length !== 5) {
    message.innerText = "Enter 5 letters!";
    return;
  }

  if (currentRow >= maxAttempts) {
    return;
  }

  let tiles = document.querySelectorAll(".tile");

  for (let i = 0; i < 5; i++) {
    let tile = tiles[currentRow * 5 + i];
    tile.innerText = guess[i];

    if (guess[i] === answer[i]) {
      tile.classList.add("correct");   // Pink
    } 
    else if (answer.includes(guess[i])) {
      tile.classList.add("present");   // Orange
    } 
    else {
      tile.classList.add("wrong");     // Blue
    }
  }

  if (guess === answer) {
    message.innerText = "YOU GOT IT 💖";
    return;
  }

  currentRow++;

  if (currentRow === maxAttempts) {
    message.innerText = "The word was " + answer + " 💙";
  }

  document.getElementById("guessInput").value = "";
}