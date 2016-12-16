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
