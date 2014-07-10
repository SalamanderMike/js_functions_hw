// isPrime
// Michael McClure
var isPrime = function(number) {
	var bool = false

	for (var i = 2; i < number; i++) {
		if ((number % i) === 0) {
			bool = false;
			break;
		} else {
			bool = true;
		}
	}
	if (bool === true) {
		return number + " is prime!";
	} else {
		return "Sorry, Charlie! " + number + " is not prime.";	
	}
}

console.log(isPrime(13));
