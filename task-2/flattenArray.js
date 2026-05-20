//  A function to flatten an array of 2 Dimensional array

function flattenArray(array) {
  // Check if argument is an array else retun an empty array
  if (!Array.isArray(array)) return [];

  const result = [];

  array.forEach((subArray) => {
    // Check if subarray is an array else return an empty array
    if (!Array.isArray(subArray)) return [];

    subArray.forEach((item) => {
      result.push(item);
    });
  });

  return result;
}

// Test
const input = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

console.log(flattenArray(input));
