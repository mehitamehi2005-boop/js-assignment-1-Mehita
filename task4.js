var res1 = isNaN('11');
var res2 = isNaN(2 - 10);

console.log(res1); 
console.log(res2); 

/*
Explanation:
- isNaN('11'): The string '11' can be automatically converted into the valid number 11. Since 11 is a number, it is NOT "Not-a-Number". Therefore, it returns false.
- isNaN(2 - 10): The expression evaluates to -8, which is a valid number. Since -8 is a number, it returns false.
*/
