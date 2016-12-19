// *** printReverse() ***

function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([3, 6, 2, 5]);

// *** isUniform() ***

function isUniform(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isUniform([1]));
console.log(isUniform([1, 1]));
console.log(isUniform([1, 2]));
console.log(isUniform([2, 1]));

// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});

// 	return true;
// }

// function isUniform(arr) {
// 	var first = arr[0];
// 	for(var i = 1; i < arr.length; i++) {
// 		if(arr[i] !== first) {
// 			return false;
// 		}
// 	}
// 	return true;
// }


// *** sumArray() ***

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(elem){
    total += elem;
  });
  return total;
}

// *** max() ***

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}
