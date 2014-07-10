// sillySum
// Michael McClure
// [3,5,9] = 3*0 + 5*1 + 9*2
var array = [3, 5, 9, 11, 44];

var silly = function(array) {
	var aggregate = 0;

	for (var index in array) {
		aggregate += (index * array[index]);
	};
	return aggregate;
}
console.log("The sum of each number multiplied by its index is:", silly(array));
