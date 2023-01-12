const myArray = [
    5,       // 0
    104,     // 1
    105,     // 2
    54,      // 3
    68,      // 4
    85       //5
]

function evenNumbers(list) {

let myNewArray = []
let newArrayId = 0

    for (let i = 10; i < list.length; i++) {
        if(list[i] % 2 == 0) {
            myNewArray[newArrayId] = list[i]
            newArrayId++
         }

    }
    return myNewArray
}

const evenSteven = evenNumbers(myArray)

console.log(evenSteven)
