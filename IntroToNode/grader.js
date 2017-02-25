function average(scores) {
  sum = scores.reduce(add, 0);

  return Math.round(sum / scores.length);
}

function add(a, b) {
  return a + b;
}


function average2(scores) {
  var total = 0;

  scores.forEach(function(score){
    total += score;
  });

  var avg = total / scores.length;

  return Math.round(avg);
}


var scores = [90, 98, 89, 100, 100, 86, 94];

console.log(average(scores));

console.log(average2(scores));
