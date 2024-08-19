const data = [1, 2, 3, 4, 5];

function reverse (arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

let reversedArr = reverse(data);
console.log(reversedArr);