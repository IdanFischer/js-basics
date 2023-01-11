// There are 4 types of functions --
// I. do something / no params
// II. do something / with parmas
// III. return something / no params
// IV. return something / with params

// I. Exmaple
function sayHelloWorld() {
    console.log("Hello, World.")
}

sayHelloWorld() // Calls the function
// sayHelloWorld  is the function

// II. Exmaple
function greetFriend(name) {
    console.log("Hello, " + name)
}

greetFriend('Joe') // should console.log "Hello, Joe"

function addTwoPlusTen() {
    const result = 2 + 10
    return result
}
const answer = addTwoPlusTen() // answer = 12

console.log(answer) 

// IV. Example

function addTwoNumbers(a, b) {
    const result = a + b
    return result
}

const mySum = addTwoNumbers(1, 2)
console.log(mySum)

// Real World type example

function calculateSalesTax(subtotal, taxRate){
const salesTax = (subtotal * taxRate).toFixed(2)
return salesTax
}

const totalTax = calculateSalesTax(17.25, 0.07)
console.log(totalTax)
