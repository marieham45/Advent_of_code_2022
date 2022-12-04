const testString = `13-53,17-82
32-32,32-42
85-85,8-86
78-80,79-91
60-71,59-70`

console.log(testString.split("\n")
    .map(line => line.split(/\D/).map(Number)))
