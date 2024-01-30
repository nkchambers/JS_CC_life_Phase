//CODECADEMY JAVASCRIPT CODING CHALLENGES - life_Phase challenge

// STARTING CODEBASE

// Task 1 - Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
// Here are the classifications:
// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

// Write your function here:

const lifePhase = age => {
    if (age < 0) {
        return 'This is not a valid age';
    }
    else if (age >= 0 && age < 4) {
        return 'baby';
    }
    else if (age >= 4 && age < 13) {
        return 'child';
    }
    else if (age >= 13 && age < 20) {
        return 'teen';
    }
    else if (age >= 20 && age < 65) {
        return 'adult';
    }
    else if (age >= 65 && age < 141) {
        return 'senior citizen';
    }
    else {
        return 'This is not a valid age';
    }
}






// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(2)) //should print 'baby'
console.log(lifePhase(5)) //should print 'child'
console.log(lifePhase(16)) //should print 'teen'
console.log(lifePhase(30)) //should print 'adult'
console.log(lifePhase(74)) //should print 'senior citizen'
console.log(lifePhase(150)) //should print 'This is not a valid age'

// We encourage you to add more function calls of your own to test your code!