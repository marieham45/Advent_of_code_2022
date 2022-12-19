import fs from "fs";

const puzzleInput = fs.readFileSync("Data.txt", "utf8");

const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const rucksacks = puzzleInput.split("\n");

/* PART 1 */

// find the common item for each rucksack

const findCommonItem = (rucksack) => {
  // divide the string into two halves
  const halfIndex = rucksack.length / 2;

  const [firstHalf, secondHalf] = [
    rucksack.slice(0, halfIndex),
    rucksack.slice(halfIndex),
  ];

  // .filter returns an array, .find returns the first item if the condition is true
  const commonItem = [...secondHalf].find((item) => firstHalf.includes(item));

  return commonItem;
};

// find the priority of each item

const getItemPriority = (item) => {
  return item.charCodeAt() - (/[a-z]/.test(item) ? 96 : 38);
};

// add the all up

const totalPriority = rucksacks
  .map(findCommonItem)
  .map(getItemPriority)
  .reduce((num, sum) => sum + num, 0);

console.log(totalPriority);

/* PART 2 */

// divide the rucksacks into groups of 3

// recursive function (calls itself)
const getGroupsOf3 = (arr) =>
  arr.length ? [arr.slice(0, 3), ...getGroupsOf3(arr.slice(3))] : [];

// find the common item for each group of 3

const findCommonItemInGroupOf3 = (group) => {
  const [sack1, sack2, sack3] = [group[0], group[1], group[2]];

  const commonItem = [...sack3].find(
    (item) => sack1.includes(item) && sack2.includes(item)
  );

  return commonItem;
};

// find the priorities and add the all up

const totalPriorityOfIdentifiers = getGroupsOf3(rucksacks)
  .map(findCommonItemInGroupOf3)
  .map(getItemPriority)
  .reduce((num, sum) => sum + num, 0);

console.log(totalPriorityOfIdentifiers);
