// isPrime
// Michael McClure
// *** Not finished ***
var number = 9;

var isPrime = function(number) {
	for (var i = 2; i < number; i++) {
		if ((number % i) === 0) {
			return "Sorry, Charlie! " + number + " is not prime.";
		} else {
			return number + " is prime!";
		}
	}
}

console.log(isPrime(number));
