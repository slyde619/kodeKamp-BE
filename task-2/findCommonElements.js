// Function to find shared elements in three given array

function findCommonElements(arr1, arr2, arr3) {
  // Check if the arguments passed are actually an array
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || !Array.isArray(arr3))
    return [];

  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (
      arr2.includes(arr1[i]) &&
      arr3.includes(arr1[i]) &&
      !result.includes(arr1[i])
    ) {
      result.push(arr1[i]);
    }
  }

  return result;
}

// Test
const firstArr = [1, 2, 3, 4];
const secondArr = [3, 4, 5];
const lastArr = [3, 4, 5, 6];

console.log(findCommonElements(firstArr, secondArr, lastArr));
