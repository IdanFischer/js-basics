const gender = 'male'

// ? - then
// : - else
const greeting = (gender === 'male') ? 'Hello sir.' : 'Hello ma\'am'

console.log(greeting)

const age = 50

// both work, depends on what you like but this is easier to read
const message = (age >= 21)
                    ? 'Drink up'
                    : 'Have some Water'

console.log(message)


// WE CAN NEST TERNARIES WOOOO

const message2 = (age >= 21)
                 ? 'Drink all you want'
                 : (age >= 18)
                    ? 'Have some more water'
                    : 'Please leave now.'

console.log(message2)

const message3 = (age >= 50)
                  ? 'you qualify for the money!'
                  : (age >= 40)
                     ? 'you can enter the lottery for it!'
                     : 'Im sorry, you are too young for the money.'
console.log(message3)
