// INSTRUCTIONS:
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
    const arr = ["zero", "one", "two", "three", "four", "five"]
    return arr.indexOf("five")
}

console.log(unusualFive())

function unusualFiveTwo() {
    return "fiver".length;
}

console.log(unusualFiveTwo())