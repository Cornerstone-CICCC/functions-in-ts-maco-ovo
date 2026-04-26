// Create a function named combine that accepts either two numbers or two strings and returns their concatenated value.
// Use function overloading to define the function in two variants: one for numbers and another for strings.
// Return the string.



function combine(val1: number | string, val2: number | string): string {
  return String(val1) + String(val2);
}

console.log(combine(2, 3)); // Expected output: "23"
console.log(combine("Hello, ", "world!")); // Expected output: "Hello, world!"
console.log(combine(5, " days")); // Expected output: "5 days"

export default combine;
