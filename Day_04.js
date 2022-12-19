import fs from "fs";

const puzzleInput = fs.readFileSync("Data.txt", "utf8");

const sampleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const cleaningPairs = puzzleInput.split("\n");

/* PART 1 */

const getRanges = (pair) => {
  const [elf1Start, elf1End, elf2Start, elf2End] = pair.split(/\D/).map(Number);

  if (
    (elf1Start >= elf2Start && elf1End <= elf2End) ||
    (elf2Start >= elf1Start && elf2End <= elf1End)
  ) {
  }
  return [elf1Start, elf1End, elf2Start, elf2End];
};

const checkFullOverlap = ([elf1Start, elf1End, elf2Start, elf2End]) =>
  (elf1Start >= elf2Start && elf1End <= elf2End) ||
  (elf2Start >= elf1Start && elf2End <= elf1End);

const fullyOverlapping = cleaningPairs.map(getRanges).filter(checkFullOverlap);

console.log(fullyOverlapping.length);

/* PART 2 */

const checkAnyOverlap = ([elf1Start, elf1End, elf2Start, elf2End]) =>
  elf1End >= elf2Start && elf2End >= elf1Start;

const overlapping = cleaningPairs.map(getRanges).filter(checkAnyOverlap);

console.log(overlapping.length);
