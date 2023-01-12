setTimeout(function doSomethingElse(){
    console.log('OTHER THING')
}, 1000)

// OR

setTimeout(function (){
    console.log('OTHER THING')
}, 1000)

// OR

setTimeout(() => {
    console.log('OTHER THING')
}, 1000)

