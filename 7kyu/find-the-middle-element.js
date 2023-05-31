// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

function gimme (triplet) {
    let big = Math.max(...triplet)
    let small = Math.min(...triplet)
    let middle = 0;
    for (num in triplet) {
        if (triplet[num] !== big && triplet[num] !== small) {
            middle += triplet[num]
        }
    }
    return triplet.indexOf(middle)
}

console.log(gimme([2, 3, 1])) // 0
console.log(gimme([5, 10, 14])) // 1