function isEven(number) {
  return number % 2 === 0
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
}

function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}


//// Higher Order Functions


function sing() {
  console.log("twinkle twinkle ...");
  console.log("how I wonder ...");
}

// setInterval(sing, 1000); 1000 -> 1 second
// <- num
// clearInterval(num);

// Anonymous functions

// setInterval(function() {
//   console.log("I am an anonymous function!");
//   console.log("This is awesome!");
// }, 2000);
