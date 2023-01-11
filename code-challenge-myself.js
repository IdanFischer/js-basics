// Give any arrary of numbers write a functioon that returns
// the largetest number in that array (without using Math.max)

function findMax(list) {

    let biggestNumber =  0
    for (i = 0; i < list.length; i++) {
        if (list[i] > biggestNumber) {
            biggestNumber = list[i]
        }
    }
    
    
    return biggestNumber
}

const ourArray = [5, 104, 105, 54, 68]

const largetest = findMax(ourArray)

console.log(largetest)