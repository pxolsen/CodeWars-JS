// INSTRUCTIONS:
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(arr, n) {
    return n >= arr.length ? -1 : arr[n]**n
}


console.log(index([1,2,3,4], 2)) //9
console.log(index([1,2,3], 3)) //-1