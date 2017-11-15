// Closures

// a closure is a function that makes use of variables defined
// in outer functions that have previously returned

function outer() {
  var data = "closures are ";
  return function inner() {
    var innerData = "awesome";
    return data + innerData;
  }
}

outer()
// returns function inner() {
    // var innerData = "awesome";
    // return data + innerData;
  // }

outer()() // "closures are awesome"


function outer(a) {
  return function inner(b) {
    // the inner function is making use of the variable "a"
    // which was defined in an outer function called "outer"
    // and by the time this is called, that outer function has returned
    // this function called "inner" is a closure!
    return a + b;
  }
}

outer(5)(5) // 10

var storeOuter = outer(5)
storeOuter(5) // 15


// A closure only exists when an inner function makes use
// of variables defined from an outer function that has returned.
// If the inner function does not make use of any of the external variables
// all we have is a nested function.


//
// Private variables
//

function counter() {
  var count = 0
  return function() {
    return ++count
  }
}

counter1 = counter()
counter1() // 1
counter1() // 2

counter2 = counter()
counter2() // 1
counter2() // 2

counter1() // 3 this is not affected by counter2!

count // ReferenceError: count is not defined - because it's private!


function classRoom() {
  var instructors = ["colt", "elie"]
  return {
    getInstructors: function() {
      return instructors;
    },
    addInstructors: function(instructor) {
      instructors.push(instructors);
      return instructors;
    }
  }
}

course1 = classRoom()
course1.getInstructors() // ["colt", "elie"]
course1.addInstructors("Peter") // ["colt", "elie", "peter"]
course1.getInstructors() // ["colt", "elie", "peter"]

course2 = classRoom()
course2.getInstructors() // ["colt", "elie"]
