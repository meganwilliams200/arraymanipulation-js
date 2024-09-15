// 1. Initialize the Array
let numbers = [5, 3, 8, 1, 21];

// 2. Functions to Implement

// Add a Number
function addNumber(array, number) {
    array.push(number);
}

// Remove a Number
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Sort the Numbers
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Calculate Sum
function calculateSum(array) {
    return array.reduce((sum, value) => sum + value, 0);
}

// Calculate Average
function calculateAverage(array) {
    if (array.length === 0) return 0;
    const sum = calculateSum(array);
    return sum / array.length;
}

// 3. Main Program
console.log("Initial array:", numbers);

// Demonstrate adding a number
addNumber(numbers, 4);
console.log("After adding 4:", numbers);

// Demonstrate removing a number
removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

// Demonstrate sorting the array
const sortedArray = sortNumbers(numbers);
console.log("Sorted array:", sortedArray);

// Demonstrate calculating the sum
const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

// Demonstrate calculating the average
const average = calculateAverage(numbers);
console.log("Average of numbers:", average);