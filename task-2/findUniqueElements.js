// A function to find unique elements of any array

function findUniqueElements(arr) {
  if (!Array.isArray(arr)) return [];

  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the element doesn't exist in the unique array and add to it
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  //   Sort each elements from lowest to highest value
  const sortedArr = uniqueArr.sort((a, b) => a - b);

  return sortedArr;
}

// Test
const input = [1, 3, 2, 3, 4, 5, 4, 2, 4, 5, 6];

console.log(findUniqueElements(input));
