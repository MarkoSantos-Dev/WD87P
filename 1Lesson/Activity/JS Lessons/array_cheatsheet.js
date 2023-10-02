// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

//concat- add two arrays together
let dog = ['doberman','labrador','bulldog'];
let cat = ['siamese', 'snowshoe','persian'];
let newArr = dog.concat(cat)
//newArr = ['doberman','labrador','bulldog','siamese', 'snowshoe','persian']


//includes - check arrays and return true or flase
let cat = ['siamese', 'snowshoe','persian'];
cat.includes('siamese')
//true

//indexof - same as string/ returns the index of the array value\
let cat = ['siamese', 'snowshoe','persian'];
cat.indexof('siamese')
//0

//reverse- reverse the index of the array.
let cat = ['siamese', 'snowshoe','persian'];
cat.reverse()
//let cat = ['persian', 'snowshoe','siamese']; 

//slice - returns a new copy of the array 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//splice method can be used to add new items to an array:
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
//fruits = ['Banana','Orange','Lemon','Kiwi','Apple','Mango']

//Using splice() to Remove Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
fruits = ['Orange','Apple','Mango']
