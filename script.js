
setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);

const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");
const btnNext = document.querySelector(".next-btn");
const btnRules2 = document.querySelector(".rules-btn2");
const btnClose2 = document.querySelector(".close-btn2");
const modalRules2 = document.querySelector(".modal2");
const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissors",
  },
];
const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");
const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");
const playAgainBtn = document.querySelector(".play-again");
const CompScore = document.querySelector(".Comp_scorenum");
const YourScore = document.querySelector(".your_scorenum");
const playAgainBtn2 = document.querySelector(".play-again2");
let score1 = 0;
let score2 = 0;
btnNext.classList.add("hidden");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}
function displayResults(results) {
  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
        <div class="choice ${results[idx].name}">
          <img src="./images/icon-${results[idx].name}.svg" />
        </div>
      `;
    }, idx * 1000);
  })
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
};
function displayWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userWins) {
      resultText.innerText = "YOU WIN against PC";
      resultDivs[0].classList.toggle("winner");
      btnNext.classList.remove("hidden");
      keepScore(1);
    } else if (aiWins) {
      resultText.innerText = "YOU LOST against PC";
      resultDivs[1].classList.toggle("winner");
      btnNext.classList.add("hidden");
      keepScore2(1);
      keepScore(-1);
    } else {
      resultText.innerText = "Tie Up";
      btnNext.classList.add("hidden");
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
    
  }, 1000);
}
function isWinner(results) {
  return results[0].beats === results[1].name;
}
function keepScore(point) {
  score1 += point;
  YourScore.innerText = score1;

}
function keepScore2(point2) {
  score2 += point2;
  CompScore.innerText = score2;

}

playAgainBtn.addEventListener("click", () => {
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");


  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  resultText.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
});

btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });

nextButton.addEventListener('click', () => {
    window.location.href = 'newpage.html';
  });
playAgainBtn2.addEventListener("click", () => {
  window.location.href = "index.html";
});