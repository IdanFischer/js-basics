const clog = (label, log) => {console.log(`${label} : ${log}`)}

// write a for-loop that outputs "I WILL NEVER GIVE UP" 10 TIMES
// for(i = 0; i < 10; i++){
// let printTen = console.log(`I WILL NEVER GIVE UP`)
// printTen++

// }


// create a function that returns the number of vowels in a given string
// const vowels = [
//     "a",
//     "e",
//     "i",
//     "o",
//     "u"
// ]


function getVowels(string) {
let count = 0
// use this to doc the variable so that you can return a value
const vowels = "aeiouAEIOU"
// use this to go through and find all the vowels, so that the string can find the index of it
// const result = word.indexOf(searchTerm)
    for (i = 0; i < string.length; i++){
        if(vowels.includes(string[i])) { // use includes to see if the variables vowels has the-- 
         // --same string letter of the current index of string
            count++ // adding one each time a vowel is found by the includes method
        }
    }
    return count
}
console.log(getVowels("what is going on"))
