function checkValue(val) {
  if (typeof val !== "number") {
    throw new Error("Input must be a number!");
  }

  // Check for out-of-bounds scores first
  if (val < 0 || val > 100) {
    return "Invalid Score";
  }

  let message = "";

  if (val >= 70) {
    message = "Excellent";
  } else if (val >= 60) {
    message = "Very Good";
  } else if (val >= 50) {
    message = "Good";
  } else if (val >= 40) {
    message = "Poor";
  } else {
    message = "Very Poor";
  }

  return message;
}

console.log(checkValue(47));
