import { addFive } from './calculator';

 console.log(addFive(5)); 
 console.log(addFive(50)); 
 console.log(addFive(7)); 

//  Module-Namensräume-TS-1_2

// ? Importiere die Funktionen in der app.ts
import { add, subtract, multiply, divide } from './operation';

// ? Rufe die Funktionen mit beliebigen Zahlen auf
// ? Die Ergebnisse sollen in der Konsole ausgegeben werden.
console.log(add(5, 10));
console.log(subtract(5, 2));
console.log(multiply(2, 4));
console.log(divide(6 ,2));

// ? Erstelle eine weitere Datei operations2.ts

// ? Kopiere die Funktionen aus der operations.ts
// ? Exportiere diese Funktionen am Dateiende mit den neuen Namen:
//  ? addNumbers, subtractNumbers, multiplyNumbers und divideNumbers

// ? Importiere die Funktionen in der app.ts
import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "./operations2";

// ? Rufe die Funktionen mit beliebigen Zahlen auf
// ? Die Ergebnisse sollen in der Konsole ausgegeben werden.
console.log(addNumbers(6,7));
console.log(subtractNumbers(6,7));
console.log(multiplyNumbers(6,7));
console.log(divideNumbers(6,7));

// Module-Namensräume-TS-1_3

// ? Erstelle drei TypeScript-Dateien app.ts, special-color.ts und random-color-generator.ts
// ? Die Datei special-color.ts soll ein Enum mit 10 beliebigen Farbnamen enthalten und per default exportieren
// ? Die Datei random-color-generator.ts soll eine Funktion randomColorGenerator() enthalten und per default exportieren
// ? Die Funktion soll zufällig eine der Farben aus dem Enum zurückgeben
// (Tipp: Math.random)
// - Importiere die Funktion unter dem Namen getRandomColor() in der app.ts

import randomColorGenerator from './random-color-generator';

// ? Rufe die Funktion mehrfach auf
// ? Die Ergebnisse sollen in der Konsole ausgegeben werden.
console.log(randomColorGenerator());
console.log(randomColorGenerator());

// Module-Namensräume-TS-2_1

// - Lege eine TypeScript-Datei text-tools.ts an
// - Fange mit der Zeile export {}; an
// - Erstelle einen Namensraum (namespace) TextTools
// - Der Namespace soll zwei Funktionen enthalten, die exportiert werden
//     - toUpperCase(text: string) soll den Text in Großbuchstaben zurückgeben
//     - reverse(text: string) soll den Text rückwärts ausgeben
// - Außerdem soll der Text “Das ist eine Konstante” als Konstante im Namespace TextTools enthalten sein, die ebenfalls exportiert wird
// - Rufe in der Datei app.ts die beiden Funktionen mit beliebigen Texten auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden
// - Lass dir die Konstante in der Konsole ausgeben


// Module-Namensräume-TS-3_1