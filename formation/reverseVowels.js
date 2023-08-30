/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let sArray = s.split("");
	let firstIndex = 0;
	let lastIndex = sArray.length - 1;

	while (firstIndex < lastIndex) {
		if (vowels.indexOf(sArray[firstIndex]) === -1) {
			firstIndex++;
			continue;
		} else if (vowels.indexOf(sArray[lastIndex]) === -1) {
			lastIndex--;
			continue;
		}

		let temp = sArray[firstIndex];
		sArray[firstIndex] = sArray[lastIndex];
		sArray[lastIndex] = temp;

		firstIndex++;
		lastIndex--;
	}

	return sArray.join("");
};
