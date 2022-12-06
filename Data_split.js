const testString = `13-53,17-82
32-32,32-42
85-85,8-86
78-80,79-91
60-71,59-70`

console.log(testString.split("\n")
    .map(line => line.split(/\D/).map(Number)))


/********************************************************************/
const input = 
  `            [J]             [B] [W]
            [T]     [W] [F] [R] [Z]
        [Q] [M]     [J] [R] [W] [H]
    [F] [L] [P]     [R] [N] [Z] [G]
[F] [M] [S] [Q]     [M] [P] [S] [C]
[L] [V] [R] [V] [W] [P] [C] [P] [J]
[M] [Z] [V] [S] [S] [V] [Q] [H] [M]
[W] [B] [H] [F] [L] [F] [J] [V] [B]
 1   2   3   4   5   6   7   8   9 `

const inputToArray = input.replace(/    /g, " ").replace(/[\[\]']+/g, "").split("\n").map(line => line.split(" ")).splice(0, 8);;

const transposeArray = (arr) => {
  let cargoArray = [];
  for (let i = 0; i < 9; i++) {
    let stackArray = [];
    let stackArrayString = ""
    for (let j = 7; j > 0; j--) {
      stackArrayString += arr[j][i];
      stackArrayString.trimEnd();
        }
    cargoArray.push(stackArrayString.split(""));
  }
  return cargoArray;
}

console.log(transposeArray(inputToArray));
