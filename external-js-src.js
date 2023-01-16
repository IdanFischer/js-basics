const clog = (label, log) => {console.log(`${label} : ${log}`)}

// module.exports = clog

const person = {
    fname: "Idan",
    lname: "Fischer"
}

module.exports.person1 = person
module.exports.clog = clog