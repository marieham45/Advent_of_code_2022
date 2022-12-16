import fs from "fs";

/*const summonPuzzleInput = async () => {
  const response = await fetch("https://adventofcode.com/2022/day/1/input");
  const responseText = await response.text();
  return responseText;
};

const puzzleInput = await summonPuzzleInput();*/

const puzzleInput = fs.readFileSync("Data.txt", "utf8");

const sampleInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const sumReducer = (num, sum) => sum + num;

const getSumOfGroup = (group) =>
  group.split("\n").map(Number).reduce(sumReducer, 0);

const numberGroups = puzzleInput.split("\n\n");

const groupSums = numberGroups.map(getSumOfGroup);

/* PART 1 */

const maxSum = Math.max(...groupSums);

console.log(maxSum);

/* PART 2 */

const sortedSums = [...groupSums].sort((num1, num2) => num2 - num1);

const top3Sums = sortedSums.slice(0, 3);

const sumOfTop3Sums = top3Sums.reduce(sumReducer, 0);

console.log(sumOfTop3Sums);
