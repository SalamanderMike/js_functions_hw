// letterCount
// Michael McClure
// *** almost works. Ran out of time to finish ***

var word = "apple";

var letterCount = function(word) {
	var count = 0;
	var array = [];
	for (var letter in word) {
		for (var compare in word) {
			if (word[letter] === word[compare]) {
				count ++;
				if (count > 1) {
					console.log(true) // Test condition true
					word = word.replace(compare); // *** Doesn't work
				}
			}
		}
		array.push([word[letter], count]);
		count = 0;
	}
	return array;
}

console.log(letterCount(word));
