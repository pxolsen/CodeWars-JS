//INSTRUCTIONS:
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
    const averageGrade = (s1 + s2 + s3) / 3
    let letterGrade;
    
    switch(true) {
        case (averageGrade >= 90):
            letterGrade = 'A';
            break;
        case (averageGrade >= 80):
            letterGrade = 'B';
            break;
        case (averageGrade >= 70):
            letterGrade = 'C';
            break;
        case (averageGrade >= 60):
                letterGrade = 'D';
                break;
        case (averageGrade < 60):
                letterGrade = 'F';
                    break;
    }
    return letterGrade;
}

console.log(getGrade(91, 92, 93))
console.log(getGrade(81, 82, 83))