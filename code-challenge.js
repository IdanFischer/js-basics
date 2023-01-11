// Given an array of numbers, write a function to return the sum

function calculateSum(arr) {
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
     sum += arr[i]
    }
return sum
}
const myArrary = [23, 74, 18, 42, 69, 91, 88]

const mySum = calculateSum(myArrary)

console.log(mySum)
