// variables(identifier) are container to store any values
// var let and const are keyword in js to declare a variable

// scopes -  global - local - blocked - functional - lexical
// lexical scope -  the scope of a variable is determined by its position in the code
// block -  the variable is accessible in the block where it is declared and in all the blocks
// inside the block where it is declared
// let and const are block scoped while var is function scoped
// let and const are hoisted but not initialized while var is hoisted and initialized with undefined
// let and const are not re-declared while var can be re-declared
// let and const are not re-assigned while var can be re-assigned


//difference b/w var let and const
// 1. var -- it allows redeclaration and redefined  ------ functional blocked scope but not blocked scope
// ex-
// var name = "John"
// // var name = "Thakur"  //redeclaration
// name = "Sravanthi" // redefined
// console.log(name) //Thakur

// functional scope example
// var user = "john"
// console.log(user)

// function getUser() {
//     var user = "Thakur"
//     console.log(user)
// }
// getUser()
// console.log(user)


// if (true) {
//     var user = "Thakur"
//     console.log(user)
// }
// console.log(user)


// 2. let --it does not allow redeclaration but allow  redefined------ blocked scope

//ex.
// let age = 25
// // let age = 20 // redelaration is not allowed
// age = 30 // redefined
// console.log(age)

let user = "john"
console.log(user)

// if (true) {
//     let user = "Thakur"
//     console.log(user)
// }

function getUser() {
    let user = "Thakur"
    console.log(user)
}
getUser()
console.log(user)


//3.  const --it does not allow both redeclaration and redefined----- block scope and immutable
// const gender = 'male'
// // const gender  = "female" // redeclaration not allowed
// gender = "female" // redeclaration not allowed








