import fs from "fs";

const puzzleInput = fs.readFileSync("Data.txt", "utf8");

const sampleInput = `A Y
B X
C Z`;

const sampleGame = `A Y`;

/* PART 1 */

// A for Rock, B for Paper, and C for Scissors.
// 0 if you lost, 3 if the round was a draw, and 6 if you won
const gameValues = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

// 1 for Rock, 2 for Paper, and 3 for Scissors
const moveValues = { X: 1, Y: 2, Z: 3 };

const getTheScore = (game) => {
  //const moves = game.split(" ");
  //const opponentMove = moves[0];
  //const yourMove = moves[1];
  const [opponentMove, yourMove] = game.split(" ");

  // get the game score (win, lose, or draw)

  //const relevantGameValues = gameValues[opponentMove];
  //const gameScore = relevantGameValues[yourMove];
  const gameScore = gameValues[opponentMove][yourMove];

  //get the move score
  const moveScore = moveValues[yourMove];

  //add them up
  return gameScore + moveScore;
};

//get the scores of all games

const games = puzzleInput.split("\n");
const scores = games.map(getTheScore);

//add the all up
const totalScore = scores.reduce((num, sum) => sum + num, 0);

console.log(totalScore);

/* PART 2 */

// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.

// A for Rock, B for Paper, and C for Scissors.
const requiredMoves = {
  A: { X: "scissors", Y: "rock", Z: "paper" },
  B: { X: "rock", Y: "paper", Z: "scissors" },
  C: { X: "paper", Y: "scissors", Z: "rock" },
};

const actualMoves = { rock: 1, paper: 2, scissors: 3 };

const resultScores = { X: 0, Y: 3, Z: 6 };

const getTheScorePartTwo = (game) => {
  const [opponentMove, gameResult] = game.split(" ");

  const gameScore = resultScores[gameResult];

  const moveScore = actualMoves[requiredMoves[opponentMove][gameResult]];

  return gameScore + moveScore;
};

const scorePartTwo = games.map(getTheScorePartTwo);

const totalScorePartTwo = scorePartTwo.reduce((num, sum) => sum + num, 0);

console.log(totalScorePartTwo);
