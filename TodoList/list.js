console.log("Connected!");

var todos = ["buy new car", "learn JS"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  }
  else if (input === "new") {
    addTodo();
  }
  else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}

console.log("Ok, You quit the app!");

function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, idx){
    console.log(idx + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  var newTodo = prompt("Enter new todo:");
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo() {
  var indexToDel = prompt("Enter index of todo to delete:");
  todos.splice(indexToDel, 1);
  console.log("Deleted Todo");
}
