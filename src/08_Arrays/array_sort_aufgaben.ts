// Array-TS-Sort-Level-1_1 (sort)

// - In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// - Sortiere die Programmiersprachen alphabetisch.
// - Deklariere die Funktion sortAlphabetically.
// - Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
// - Rufe die Funktion sortAlphabetically auf.
// - Überprüfe den Erfolg in der Konsole.
// - Lege selbst ein weiteres Array europeanCountries mit einigen Ländern an, z. B.
// France, Germany, Sweden, Great Britain, Czech Republic, Switzerland
// - Rufe die Funktion sortAlphabetically mit den europeanCountries auf
// - Überprüfe den Erfolg in der Konsole.

let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

// Use the sort() function to sort the array alphabetically

function sortAlphabetically(a: string, b: string){
    return a.localeCompare(b);
}

// Call the function and store the sorted array
let sortedLanguages = sortAlphabetically(languages);

// Display the sorted array
console.log(sortAlphabetically);

let europeanCountries: string[] = [
    "France", 
    "Germany", 
    "Sweden", 
    "Great Britain", 
    "Czech Republic", 
    "Switzerland"
];

let sortedEuropeanCountries = sortAlphabetically(europeanCountries);

console.log(sortAlphabetically);

// Array-TS-Sort-Level-1_2 (sort + reverse)

// - In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// - Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// - Nenne die Funktion sortDescending (= sortiere absteigend).
// - Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// - Rufe die Funktion sortDescending auf.
// - Überprüfe das Ergebnis in der Konsole.
// - Rufe die Funktion auch für europeanCountries auf
// - Überprüfe das Ergebnis in der Konsole.

// Declare function that sorts array descending:



//   function sortDescendingString(a: string, b: string) {
//     return b.localeCompare(a);
//   }

// console.log('languages descending', languages.sort(sortDescendingString));

// let descendingLanguages= sortDescendingString(languages);

// // Funktion, um array aufsteigend alphabetisch zu sortieren

// function sortAscendingString(firstString: string, secondString: string) {
//     return firstString.localeCompare(secondString);
//   }



// Array-TS-Sort-Level-1_3 (sort)

// - In dieser Übung lernst du, wie man die Nummern 0-99 aufsteigend sortiert.
// - Sortiere die Zahlen aus dem Array im Code-Snippet aufsteigend.
// - Verwende den Befehl sort() und schau dir diese [Doku](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?retiredLocale=de) genauer an, um die Aufgabe korrekt auszuführen.
// - Überprüfe das Ergebnis in der Konsole.
// - Sortiere anschließend die Zahlen aus dem Array absteigend
// - Überprüfe das Ergebnis in der Konsole.

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort()
console.log(numArray1);
