let array = [];

function lastElement(array) {
    if (array.length > 0) { // to make sure that the array is NOT empty
    return array[array.length - 1]; // to return the last element -- array.length - 1
} else {
    return null;
}
}

console.log(lastElement(['string1', 'string2', 'string3']));
console.log(lastElement(['test1', 'test2', 'test3']));