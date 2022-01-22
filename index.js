const nextGame = document.querySelector(".next-game");
const RollDice = document.querySelector(".rolldice");
const Hold = document.querySelector(".hold");
const image = document.querySelector(".image");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
//Roll Dice
const scores = [0, 0];
let score = 0;
let ActivePlayer = 0;
let playing = true;
image.classList.add("hidden");
//image.classList.add("hidden");
const switchPlayer = () => {
  document.getElementById(`current--${ActivePlayer}`).textContent = 0;
  score = 0;
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
RollDice.addEventListener("click", () => {
  if (playing) {
    const DiceRolled = Number(Math.trunc(Math.random() * 6 + 1));
    console.log(DiceRolled);
    image.classList.remove("hidden");
    image.src = `${DiceRolled}.png`;

    if (DiceRolled !== 1) {
      score = score + DiceRolled;
      console.log(score);
      document.getElementById(`current--${ActivePlayer}`).textContent = score;
    } else {
      switchPlayer();
    }
  }
});
// Hold Button
Hold.addEventListener("click", () => {
  if (playing) {
    scores[ActivePlayer] = score + scores[ActivePlayer];
    document.getElementById(`score--${ActivePlayer}`).textContent =
      scores[ActivePlayer];

    if (scores[ActivePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${ActivePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${ActivePlayer}`)
        .classList.add("player--active");
      image.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".next-game").addEventListener("click", () => {
  location.reload();
});
