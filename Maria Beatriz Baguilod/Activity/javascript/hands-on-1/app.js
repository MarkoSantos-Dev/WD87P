let userInput;

while (true) {
  userInput = parseInt(prompt("Please enter your grade from 0 to 100"));

  if (!isNaN(userInput) && userInput >= 0 && userInput <= 100) {
    // Valid input, break out of the loop
    break;
  } else {
    // Invalid input, show an error message
    alert("Invalid input. Please enter a number from 0 to 100");
  }
}

if (userInput >= 90 && userInput <= 100) {
    console.log(userInput);
    document.getElementById("grade").innerHTML = "You got an A! 🎉";
} else if (userInput >= 80 && userInput <= 89) {
    console.log(userInput);
    document.getElementById("grade").innerHTML = "You got a B! 🙌🏻";
} else if (userInput >= 70 && userInput <= 79) {
    console.log(userInput);
    document.getElementById("grade").innerHTML = "You got a C! 👍🏻";
} else if (userInput >= 60 && userInput <= 69) {
    console.log(userInput);
    document.getElementById("grade").innerHTML = "You got a D! 🫣";
} else {
    console.log(userInput);
    document.getElementById("grade").innerHTML = "You got an E! 😮‍💨";
}