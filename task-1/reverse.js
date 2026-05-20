function reverseString(string) {
  // If it's null or undefined, return null
  if (!string) return null;

  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
}

const hello = reverseString("");
console.log(hello);
