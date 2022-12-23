const testString = `13-53,17-82
32-32,32-42
85-85,8-86
78-80,79-91
60-71,59-70`

console.log(testString.split("\n")
    .map(line => line.split(/\D/).map(Number)))


/********************************************************************/
const transpose = (arr) => {
  let newArray = []
  for (let i = 0; i < arr[0].length; i++) {
    let itemArray = []
    for (let j = 0; j < arr.length; j++) {
      itemArray.push(arr[j][i])
    }
    newArray.push(itemArray);
  }
  return newArray
}

// OR

const transposeOutput = array[0].map((_, colIndex) => array.map(row => row[colIndex]));

