"use strict"

console.log(this); // window

function whatIsThis() {
  return this;
}

function variablesInThis() {
  // since we are in strict mode this is undefined
  // when we add property on undefined there will be TypeError
  this.person = "Peter";
}

variablesInThis(); // TypeError, can't set person on undefined!

whatIsThis(); // undefined
