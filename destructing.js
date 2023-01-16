const clog = (label, log) => {console.log(`${label} : ${log}`)}

// const number = [
//     1,2,3,4,5,7,8,100,8921231243424,6653656545
// ]

//  const render = number[1]
// const [a,b,c,d,e,f,g] = number

// clog("old way", render)

// clog("destructure", a)
// clog("destructure", b)
// clog("destructure", c)
// clog("destructure", d)
// clog("destructure", e)
// clog("destructure", f)
// clog("destructure", g)

const person = {
    firstname: "Idan",
    lastname: "Fischer",
    age: 18,
    hair: "black",
    eye: "green",
    height: "183",
    gender: "m"
}

// const firstname = person.firstname
// const lastname = person.lastname
// const age = person.age

// but a better way to do it is
// const {firstname, lastname, age, hair, eye, height, gender} = person

// you can pull only what you need
// const {height, gender} = person
// clog("gender", gender)

const person1 = {
    firstname: "Lucy",
    lastname: "Lee",
    age: 27,
    hair: "brown",
    eye: "red",
    height: "200",
    gender: "female"
}

const {height, gender} = person1
clog("gender", gender) 

