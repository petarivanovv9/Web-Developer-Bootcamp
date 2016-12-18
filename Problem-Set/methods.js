var dogSpace = {};

dogSpace.speak = function(){
  return "WOOF!";
}

var catSpace = {};

catSpace.speak = function(){
  return "MEOW!";
}

var comments = {};
comments.data = ["Good job!", "Bye!", "Lame..."];

function print(arr){
  arr.forEach(function(elem){
    console.log(elem);
  });
}

print(comments.data)

comments.print = function(){
  this.data.forEach(function(elem){
    console.log(elem);
  });
}

comments.print()
