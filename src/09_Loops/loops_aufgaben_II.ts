// Loops-TS-Level-1_10
// - Schreibe eine Funktion getHighestNumber
// - Die Funktion bekommt als Parameter ein Array von numbers übergeben
// - Die Funktion hat als Rückgabetyp den Typ number
// - Es soll der höchste Wert aus dem übergebenen Array von Zahlen ermittelt werden

// Überlegungen:
// Loop, der durch den gesamten array durchgeht von links nach rechts
// Wenn linke Nummer größer ist als rechte, gehe weiter, wenn kleiner return.
// Wir müssen jedoch zunächst alle Nummern sortieren

let myArrayX: number[] = [0, 5, 10, 110, 15, 55, 105];

function getHighestNumber(myArrayX: number[]): number {
    // Sortieren mit Sort Funktion
    console.log(`Before sortation: ${myArrayX}`);
    myArrayX.sort((a, b) => a - b); // Sortierung aufsteigend
    console.log(`After sortation: ${myArrayX}`);
    return myArrayX[myArrayX.length - 1];
}
console.log(`highest Number in the array: ${getHighestNumber(myArrayX)}`);
    
// Tipp: Gehe alle Zahlen durch und merke dir immer den aktuell höchsten Wert in einer Variable    
// - Anschließend wird dieser Wert mit return zurückgegeben
// - Rufe die Funktion mit mehreren Arrays auf, um zu testen, ob sie richtig funktioniert

function getNewHighestNumber(newNumbers: number[]): number {
    if (newNumbers.length === 0) {
        console.log("Das übergebene Array ist leer.");
        return 0;
    }
    let newHighestNumber: number = newNumbers[0]; // Startwert ist das erste Element im Array, wir gehen davon aus, dass es den höchsten Wert hat zunächst

    for (let i = 1; i < newNumbers.length; i++) {
        if (newNumbers[i] > newHighestNumber) {
            newHighestNumber = newNumbers[i]; // Aktualisieren des höchsten Werts, falls eine größere Zahl gefunden wird
        }
    }

    return newHighestNumber; // Rückgabe des höchsten Werts
}

// Testen der Funktion mit verschiedenen Arrays
const newArray1: number[] = [5, 10, 3, 8, 15];
const newArray2: number[] = [-2, -5, -10, -1, -20];
const newArray3: number[] = [100, 200, 50, 150];

console.log(getNewHighestNumber(newArray1)); // Ausgabe: 15
console.log(getNewHighestNumber(newArray2)); // Ausgabe: -1
console.log(getNewHighestNumber(newArray3)); // Ausgabe: 200



// Loops-TS-Level-1_11

// - Schreibe eine Funktion calculateSum mit einem Parameter maxNumber: number
// - Sie soll die Summe aller Zahlen von 1 bis zur angegebenen Zahl (maxNumber) berechnen und zurückgeben.
// - Verwende eine Schleife, um die Zahlen von 1 bis n zu durchlaufen und ihre Summe zu berechnen.

// Überlegungen:
// Wenn Zahl 5 ist Summe = 1+2+3+4+5

function calculateSum(maxNumber: number): number {
    let summe: number = 0;
    for (let index = 1; index <= maxNumber; index++){
        console.log(summe); // 0
        summe += index;
    }
    return summe;
}

console.log(calculateSum(5));

// Loops-TS-Level-2_3

// - Schreibe eine Funktion getNumberOfVowels
// - Sie soll die Anzahl der Vokale (A, E, I, O, U) in einem übergegebenen String zählen und zurückgeben.
// - Verwende eine Schleife, um jeden Buchstaben im übergebenen String zu durchzugehen, und eine Bedingung, um zu prüfen, ob es sich um einen Vokal handelt.
// - Teste die Funktion mit mehreren Strings

function getNumberOfVowels(word: string): number {
    // Wort kleinschreiben
    let counter: number = 0;
    word = word.toLocaleLowerCase();
    // Wort in Array zerlegen
    let wordArray = word.split("");
    console.log(wordArray);
    // zählen a, e, i, o, u
    for (let index = 0; index < word.length; index++) {
        // Starte im Index Null und überprüfe, ob Vokal
        if (wordArray[index] == "a" || 
        wordArray[index] === "e" || 
        wordArray[index] == "i" || 
        wordArray[index] == "o" || 
        wordArray[index] == "u")
        counter += 1;
        }
        return counter;
    }

    console.log(getNumberOfVowels("Anna"));
    console.log(getNumberOfVowels("Nico"));

// Loops-TS-Level-2_4

// - Schreibe eine Funktion addToFifty(): void
// - In der Funktion soll in einer Schleife eine Zufallszahl zwischen 1 und 10 generiert werden
// - Die Zahl soll jeweils auf der Konsole ausgegeben werden
// - Die Zufallszahlen sollen so lange aufaddiert werden, bis die Zahl 50 überschritten wird
// - Am Ende wird z. B. beim Gesamtergebnis 53 Folgendes ausgegeben

// '53 > 50. Stopping right here.'

// Überlegungen: wir wissen nicht, was der stopindex ist!

function addToFifty(): void {
    let outputNumber: number = 0;
    if (outputNumber <= 50) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            let randomNumber: number = Math.random() * 10;
            console.log(randomNumber);
            outputNumber += randomNumber
        }
    
    }
    console.log(outputNumber);
}

// Loops-TS-Level-3_5

// - Schreibe eine Funktion, die die [Fakultät](https://www.frustfrei-lernen.de/mathematik/fakultaet.html) (engl. Factorial) einer übergegebenen Zahl vom Typ number berechnet und das Ergebnis der Fakultätsberechnung zurückgibt.
// - Verwende eine Schleife, um die Multiplikation der Zahlen von 1 bis n durchzuführen.
// - Wenn 0 und 1 als Parameter übergeben werden, soll direkt das Ergebnis 1 zurückgegeben werden
// - Logik:
    
//     “Die Fakultät einer Zahl ist das Produkt aller positiven ganzen Zahlen kleiner oder gleich dieser Zahl.”
//     Einfacher verständlich sind vermutlich diese Beispiel-Berechnungen

// factorial(0) = 1
// factorial(1) = 1
// factorial(2) = 2 · 1 = 2
// factorial(3) = 3 · 2 · 1 = 6
// factorial(4) = 4 · 3 · 2 · 1 = 24
// factorial(5) = 5 · 4 · 3 · 2 · 1 = 120
// factorial(6) = 6 · 5 · 4 · 3 · 2 · 1 = 720

// Schau dir die Dokumentation von *= an, das könnte hilfreich sein
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment