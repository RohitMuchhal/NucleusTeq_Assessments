// Assignment 1: Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("Assignment 1: Reverse a String");
console.log("Input: 'rohit'");
console.log("Output:", reverseString("rohit"));
console.log("------------");

// Assignment 2: Find the Largest Number in an Array
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("Assignment 2: Find the Largest Number in an Array");
console.log("Input: [3, 7, 2, 9, 5]");
console.log("Output:", findLargest([3, 7, 2, 9, 5]));
console.log("------------");

// Assignment 3: Double the Numbers Using map
function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}
console.log("Assignment 3: Double the Numbers Using map");
console.log("Input: [1, 2, 3]");
console.log("Output:", doubleNumbers([1, 2, 3]));
console.log("------------");

// Assignment 4: Filter Even Numbers Using filter
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log("Assignment 4: Filter Even Numbers Using filter");
console.log("Input: [1, 2, 3, 4, 5, 6]");
console.log("Output:", getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("------------");
