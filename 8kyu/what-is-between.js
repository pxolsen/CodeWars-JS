// INSTRUCTIONS:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between (a, b) {
    let answer = []
    for (let i = a; i <= b; i++) {
        answer.push(i)
    }
    return answer;
}

console.log(between(1, 4)) // [1,2,3,4]