// 1. console.log("Number: ", numberVar, typeof numberVar);

let numberVar = 45
console.log(typeof numberVar)



let stringVar = "lets go!"
console.log(typeof stringVar)



let isTest = true
console.log(typeof isTest)



let arrayOfColors = ["red","blue","violet"]
console.log(typeof arrayOfColors)



let nullValue
console.log(typeof nullValue)



let num = 1
let one = [
  1 + 1,     // Addition: 1 + 1 = 2
  1 - 1,     // Subtraction: 1 - 1 = 0
  1 * 1,     // Multiplication: 1 * 1 = 1
  5 / 1,     // Division: 5 / 1 = 5
  2 ** 3,    // Exponentiation: 2 raised to the power of 3 = 8
  10 % 3,    // Modulus (Remainder): 10 % 3 = 1
  ++num,     // Increment: Pre-increment 1 by 1 = 2
  --num      // Decrement: Pre-decrement 1 by 1 = 0
]
console.log(one)



let x = 5
let assignmentOperators = [
  x,       // Initial value of x
  x += 3,  // Adds 3 to x (x becomes 8)
  x -= 2,  // Subtracts 2 from x (x becomes 6)
  x *= 4,  // Multiplies x by 4 (x becomes 24)
  x /= 3,  // Divides x by 3 (x becomes 8)
  x %= 5,  // Calculates x modulo 5 (x becomes 3)
  x **= 2, // Raises x to the power of 2 (x becomes 9)
]
console.log(assignmentOperators)



// Logical (&& || !)
console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!true)
console.log(!false)


// ternary operator
let isRaining = true
let action = isRaining ? 'Take umbrella' : 'No umbrella needed';
console.log(action)



let data = []
for (let i = 1; i <= 5; i++) {
  data.push(i)
}
console.log(data)


let itsRain = false
let isSunny = true
if (itsRain || isSunny) {
  if (itsRain && isSunny) {
    console.log("The weather is both rainy and sunny. Strange!")
  } else if (itsRain) {
    console.log("It is raining today.")
  } else {
    console.log("It is sunny today.")
  }
} else {
  console.log("The weather is neither rainy nor sunny.")
}



let dayOfWeek = "Monday"
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the workweek.")
    break
  case "Tuesday":
    console.log("It's still early in the workweek.")
    break
  case "Wednesday":
    console.log("We're halfway through the workweek.")
    break
  case "Thursday":
    console.log("The weekend is almost here.")
    break
  case "Friday":
    console.log("It's Friday! The weekend is here!")
    break
  default:
    console.log("It's the weekend or an invalid day.")
}