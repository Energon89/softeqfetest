let _htmlElements,
  guessCount = 1,
  randomNumber = Math.floor(Math.random() * 1000000) + 1;

console.log("Random number is", randomNumber);

class Test8 {
  constructor() {
    this.initDomElements();
    _htmlElements.guessSubmit.addEventListener("click", () => {
      const userGuess = _htmlElements.guessField.value;
      if (!this.isNumberInt(userGuess)) {
        alert("Enter an integer from 1 to 1,000,000!");
        return;
      }
      if (guessCount === 1) {
        _htmlElements.guesses.textContent = "Previous guesses: ";
      }
      _htmlElements.guesses.textContent += userGuess + " ";
      const value = this.verify(userGuess);
      if (value === 0) {
        _htmlElements.lastResult.textContent =
          "Congratulations! You got it right!";
        _htmlElements.lastResult.style.backgroundColor = "green";
        _htmlElements.guessCount.textContent = `Number of attempts is: ${guessCount}!`;
        _htmlElements.smallOrBig.textContent = "";
        this.setGameOver();
      } else if (guessCount === 50) {
        _htmlElements.lastResult.textContent = "!!!GAME OVER!!!";
        _htmlElements.guessCount.textContent = `Number of attempts is: ${guessCount}!`;
        _htmlElements.smallOrBig.textContent = "";
        this.setGameOver();
      } else {
        _htmlElements.lastResult.textContent = "Wrong!";
        _htmlElements.lastResult.style.backgroundColor = "red";
        _htmlElements.guessCount.textContent = `Number of attempts is: ${guessCount}!`;
        if (value === -1) {
          _htmlElements.smallOrBig.textContent = "Last guess was too small!";
        } else if (value === 1) {
          _htmlElements.smallOrBig.textContent = "Last guess was too big!";
        }
      }
      guessCount++;
    });
  }

  initDomElements() {
    _htmlElements = {
      guessSubmit: document.querySelector(".guessSubmit"),
      guessField: document.querySelector(".guessField"),
      guesses: document.querySelector(".guesses"),
      lastResult: document.querySelector(".lastResult"),
      smallOrBig: document.querySelector(".smallOrBig"),
      guessCount: document.querySelector(".guessCount")
    };
  }

  verify(integer) {
    if (integer == randomNumber) {
      return 0;
    } else if (integer < randomNumber) {
      return -1;
    } else return 1;
  }

  setGameOver() {
    _htmlElements.guessField.disabled = true;
    _htmlElements.guessSubmit.disabled = true;
    _htmlElements.resetButton = document.createElement("button");
    _htmlElements.resetButton.textContent = "Start new game";
    document.body.appendChild(_htmlElements.resetButton);
    _htmlElements.resetButton.addEventListener("click", this.resetGame);
  }

  resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = "";
    }

    _htmlElements.resetButton.parentNode.removeChild(_htmlElements.resetButton);
    _htmlElements.guessField.disabled = false;
    _htmlElements.guessSubmit.disabled = false;
    _htmlElements.guessField.value = "";
    _htmlElements.guessField.focus();
    _htmlElements.lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 1000000) + 1;
    console.log("New random number is", randomNumber);
  }

  isNumberInt(value) {
    return (
      value != null &&
      value != undefined &&
      !isNaN(value) &&
      value.trim() !== "" &&
      Number.isInteger(parseFloat(value))
    );
  }
}

const _test8 = new Test8();
