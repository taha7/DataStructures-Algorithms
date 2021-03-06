function collectOddValues(arr) {
	let odd = [];

	function helper(inputArr) {
		if (inputArr.length == 0) {
			return;
		}
		if (inputArr[0] % 2 !== 0) {
			odd.push(inputArr[0]);
		}
		helper(inputArr.slice(1));
	}

	helper(arr);

	return odd;
}
// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

// with pure recursion
function collectOddValues2 (arr) {
    if (arr.length <= 0) {
        return []
    }
    
    if (arr[0] % 2 !== 0) {
        return [arr[0]].concat(collectOddValues2(arr.slice(1)))
    }
    
    return [].concat(collectOddValues2(arr.slice(1)))
}

console.log(collectOddValues2([1,2,3,4,5,6,7,8,9]))