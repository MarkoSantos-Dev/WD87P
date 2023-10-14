// 4. Logical Operators

// && operator
let myAge = 24;
let isAdult = true;
let isChild = (myAge >= 18 && isAdult)? "I am an adult" : "I am not an adult"; 
console.log("Logical Operator: (&&)", "This is the result of myAge >= 18 && adult:", isChild);

// || operator
let birthYear = 1999;
let isBorn90s = (birthYear >= 1990 || birthYear <= 1999)? "Born in the 1990s" : "Not born in the 1990s"; 
console.log("Logical Operator: (||)", "This is the result of birthYear >= 1990 || birthYear <= 1999:", isBorn90s);

//! operator
let isFlightDelayed = true;
let isNotDelayed = !isFlightDelayed;

console.log("Logical Operator: (!)", "This is the result of:", isNotDelayed);