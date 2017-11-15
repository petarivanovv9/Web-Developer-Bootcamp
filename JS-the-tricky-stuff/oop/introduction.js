// OOP Defined

// 1. a programming model based around the idea of objects

// 2. these objects are constructed from whay are called "classes",
// which we can think of like a blueprint. We call these objects
// created from classes "instances"

// 3. we strive to make our classes abstract and modular


//
// Constructor functions
//

// capitalization of the function name - this is convention
function House(bedrooms, bathrooms, numSqft) {
  this.bedrooms  = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft   = numSqft;
}

// we are not returning anything from the function so our House function returns undefined
// we are not explicitly binding the keyword 'this' or placing it inside a declared object.
// this means the value of the keyword 'this' will be the global object, which is not what we want
var firstHouse = House(2,2,1000);
firstHouse // undefined

//
// new keyword
//
// 1. it first creates an empty object
// 2. it then sets the keyword 'this' to be that empty object
// 3. it adds the line 'return this' to the end of the function, which follows it
// 4. it adds a property onto the empty object called "__proto__"(dunder proto),
// which links the prototype property on the constructor function
// to the empty object

var newFirstHouse = new House(2,2,1000);
newFirstHouse.bedrooms // 2
newFirstHouse.bathrooms // 2
newFirstHouse.numSqft // 1000


// exercise

function Dog(name, age) {
  this.name = name;
  this.age  = age;
  this.bark = function() {
    console.log(this.name + " just barked")
    // return this.name + " just barked";
  }
}

var rusty = new Dog("Rusty", 3);
rusty.bark() // Rusty just barked
