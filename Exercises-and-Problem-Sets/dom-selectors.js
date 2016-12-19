console.log("DOM Selectors Exercise");

// 1
console.log("** 1 **");
var p = document.querySelector("#first");
console.log(p)

// 2
console.log("** 2 **");
var p = document.getElementById("first");
console.log(p)

// 3
console.log("** 3 **");
var p = document.querySelector(".special");
console.log(p)

// 4
console.log("** 4 **");
var p = document.querySelectorAll(".special")[0];
console.log(p)

// 5
console.log("** 5 **");
var p = document.getElementsByTagName("p")[0];
console.log(p)

// 6
console.log("** 6 **");
var p = document.getElementsByClassName("special")[0];
console.log(p)

// 7
console.log("** 7 **");
var p = document.querySelector("p");
console.log(p)

// 8
console.log("** 8 **");
var p = document.querySelectorAll("p")[0];
console.log(p)

// 9
console.log("** 9 **");
var p = document.querySelector("h1 + p")[0];
console.log(p)
