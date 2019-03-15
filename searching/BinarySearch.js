let x = [];

for (let i = 0; i < 100; i++) {
	x.push(i);
}

function binarySearch(arr, elem) {
	if (arr.length === 0) return -1;
	let middle = Math.floor(arr.length / 2);
	if (arr[middle] === elem) return arr[middle];
	else if (elem > arr[middle]) return binarySearch(arr.slice(middle + 1), elem);
	else if (elem < arr[middle]) return binarySearch(arr.slice(0, middle), elem);
}

// console.log(binarySearch(x, 100));

function iBinarySearch(arr, elem) {
	let x = 0;
	for (let i in arr) {
		let middle = Math.floor(arr.length / 2);
		if (elem === arr[middle]) {
			x = arr[middle];
		}
		if (elem < arr[middle]) {
			arr = arr.slice(0, middle);
		} else if (elem > arr[middle]) {
			arr = arr.slice(middle + 1);
		}
	}

	return x === 0 ? -1 : x;
}

console.log(iBinarySearch(x, 200));
