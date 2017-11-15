//
// Prototypes
//

// this is the constructor function
function Person(name) {
  this.name = name;
}

// this is an object created from the Person constructor
var peter  = new Person("Peter");
var george = new Person("George");

// since we used the new keyword, we have established
// a link between the object and the prototype property
// we can access that using __proto__

peter.__proto__  === Person.prototype; // true
george.__proto__ === Person.prototype; // true

// the Person.prototype object also has a property
// called constructor which points back to the function

Person.prototype.constructor === Person;


//
// Prototype chain
//

function Person(name) {
  this.name = name;
  this.sayHi = function() {
    return "Hi " + this.name;
  }
}

peter = new Person("Peter");
peter.sayHi(); // Hi Peter

// this code works, but it is inefficient
// every time we make an object using the new keyword we have to redefine this function
// but its the same for everyone! Let's put it on the prototype instead!

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return "Hi " + this.name;
}

peter = new Person("Peter");
peter.sayHi(); // Hi Peter


//
// exercise
//

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  if (this.isRunning) return "beep";
}
