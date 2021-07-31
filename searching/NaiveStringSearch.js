function countSubIn(matcher, pattern) {
	let counts = 0;

	for (let i = 0; i < matcher.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (matcher[i + j] !== pattern[j]) break;
			if (j == pattern.length - 1) counts++;
		}
	}

	return counts;
}

console.log(countSubIn('tahatahamohamedtahaezztaha', 'taha'));
