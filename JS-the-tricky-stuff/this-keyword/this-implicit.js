// When keyword this is inside of a declared object


// strict mode doesn't make a difference here

var person = {
  firstName: "Peter",
  sayHi: function() {
    return  "Hi " + this.firstName
  }
  determineContext: function() {
    return this === person
  }
}

person.sayHi() // "Hi Peter"

person.determineContext() // true


// Nested Objects

var person = {
  firstName: "Peter",
  sayHi: function() {
    return  "Hi " + this.firstName
  }
  determineContext: function() {
    return this === person
  }
  dog: {
    sayHello: function() {
    return  "Hello " + this.firstName
    }
    determineContext: function() {
      return this === person
    }
  }
}

person.sayHi() // "Hi Peter"
person.determineContext() // true

person.dog.sayHello() // "Hello undefined"
person.dog.determineContext() // false
