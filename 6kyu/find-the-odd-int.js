// DIRECTIONS:
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


function findOdd(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1;
    }
    let answer = 0;

    for (const key in obj) {
        if (obj[key] % 2 !== 0) answer = key;
    }
    return parseInt(answer);
}

console.log(findOdd([7])) //7
console.log(findOdd([1,1,2])) //2
console.log(findOdd([0,1,0,1,0])) //0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4