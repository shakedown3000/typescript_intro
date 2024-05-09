// Array-TS-Sort-Level-1_1 (sort)

// - In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// - Sortiere die Programmiersprachen alphabetisch.
/// - Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
// - Rufe die Funktion sortAlphabetically auf.

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

console.log(`Before sortation: ${languages}`);

// - Deklariere die Funktion sortAlphabetically. return element.sort() sortiert lexiklisch alphabetisch :)

function sortAlphabetically(sortingElement: string[]): string[] {
    return sortingElement.sort()
} 

// - Überprüfe den Erfolg in der Konsole.
console.log(`After sortation: ${sortAlphabetically(languages)}`);

// - Lege selbst ein weiteres Array europeanCountries mit einigen Ländern an, z. B.

let europeanCountries: string[] = [
    "France", 
    "Germany", 
    "Sweden", 
    "Great Britain", 
    "Czech Republic", 
    "Switzerland"
];

console.log(`Before sortation: ${europeanCountries}`);

// - Rufe die Funktion sortAlphabetically mit den europeanCountries auf
// - Überprüfe den Erfolg in der Konsole.
console.log(`After sortation: ${sortAlphabetically(europeanCountries)}`);



// Array-TS-Sort-Level-1_2 (sort + reverse)

// - In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// - Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// - Nenne die Funktion sortDescending (= sortiere absteigend).
// - Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.

function sortDescending(a: string, b: string) {
    // Wie sortiere ich in umgekehrter alphabetischer Reihenfolge? Mit localeCompare :)
    return b.localeCompare(a) // b - a bedeutet Differenz absteigend
}

// - Rufe die Funktion sortDescending auf.
// - Überprüfe das Ergebnis in der Konsole.
// die vorher definierte Funktion setzen wir in die Sort Funktion 

languages.sort(sortDescending);
console.log(`Descending: ${languages}`);

// - Rufe die Funktion auch für europeanCountries auf
// - Überprüfe das Ergebnis in der Konsole.


europeanCountries.sort(sortDescending);
console.log(`Descending: ${europeanCountries}`);



// Array-TS-Sort-Level-1_3 (sort)

// - In dieser Übung lernst du, wie man die Nummern 0-99 aufsteigend sortiert.
let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(`Before: ${numArray1}`); 

function sortAscendingNumbers(a: number, b:number): number {
    return a-b;
}
numArray1.sort(sortAscendingNumbers);

// - Überprüfe das Ergebnis in der Konsole.
console.log(`After with ascending numbers: ${numArray1}`);


// - Sortiere anschließend die Zahlen aus dem Array absteigend

numArray1.reverse();

// - Überprüfe das Ergebnis in der Konsole.

console.log(numArray1);



// Array-TS-Sort-Level-2_1

// - Schreibe ein kleines Programm, das Zeichenketten umkehrt.
// - Diese Function soll jeden String, der ihr als Parameter übergeben wird umdrehen können
// - Du wirst Array-Methoden verwenden müssen, um den String umzudrehen.
// - Rufe die Function mit deinem Namen als Parameter auf.
// - Überprüfe das Ergebnis in der Konsole.

// - Versuche diese Begriffe umzukehren:
let namesArray: string[] = [
    "Sergio",
    "Hannah",
    "Regallager",
    "Reliefpfeiler",
    "Rentner"
    ];

// Funktion deklarieren, um Strings abzufragen mit map: map erstellt ein neues array indem sie auf jedes element im array eine funktion anwendet
// Ich schreibe eine Funktion, die die Reihenfolge der Buchstaben ändert. Danach eine Funktion, die ein neues Map erstellt.
// Split Methode verwenden (The split() method in TypeScript allows you to split a string into an array of substrings by separating the string using a specified separator) -> Ergebnis ist ein array
// reverse zum Umdrehen aller elemente im array
// join um array wieder zusammenzufügen

function reverseNames(name: string): string {
    return name.split('').reverse().join(''); 
}


// Jetzt brauche ich eine Funktion, die es mir ermöglicht alle Namen aus dem Array abzurufen, nicht nur einen

function reverseAllNames(nameListNew: string[]): string[] {
    return nameListNew.map(reverseNames);
}

console.log(reverseAllNames(namesArray));

// - Versuche diese Sätze umzukehren:
//     - Ella mag alle Bohnen
//     - han nesaH has ennaH

// Split Methode um zunächst alle Wörter in einzelne Arrays zu zerlegen. Ich splitte beim Leerzeichen. Dann wende ich die Methode split erneut an um die einzelnen Buchstaben in Arrays zu zerlegen

function splitSentence(sentence: string): string {
    let firstArray: string[] = sentence.split(' '); // haben jetzt die Wörter getrennt in ein array
    console.log(firstArray); // ["Ella", "mag","alle","Bohnen"]
        function arrayReverse(name: string): string {
            return name.split('').reverse().join(''); // Reversen EINES Wortes
        }
        function reverseArray(testWord: string[]): string[] {
            return testWord.map(arrayReverse); // Abrufen aller Namen
        }
        console.log(reverseArray(firstArray))
        return reverseArray(firstArray).reverse().join(' '); // Am Ende noch mal Reverse
    
}

console.log(splitSentence('Ella mag alle Bohnen'));
console.log(splitSentence('han nesaH has ennaH'));
