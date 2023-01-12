function sayHello() {
    console.log('Hello there.')
}

function sayGoodbye() {
    console.log('Goodbye')
}

sayHello()
sayGoodbye()


// What if i want to gaurantee that Hello comes before Goodbye?

function sayHelloThen(next) {
    console.log('Hello there!')
    next()
}


sayHelloThen(() => console.log('Goodbye!'))
// function sayGoodbyeThen(nextThen) {
//     console.log('Hello there!')
//     }