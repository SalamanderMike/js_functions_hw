// merge
// Michael McClure

var arr1 = [3,6,11]; 
var arr2 = [2,4,5,8,9];

// Merge Function
var merge = function(arr1, arr2) {
	// Determines the largest array to be the container
	if (arr1.length > arr2.length) {
		var range = arr1.length;
	} else {
		var range = arr2.length;
}
	// Merge
	for (var i = 0; i < range; i++) {
		if ( typeof arr1[i] !== 'undefined' ) {
			arr2.push(arr1[i]);
		}
	}
	var merged = arr2;
	return merged;
}

// Sort Function
var sortIt = function(array) {
	for (var a = 0; a < array.length; a++) {
		for (var b = 0; b < array.length; b++) {
			if (array[a] < array[b]) {
				var container = array[a]; // hold onto one value
				array[a] = array[b];			// Swap value, then...
				array[b] = container;			// put number back in
			}
		}
	}
	return array;
}

console.log(sortIt(merge(arr1, arr2)));



// // Determines the largest array to be the container
// if (arr1.length > arr2.length) {
// 	var range = arr1.length;
// } else {
// 	var range = arr2.length;
// }


// // Merge
// for (var i = 0; i < range; i++) {
// 	if ( typeof arr1[i] !== 'undefined' ) {
// 		arr2.push(arr1[i]);
// 	}
// }
// 	var merged = arr2;



// // Sort
// for (var a = 0; a < merged.length; a++) {
// 	for (var b = 0; b < merged.length; b++) {
// 		if (merged[a] < merged[b]) {
// 			var container = merged[a];
// 			merged[a] = merged[b];
// 			merged[b] = container;
// 		}
// 	}
// }
// 	console.log(merged);










