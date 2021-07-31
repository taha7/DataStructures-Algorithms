/** 
 * (Frequency Pattern)
 * uses objects or sets to collect values of values
 * provide: avoid nested loops or O(N^2)
*/

/**
 * @description check if every value of array1 has corresponding in array2 but squared
 * @note : order does not matter ex: [1,2,3] and [4,1,9] return true 
 * @note : frequency must be the same ex: [1,2,1] and [4,4,1] return true 
 * @argument array1
 * @argument array2
 * @returns Booalean
 */
// This solution takes O(N^2)
function same(array1, array2) {
	if (array1.length != array2.length) return false;

	for (let index in array1) {
		for (let index2 in array2) {
			if (array1[index] ** 2 == array2[index2]) {
				array2.splice(index2, 1);
				break;
			}
			else if (index2 >= array2.length - 1) return false;
		}
	}

	return true;
}

function sameWithObjects(array1, array2) {
	let freq1 = {};
	let freq2 = {};

	for (let val of array1) {
		freq1[val] = (freq1[val] || 0) + 1;
	}

	for (let val2 of array2) {
		freq2[val2] = (freq2[val2] || 0) + 1;
	}

	for (let key in freq1) {
		if (!(key ** 2 in freq2)) return false;
		if (freq1[key] != freq2[key ** 2]) return false;
	}

	return true;
}
// console.log(sameWithObjects([ 1, 2, 4, 2 ], [ 1, 4, 16, 4 ]));

/**
 * @title (ANAGRAMS)
 * @description anagram is a word, phrase or name formed by rearranging letters of others
 * @example : validAnagram('cinema', 'iceman') true
 * @example : validAnagram('anagram', 'nagaram') true
 * @example : validAnagram('aaz', 'zaa') true
 * @argument string1
 * @argument string2
 * @returns Booalean
 */
//TODO: make this solution not loop in the second string
function validAnagram(string1, string2) {
	let calcFreq1 = {};
	let calcFreq2 = {};

	for (let char in string1) {
		calcFreq1[char] = (calcFreq1[char] || 0) + 1;
	}

	for (let char2 in string2) {
		calcFreq2[char2] = (calcFreq2[char2] || 0) + 1;
	}

	for (let key in calcFreq1) {
		if (!(key in calcFreq2)) return false;
		if (calcFreq1[key] !== calcFreq2[key]) return false;
	}

	return true;
}
// console.log(validAnagram('cinema', 'iceman'));
// console.log(validAnagram('anagram', 'nagaram'));
