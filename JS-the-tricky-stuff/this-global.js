console.log(this); // window

function whatIsThis() {
  return this;
}

function variablesInThis() {
  // since the value of this is the window
  // all we are doing here is creating a global variable
  this.person = "Peter";
}

console.log(person); // Peter

whatIsThis(); // window
