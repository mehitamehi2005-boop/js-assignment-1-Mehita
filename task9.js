const age = 22;
const isStudent = true;
const regularFare = 800;

if (age < 10) {
    // Children are free
    console.log(0);
}
else if (isStudent) {
    // Students get 50% discount
    const discount = regularFare * 0.5;
    const payAmount = regularFare - discount;
    console.log(payAmount);
}
else if (age >= 60) {
    // Senior citizens get 15% discount
    const discount = regularFare * 0.15;
    const payAmount = regularFare - discount;
    console.log(payAmount);
}
else {
    // Regular ticket fare
    console.log(regularFare);
}