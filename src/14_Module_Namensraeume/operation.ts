// Module-Namensräume-TS-1_2

// ? Erstelle zwei TypeScript-Dateien app.ts und operations.ts
// ? Erstelle in der operations.ts vier Funktionen
// - add (a: number, b: number)
function add(a: number, b: number){
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

// ? Die Funktionen sollen jeweils den Wert der Addition, Subtraktion, Multiplikation und Division zurückgeben

// ? Exportiere die Funktionen am Dateiende mit ihren tatsächlichen Namen
export { add, subtract, multiply, divide }

