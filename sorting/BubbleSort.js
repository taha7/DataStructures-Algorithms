// Next =====> stop iteration if no swaps at last
function bubbleSort(arr) {
	let condition = arr.length;

	while (condition >= 0) {
		for (let j = 0; j < condition - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
			}
		}
		condition--;
	}

	return arr;
}

console.log(bubbleSort([ 5, 6, 0, 22, 565, 2, 21 ]));
