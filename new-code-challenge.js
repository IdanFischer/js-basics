const myArray = [
    5,       // 0
    104,     // 1
    105,     // 2
    54,      // 3
    68,      // 4
    85       //5
]

function findOdd(list) {
    let newArray = []
    let newArrayId = 0

    for (let i = 0; i < list.length; i++) {
        // console.log("list[i]: ", list[i])
       if (list[i] % 2 == 1) {
        //    console.log("newArrayId:", newArrayId)
           newArray[newArrayId] = list[i]
           newArrayId++ 

        //    console.log(newArray)
            // console.log("list[i]: ", list[i])
            // newArray.push(list[i])
       }
    }

    return newArray
}


const oddNumbers = findOdd(myArray)

console.log(oddNumbers)

