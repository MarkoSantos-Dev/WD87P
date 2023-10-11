function sumArray(numbers) {
    let sum = 0; // this value will result to the sum of the numbers in the numbers parameter 
    for (let i = 0; i < numbers.length; i++) { // this is to get the elements inside the numbers array
      sum += numbers[i]; // for each element, its added to the current value of the sum variable 
  }
  return sum;
}
  console.log(sumArray([1, 2, 3]));
  console.log(sumArray([2, 2, 2, 2]));  
  console.log(sumArray([50, 50 ,1]));