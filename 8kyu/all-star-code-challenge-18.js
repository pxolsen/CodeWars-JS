// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter) {
    return str.split("").filter(x => x === letter).length
}

console.log(strCount("Hello", "o")) // 1
console.log(strCount("Hello", "l")) // 2
console.log(strCount("", "z")) // 0