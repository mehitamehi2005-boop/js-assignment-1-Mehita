const num1 = 25;
const num2 = 15;
let result;

// Method 1: Simple if-else
if (num1 > num2) {
    result = num1 * 2;
}
else {
    result = num1 + num2;
}
console.log(result);

// Method 2: Ternary operator
result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);