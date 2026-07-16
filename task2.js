// Input variables for subject marks
const math = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bangla = 99.50;

// Calculate total and average
const totalMarks = math + biology + chemistry + physics + bangla;
const averageMarks = totalMarks / 5;

// Print result fixed to 2 decimal places
console.log(averageMarks.toFixed(2));