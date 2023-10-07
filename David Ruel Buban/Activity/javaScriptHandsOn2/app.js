//Data types: String, Number, Boolean, Array, Object, Undefined, Null.

let firstName = 'Rian&Camz'; // String
console.log(typeof firstName); 

let age = 30; // Number
console.log(typeof age);

let isMarried = true; // Boolean
console.log(typeof isMarried);

let colors = ['white', 'blue', 'yellow']; // Array
console.log(typeof colors);

let nullVar = null; // Null
console.log(typeof nullVar);


// math operators +, -, *, /, % ** ++ --.

let numOne = 56; 
let numTwo = 42;

let total = numOne + numTwo; // 98
console.log(`Math operators in Addition ${numOne + numTwo} type of ${typeof(numOne, numTwo)}`);

total = numOne - numTwo; // 14
console.log(`Math operators in Subtraction ${numOne - numTwo} type of ${typeof(numOne, numTwo)}`);

total = numOne * numTwo; // 2352
console.log(`Math operators in Multiplication ${numOne * numTwo} type of ${typeof(numOne, numTwo)}`);

total = numOne / numTwo; // 1.3333333333333333
console.log(`Math operators in Division ${numOne / numTwo} type of ${typeof(numOne, numTwo)}`);

total = numOne % numTwo; // 14
console.log(`Math operator in Modolus ${numOne % numTwo} type of ${typeof(numOne, numTwo)}`);

total = numOne ** 2; // 3136
console.log(`Math operators in Exponent ${numOne ** 2} type of ${typeof(numOne, numTwo)}`);

total = numOne++; // 57
console.log(`Math operators in Increment ${numOne++} type of ${typeof(numOne, numTwo)}`);

total = numOne--; // 56
console.log(`Math operators in Decrement ${numOne--} type of ${typeof(numOne, numTwo)}`);


//Assignment operators =, +=, -=, *=, /=, %=, **= .

let numThree = 10;
let numFour = 5;
console.log(`Assignment Operators = ${typeof(numThree,numFour)}`); // 10 & 5

numThree += numFour; // 15
console.log(`Assignment Operators += ${numThree += numFour} type of ${typeof(numThree,numFour)}`); // 15

numThree -= numFour; // 5
console.log(`Assignment Operators -= ${numThree -= numFour} type of ${typeof(numThree,numFour)}`); // 5

numThree *= numFour; // 50
console.log(`Assignment Operators *= ${numThree *= numFour} type of ${typeof(numThree,numFour)}`); // 50

numThree /= numFour; // 2
console.log(`Assignment Operators /= ${numThree /= numFour} type of ${typeof(numThree,numFour)}`); // 2

numThree %= numFour; // 0
console.log(`Assignment Operators %= ${numThree %= numFour} type of ${typeof(numThree,numFour)}`); // 0


// logical operators &&, ||, !.

let numFive = 10;
let numSix = 5;

if (numFive == 10 && numSix == 5) {
    console.log(`Logical Operators && is true ${typeof(numFive == 10 && numSix == 5)}`);
}

if (numFive == 10 || numSix == 5) {
    console.log(`Logical Operators || is true ${typeof(numFive == 10 || numSix == 5)}`);
}

if (numFive !== 10) {
    console.log(`Logical Operators ! is true ${typeof(numFive !== 10)}`);
}

// if else statement and covert to ternary operator.

let numSeven = 10;
let numEight = 5;
let result
if (numSeven > numEight) {
    console.log(`numEight is less than numSeven ${typeof(numSeven > numEight)}`);
} else {
    numEight < numSeven ? console.log(`numEight is less than numSeven ${typeof(numEight < numSeven)}`) : null;
}

result = numSeven > numEight ? true : false; // remember before the ? is the if statement and after the : is the else statement. and also remember that after the ? is the true and after the : is the false.
console.log(`numSeven is greater than numEight ${result} type of ${typeof(result)}`);


let henry = 30;
let canVote = henry > 18 ? console.log("This is True.") : console.log("This is False."); //remember if henry is greater than 18 is true and if henry is less than 18 is false.
console.log(`Henry can vote ${canVote} type of ${typeof(canVote)}`);

//  blank array and push method to add or assign 5 elements.

let detonate = [];

for (let i = 0; i < 1; i++) {
    detonate.push('Rian', 'Camz', 'RianCamz', 'Rian&Camz', 'Rian Camz');
}
console.log(`detonate array ${detonate} type of ${typeof(detonate)}`);

// other way for dynamic lopping.

/*
let todetonate = ['Rian', 'Camz', 'RianCamz', 'Rian&Camz', 'Rian Camz'];
let detonate = [];

for (let i = 0; i < todetonate.length; i++) {
    // detonate.push('Rian', 'Camz', 'RianCamz', 'Rian&Camz', 'Rian Camz');
    detonate.push(todetonate[i]);
}
console.log(`detonate array ${detonate} type of ${typeof(detonate)}`);
*/

// if & else if statement.

const grade = Number(prompt("Enter your grade"));

if (grade >= 90 && grade <= 100) {
    console.log("Your final grade is 'A' ");
} else if (grade >= 80 && grade <= 89) {
    console.log("Your final grade is 'B' ");
}else {
    console.log("Your final grade is 'F' ");
}

// switch statement.

const grade2 = Number(prompt("Enter your grade"));

switch (true) {
    case grade2 >= 90 && grade2 <= 100:
        console.log("Your final grade is 'A' ");
        break;
    case grade2 >= 80 && grade2 <= 89:
        console.log("Your final grade is 'B' ");
        break;
    default:
        console.log("Your final grade is 'F' ");
}

const anime = prompt("What is the best anime?");

switch (anime) {
    case "Voltes V":
    case "flame of recca":
        console.log("Flame of Recca is the best anime");
        break;
    case "One Piece":
    case "Naruto":
        console.log("naruto and One Piece is the best anime");
        break;
    default:
        console.log("I don't know what is the best anime");
}

/****** END ******/