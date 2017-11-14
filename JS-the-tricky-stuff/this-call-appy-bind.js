// Explicit Binding

// call, apply and bind methods can only be used by functions
// they change the context

// call and apply -> invoke immediately
// bind -> doesn't invoke immediate, returns new function definition


// fixing up with call
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

person.dog.sayHello.call(person) // "Hello Peter"
person.dog.determineContext.call(person) // true

// Notice thay we do NOT invoke sayHello or determineContext


// Using Call in the Wild

var peter = {
  firstName: "Peter",
  sayHi: function() {
    return  "Hi " + this.firstName
  }
}

var george = {
  firstName: "George",
  // Look at all the duplication
  sayHi: function() {
    return  "Hi " + this.firstName
  }
}

peter.sayHi() // Hi Peter
george.sayHi() // Hi George (but we had to copy and paste the function from above...)

// refactoring with call method

var george = {
  firstName: "George"
}

peter.sayHi() // Hi Peter
peter.sayHi.call(george) // Hi George


//
// What about Apply?
// it's almost identical to call - except the parameters!
//

var peter = {
  firstName: "Peter",
  sayHi: function() {
    return  "Hi " + this.firstName
  }
  addNumbers: function(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var george = {
  firstName: "George"
}

peter.sayHi() // Hi Peter
peter.sayHi.apply(george) // Hi George

peter.addNumbers(1,2,3,4) // Peter just calculated 10

peter.addNumbers.call(george,1,2,3,4) // George just calculated 10
peter.addNumbers.apply(george,[1,2,3,4]) // George just calculated 10


//
// And what about bind?
// The parameters work like call, but bind returns a
// function with the context of 'this' bound already!
//

var peter = {
  firstName: "Peter",
  sayHi: function() {
    return  "Hi " + this.firstName
  }
  addNumbers: function(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var george = {
  firstName: "George"
}

var georgeCalc = peter.addNumbers.bind(george,1,2,3,4) // function(){}...
georgeCalc() // George just calculated 10

// with bind - we do not need to know all the arguments up front!

var georgeCalc2 = peter.addNumbers.bind(george,1,2) // function(){}...
georgeCalc2(3,4) // George just calculated 10


// Bind in the wild
// Very commonly we lose the context of 'this', but in
// functions that we do not want to execute right away!

var peter = {
  firstName: "Peter",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName)
    }, 1000)
  }
}

// use bind to set the correct context of 'this'
var peter = {
  firstName: "Peter",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hi " + this.firstName)
    },bind(this), 1000)
  }
}

peter.sayHi() // Hi Peter (1000 milliseconds later)
