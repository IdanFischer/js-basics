const primeNumber = [
    2,
    3,
    5,
    7,
    11,
    13
]

const evenNumber = [
    2,
    4,
    6,
    8,
    10,
    12
]

const car = {
    manfu: "honda",
    model: "acura",
    year: 1994
}

const clog = (label, log) => console.log(label, ":", log )

const newArray = primeNumber


// clog("orignal array", primeNumber)
// clog("new array", newArray)
// primeNumber.push(17)
// clog("orignal array", primeNumber)
// clog("new array", newArray)

// const newArray1 = [...primeNumber]

// clog("orignal array", primeNumber)
// clog("new array", newArray)
// primeNumber.pop()
// clog("orignal array - pop", primeNumber)
// clog("new array - pop", newArray1)

// const newCar = {...car}

// clog("ori obj", car)
// clog('copy obj', newCar)

// const newNumberList = [ primeNumber, evenNumber]
// const newNumberList2 = [... primeNumber, ...evenNumber]

// clog("array double", newNumberList)
// clog("array combined", newNumberList2)

// const mathMax = Math.max(...primeNumber)
// clog("Math Max", mathMax)

const number1 = [1,3,5,7]
const number2 = [2,4,6,8]

//create one array with all the vallues from both array
const combinedNumber = [number1, number2]
const combinedNumber2 = [...number1, ...number2]

// clog("not combined array", combinedNumber)
// clog("combined array", combinedNumber2)

// const check = combinedNumber[0]
// clog("combined array", check)

