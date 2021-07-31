let x = [];

for (let i = 0; i < 100; i++) {
	x.push('Name' + i);
}
// let found = x.find((elem) => elem === 'Name101');
// console.log(found);

function linearSearch(arr, elem) {
	for (let i in arr) {
		if (elem === arr[i]) {
			return i;
		}
	}
	return -1;
}

let found = linearSearch(x, 'Name5');
console.log(found);
