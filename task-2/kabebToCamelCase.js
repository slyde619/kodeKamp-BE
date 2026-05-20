// A function to convert kabeb-case strings to camelCase

function kabebToCamelCase(string) {
  if (!string) return;

  let parts = string.split("-");

  let result = parts[0]; // keep the first word

  for (let i = 1; i < parts.length; i++) {
    result += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);
  }

  return result;
}

// Test
const input = "hello-there";

console.log(kabebToCamelCase(input));
