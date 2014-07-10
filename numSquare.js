// numSquare
// Michael McClure
var max = 21;

var numSquare = function(max) {
	var pSquares = [];

	for (var n = 1; n <= max; n++) {
		if ((n * n) < max) {
			pSquares.push(n * n);
		} else {
				break;
		}
	}
	return pSquares;
}
console.log("Thise numbers are perfect squares under ", max, numSquare(max));
