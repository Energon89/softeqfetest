// Test 4
// Write a function that takes a list of strings and returns the sum of the list items that represents
// an integer (skipping the other items).

const array = [
  "1",
  "a",
  "25",
  "13.1",
  "12.35435",
  "7",
  "abc",
  NaN,
  undefined,
  ""
];
let result = 0;

function sumIntegers(array) {
  let result = 0;
  array.forEach(elem => {
    const value = parseFloat(elem);
    if (Number.isInteger(value)) {
      result += value;
    }
  });
  return result;
}

console.log(`Test 4. Input: ${array}.
Output: ${sumIntegers(array)}`);
