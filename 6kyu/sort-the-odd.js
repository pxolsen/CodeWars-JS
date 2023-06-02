// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(arr) {
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) odds.push(arr[i])
    }
    odds.sort((a,b) => a-b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            arr[i] = odds.shift()
        }
    }
    return arr;
}

console.log(sortArray([7, 1])) //[1, 7]
console.log(sortArray([5, 8, 6, 3, 4])) // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]