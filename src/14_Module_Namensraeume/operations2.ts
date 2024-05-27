function add(a: number, b: number): number {
    return a+b;
}
// - subtract (a: number, b: number)
function subtract(a: number, b: number) {
    return a-b;
}
// - multiply (a: number, b: number)
function multiply(a: number, b: number) {
    return a * b;
}
// - divide (a: number, b: number)
function divide(a: number, b: number){
    return a / b;
}

export {add as addNumbers, subtract as subtractNumbers, multiply as multiplyNumbers, divide as divideNumbers}