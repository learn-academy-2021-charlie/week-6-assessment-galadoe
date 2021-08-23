// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.
describe('sentence', () => {
    test('should make a sentece about each person with their names', () => {
        expect(sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
    })

})

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass.

// create a function - sentence take argument arr
// map through the array to get each object
// create a var and split it
// create another var to map through the previous var for the first and last name
// use toUpperCase and substring to capitalized and return the full string
// return the string with interpolation

const sentence = (arr) => {
  return arr.map(value => {
    let name = value.name.split(" ")
    let nameCap = name.map(value => {
      return value[0].toUpperCase() + value.substring(1)
    }).join(" ")
    return `${nameCap} is a ${value.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('numbers', () => {
    test('should only return the remainders of the numbers divided by 3', () => {
      var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
      expect(numbers(hodgepodge1)).toEqual([2, 0, -1, 0])
      expect(numbers(hodgepodge2)).toEqual([2, 1, -1])
    })

})



// b) Create the function that makes the test pass.

// create function - numbers take argument arr
// map through the arr (filter) to get each value that is a number (typeof)
// map through it again, but each value is a remainder of 3

const numbers = (arr) => {
  return arr.filter(value => {
    return typeof value == 'number'
  }).map(value => {
    return value % 3
  })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('cubedSum', () => {
    test('should return of sum of all the numbers cubed', () => {
      var cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      var cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
      expect(cubedSum(cubeAndSum1)).toEqual(99)
      expect(cubedSum(cubeAndSum2)).toEqual(1125)
    })
})


// b) Create the function that makes the test pass.

// create a function - cubedSum takes in arr
// create a var and assign it to map through the arr
// return each value to the power of 3
// last, use .reduce() method to do the sum of the previous values

const cubedSum = (arr) => {
  let newArr = arr.map(value => {
    return value ** 3
  })
  return newArr.reduce((accumulator, currentValue) => accumulator + currentValue)
}
