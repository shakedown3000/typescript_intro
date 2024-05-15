
// Math-TS-Level-1_4

// - Finde mit Math.min den niedrigsten Wert aus den Zahlen im Code-Snippet.
// - Finde nun mit Math.max den höchsten Wert aus den Zahlen im Code-Snippet.
// - Lass dir das Ergebnis auf der Konsole ausgeben

let array: number[] = [393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488]

// Mit Spread Operator zerlegen in einzelne Elemente in eine Liste von Werten
// Math.min erwartet eine variable Anzahl von Einzelargumenten, nicht ein einzelnes Array!

let minimum: number = Math.min(...array);
console.log({minimum});
let maximum: number = Math.max(...array)
console.log({maximum});

// Math-TS-Level-2_1

// - Erstelle eine Function roundTo(Zahl, Genauigkeit){...}, die eine Zahl auf genaue Dezimalstellen rundet. So können die User:innen selber bestimmen, auf wie viele Nachkommastellen sie runden möchten.
// - Um die Funktion zu testen, schreibe: console.log(roundTo(3.1415926535, 5)); // 3.14159

// toFixed rundet auf die Anzahl Dezimalstellen -> "genauigkeit" 
// Ergebnis wird als String zurückgegeben aber
// Daher mit parseFloat wieder als Nummer umwandeln

function roundTo(zahl: number, genauigkeit: number): number {
    return parseFloat(zahl.toFixed(genauigkeit)); 
}

console.log(roundTo(3.1415926535, 3));
console.log(roundTo(5, 3));

