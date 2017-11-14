// The 'new' keyword
// We can set the context of the keyword 'this' using the
// 'new' keyword - it does quite a bit more as well

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

var peter = new Person("Peter", "Ivanov");

peter.firstName // "Peter"
peter.lastName // "Ivanov"
