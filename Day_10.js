const input = `addx 2
addx 15
addx -11
addx 6
noop
noop
noop
addx -1
addx 5
addx -1
addx 5
noop
noop
noop
noop
noop
addx 7
addx -1
addx 3
addx 1
addx 5
addx 1
noop
addx -38
noop
addx 1
addx 6
addx 3
noop
addx -8
noop
addx 13
addx 2
addx 3
addx -2
addx 2
noop
addx 3
addx 9
addx -2
addx 2
addx -10
addx 11
addx 2
addx -14
addx -21
addx 2
noop
addx 5
addx 29
addx -2
noop
addx -19
noop
addx 2
addx 11
addx -10
addx 2
addx 5
addx -9
noop
addx 14
addx 2
addx 3
addx -2
addx 3
addx 1
noop
addx -37
noop
addx 13
addx -8
noop
noop
noop
noop
addx 13
addx -5
addx 3
addx 3
addx 3
noop
noop
noop
noop
noop
noop
noop
addx 6
addx 3
addx 1
addx 5
addx -15
addx 5
addx -27
addx 30
addx -23
addx 33
addx -32
addx 2
addx 5
addx 2
addx -16
addx 17
addx 2
addx -10
addx 17
addx 10
addx -9
addx 2
addx 2
addx 5
addx -29
addx -8
noop
noop
noop
addx 19
addx -11
addx -1
addx 6
noop
noop
addx -1
addx 3
noop
addx 3
addx 2
addx -3
addx 11
addx -1
addx 5
addx -2
addx 5
addx 2
noop
noop
addx 1
noop
noop`

const inputToArray = input.split("\n").map(item => item.split(" "))

const cycleCount = (arr) => {
    let cycle = 0;
    let x = 1;
    let arrayOfCycleLogs = []
    arr.forEach(item => {
        let cycleLog1 = []
        let cycleLog2 = []
        let cycleLog3 = []

        if (item[0] === "addx") {
            cycle += 1
            cycleLog1.push(cycle, x)
            arrayOfCycleLogs.push(cycleLog1)
            cycle += 1
            cycleLog2.push(cycle, x)
            arrayOfCycleLogs.push(cycleLog2)
            x += parseInt(item[1])
        }
        else {
            cycle +=1
            cycleLog3.push(cycle, x)
            arrayOfCycleLogs.push(cycleLog3)
        }
        })
    return arrayOfCycleLogs
}

const signalStrength = (arr) => {
    let oneSignal = 0
    let sumOfSignals = 0
    for (let i = 19; i < arr.length; i = i + 40) {
        oneSignal = (i+1) * arr[i][1]
        sumOfSignals += oneSignal
   }
    return sumOfSignals
}

const spriteLog = (arr) => {
    let superLog = ""
    
    for (let n = 0; n < arr.length; n = n + 40) {
        let log = ""

    for (let i = n; i < n + 40; i++) {                    

        if (Math.abs((arr[i][0] - n  -1) - arr[i][1]) <= 1) {
            log += "#"
        }
        else {
            log += "."        
        }          

    }
        superLog += log;
    }
    return superLog
}

console.log(signalStrength(cycleCount(inputToArray)))
console.log(spriteLog(cycleCount(inputToArray)))
