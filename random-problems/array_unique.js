function array_unique (arr) {
    let unique = {};
    
    for (let index in arr) {
        if(!unique[index]) {
            unique[arr[index]] = true;
        } 
    }
    
    return Object.keys(unique);
}

function array_unique2 (arr) {    
    for (let index in arr) {
        if (arr.indexOf(arr[index]) != index) arr.splice(index, 1);
    }
    return arr;
}

console.log(array_unique([1,2,2,3,4,1]));

console.log("==========");

console.log(array_unique2([1,2,2,3,4,1]));